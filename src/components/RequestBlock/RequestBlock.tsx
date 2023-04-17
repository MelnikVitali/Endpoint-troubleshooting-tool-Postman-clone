import React from 'react';
import { Formik, Form } from 'formik';
import {
    PostmanActions,
    PostmanState,
    usePostmanStore,
} from '../../store/usePostmanStore';
import RequestHeader from './RequestHeader/RequestHeader';
import RequestTabs from './RequestTabs/RequestTabs';

const RequestBlock = () => {
    const url = usePostmanStore((state: PostmanState) => state.url);
    const isLoading = usePostmanStore((state: PostmanState) => state.isLoading);
    const fetchRequest = usePostmanStore(
        (state: PostmanActions) => state.fetchRequest
    );

    const sendRequest = (data: any) => {
        fetchRequest(data);
    };
    return (
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
            {({ values, errors, isValid, touched, handleChange }) => (
                <Form>
                    <RequestHeader
                        url={url}
                        errors={errors}
                        isValid={isValid}
                        touched={touched}
                        handleChange={handleChange}
                        isLoading={isLoading}
                    />
                    <RequestTabs values={values} />
                </Form>
            )}
        </Formik>
    );
};

export default RequestBlock;
