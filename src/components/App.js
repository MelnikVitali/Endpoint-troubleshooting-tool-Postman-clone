import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import prettyBytes from 'pretty-bytes';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    useMediaQuery,
} from '@mui/material';
import { keyValuePairsToObjects } from '../utils/keyValuePairsToObjects';
import ResponseBlock from './ResponseBlock';
import RequestHeader from './RequestHeader';
import RequestTabs from './RequestTabs';
import { styles } from './styles';

const App = () => {
    const matchesXS = useMediaQuery('(max-width:518px)');
    const [openDialog, setOpenDialog] = React.useState(false);
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [time, setTime] = useState('');
    const [size, setSize] = useState('');
    const [cookie, setCookie] = useState('');
    const [response, setResponse] = useState({});
    const [responseHeaders, setResponseHeaders] = useState({});
    const [reqBody, setReqBody] = useState('{\n  \n}');

    const currentURL = document.querySelector('#root').getAttribute('data-url');

    useEffect(() => {
        if (currentURL) {
            console.log('currentURL -->', currentURL);
            setUrl(currentURL);
        }
    }, []);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    axios.interceptors.request.use((request) => {
        request.customData = request.customData || {};
        request.customData.startTime = new Date().getTime();
        return request;
    });

    const updateEndTime = (response) => {
        if (response !== undefined) {
            response.customData = response.customData || {};
            response.customData.time =
                new Date().getTime() - response.config.customData.startTime;
            return response;
        }
    };

    axios.interceptors.response.use(updateEndTime, (e) => {
        return Promise.reject(updateEndTime(e.response));
    });

    const sendRequest = (data) => {
        setLoading(true);

        const requestBody = reqBody.toString();

        let body;

        if (data.method === 'POST') {
            try {
                body = JSON.parse(requestBody);
            } catch (e) {
                toast.error(`Something is wrong with the JSON data.`);
                setLoading(false);
                return;
            }
        }

        const options = {
            url: data.url,
            method: data.method,
            params: keyValuePairsToObjects(data.query_data),
            headers: {
                'Content-Type':
                    'application/x-www-form-urlencoded; charset=UTF-8',
                // 'Access-Control-Allow-Origin': '*',
                // 'Content-Type': 'application/json',
                // 'Access-Control-Allow-Methods':
                // 'GET, PUT, POST, DELETE, OPTIONS',
                ...keyValuePairsToObjects(data.header_data),
            },
            data: body || {},
            validateStatus: () => true,
        };

        axios(options)
            .then((response) => {
                setLoading(false);

                if (response !== undefined) {
                    setStatus(response.status);
                    setResponse(response.data);
                    setResponseHeaders(response.headers);
                    setTime(response.customData.time);
                    setSize(
                        prettyBytes(
                            JSON.stringify(response.data).length +
                                JSON.stringify(response.headers).length
                        )
                    );
                    if (document.cookie) setCookie(document.cookie);
                    if (response.status.toString()[0] === '2') {
                        toast.success(
                            `successfully returned response status:${response.status}`
                        );
                    } else {
                        toast.error(`response status:${response.status}`);
                    }
                }
            })
            .catch((error) => {
                setLoading(false);
                console.log('error response', error);
                setStatus('');
                setTime('');
                setCookie('');
                setSize('');
                setResponse({});
                setResponseHeaders({});
                toast.error(`${error?.message}`);
            });
    };

    return (
        <div className='app'>
            <Button
                variant='outlined'
                onClick={handleClickOpen}
                sx={{ margin: '20px 50px' }}
            >
                Open dialog
            </Button>
            <Dialog
                open={openDialog}
                onClose={() => handleClose()}
                fullWidth={true}
                sx={{
                    ...styles.wrapper,
                    '& .MuiDialog-container': {
                        minWidth: '360px',
                        '& .MuiDialog-paper': {
                            maxWidth: '1400px',
                            overflowY: 'scroll',
                            margin: `${matchesXS ? '6px' : '32px'}`,
                            width: `${
                                matchesXS ? '100%' : 'calc(100% - 64px)'
                            }`,
                            maxHeight: `${
                                matchesXS
                                    ? 'calc(100% - 12px)'
                                    : 'calc(100% - 64px)'
                            }`,
                        },
                    },
                }}
            >
                <DialogContent sx={styles.dialogContainer}>
                    <Box component='header' sx={styles.dialogHeader}>
                        <h3 color='secondary'>Endpoint troubleshooting tool</h3>
                    </Box>
                    <Formik
                        initialValues={{
                            url: url || '  ',
                            query_data: [{}],
                            header_data: [{}],
                            method: 'GET',
                        }}
                        onSubmit={(details) => {
                            sendRequest(details);
                        }}
                    >
                        {({
                            values,
                            errors,
                            isValid,
                            touched,
                            handleChange,
                        }) => (
                            <Form>
                                <RequestHeader
                                    url={url}
                                    errors={errors}
                                    isValid={isValid}
                                    touched={touched}
                                    handleChange={handleChange}
                                    loading={loading}
                                />
                                <RequestTabs
                                    values={values}
                                    reqBody={reqBody}
                                    setReqBody={setReqBody}
                                />
                            </Form>
                        )}
                    </Formik>
                    <ResponseBlock
                        status={status}
                        time={time}
                        size={size}
                        cookie={cookie}
                        response={response}
                        responseHeaders={responseHeaders}
                        loading={loading}
                    />
                    <DialogActions>
                        <Button
                            variant='container'
                            onClick={() => handleClose()}
                        >
                            Cancel
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default App;
