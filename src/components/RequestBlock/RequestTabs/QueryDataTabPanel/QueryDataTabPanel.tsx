import React, { FC } from 'react';
import { Field, FieldArray } from 'formik';
import { Box, Button } from '@mui/material';
import { styles } from './styles';
import { TextField } from 'formik-mui';

interface QueryDataTabPanelProps {
    values: {
        url: string;
        query_data: {}[];
        header_data: {}[];
        method: string;
    };
}

const QueryDataTabPanel: FC<QueryDataTabPanelProps> = ({ values }) => {
    return (
        <FieldArray name='query_data'>
            {(arrayHelpers) => (
                <div>
                    {values.query_data.map(
                        (info: Record<string, string>, index: number) => {
                            return (
                                <Box
                                    component='div'
                                    sx={styles.keyValueBox}
                                    key={index}
                                >
                                    <Field
                                        component={TextField}
                                        variant='outlined'
                                        sx={styles.keyValueField}
                                        placeholder='Key'
                                        name={`query_data.${index}.key`}
                                        InputProps={{ notched: true }}
                                        value={info?.key || ''}
                                        type='input'
                                        autoComplete='off'
                                        disabled={false}
                                    />
                                    <Field
                                        component={TextField}
                                        sx={styles.keyValueField}
                                        placeholder='Value'
                                        name={`query_data.${index}.value`}
                                        value={info?.value || ''}
                                        InputProps={{ notched: true }}
                                        type='input'
                                        autoComplete='off'
                                        disabled={false}
                                    />
                                    <Button
                                        variant='outlined'
                                        size='small'
                                        color='error'
                                        onClick={() =>
                                            arrayHelpers.remove(index)
                                        }
                                    >
                                        x
                                    </Button>
                                </Box>
                            );
                        }
                    )}
                    <Button
                        variant='outlined'
                        size='small'
                        onClick={() => arrayHelpers.push({})}
                        sx={{ margin: '10px 0' }}
                        color='primary'
                    >
                        Add
                    </Button>
                </div>
            )}
        </FieldArray>
    );
};

export default QueryDataTabPanel;
