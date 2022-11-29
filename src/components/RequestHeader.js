import React from 'react';
import { Box, Button, MenuItem } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Field } from 'formik';
import { Select, TextField } from 'formik-mui';
import { isValidUrl } from '../utils/isValidUrl';
import { styles } from './styles';

const RequestHeader = ({url, loading, errors, isValid, touched, handleChange}) => {
    return (
        <Box sx={styles.formWrapper}>
            <Field
                component={Select}
                as="select"
                formControl={{sx: styles.selectRequest}}
                id="method"
                name="method"
                labelId="method-simple"
                label="Method"
                autoComplete="off"
                disabled={false}
            >
                <MenuItem value="GET">GET</MenuItem>
                <MenuItem value="POST">POST</MenuItem>
            </Field>
            <Field
                autoFocus
                component={TextField}
                error={Boolean(errors.url)}
                label={!errors.url ? 'URL' : false}
                name="url"
                plaseholder={url}
                variant="outlined"
                InputProps={{notched: true}}
                sx={styles.urlTextField}
                disabled={false}
                autoComplete="off"
                validate={(url) =>
                    !url.trim()
                        ? 'Please enter URL'
                        : !isValidUrl(url)
                            ? 'URL is not valid'
                            : undefined
                }
            />
            <LoadingButton sx={styles.buttonSend} disabled={loading} loading={loading} variant="contained"
                           type="submit">
                Send
            </LoadingButton>
        </Box>
    );
};

export default RequestHeader;