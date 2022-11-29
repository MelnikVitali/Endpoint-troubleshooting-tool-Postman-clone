import React from 'react';
import { Field, FieldArray } from 'formik';
import { Box, Button } from '@mui/material';
import { styles } from './styles';
import { TextField } from 'formik-mui';

const QueryDataTabPanel = ({values}) => {
    return (
        <FieldArray name="query_data">
            {(arrayHelpers) => (
                <div>
                    {values.query_data.map((info, index) => {
                        return (<Box component="div" sx={styles.keyValueBox} key={index}>
                            <Field
                                component={TextField}
                                variant="outlined"
                                sx={styles.keyValueField}
                                placeholder="Key"
                                name={`query_data.${index}.key`}
                                InputProps={{notched: true}}
                                value={info.key || ''}
                                type="input"
                                autoComplete="off"
                                disabled={false}
                            />
                            <Field
                                component={TextField}
                                sx={styles.keyValueField}
                                placeholder="Value"
                                name={`query_data.${index}.value`}
                                value={info.value || ''}
                                InputProps={{notched: true}}
                                type="input"
                                autoComplete="off"
                                disabled={false}
                            />
                            <Button
                                variant="outlined" size="small"
                                color="error"
                                onClick={() => arrayHelpers.remove(index)}
                            >
                                x
                            </Button>
                        </Box>);
                    })}
                    <Button variant="outlined" size="small"
                            onClick={() => arrayHelpers.push({})}
                            sx={{margin: '10px 0'}}
                            color="primary"
                    >
                        Add
                    </Button>
                </div>)}
        </FieldArray>
    );
};

export default QueryDataTabPanel;