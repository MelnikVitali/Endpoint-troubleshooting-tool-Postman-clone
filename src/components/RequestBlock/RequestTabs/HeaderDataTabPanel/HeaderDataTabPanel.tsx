import React, { FC } from 'react';
import { Field, FieldArray } from 'formik';
import { Box, Button } from '@mui/material';
import { styles } from './styles';
import { TextField } from 'formik-mui';

interface HeaderDataTabPanelProps {
    values: {
        url: string;
        query_data: {}[];
        header_data: {}[];
        method: string;
    };
}

const HeaderDataTabPanel: FC<HeaderDataTabPanelProps> = ({ values }) => {
    return (
        <FieldArray name='header_data'>
            {(arrayHelpers) => (
                <div>
                    {values.header_data.map(
                        (info: Record<string, string>, index) => {
                            return (
                                <Box
                                    component='div'
                                    sx={styles.keyValueBox}
                                    key={index}
                                >
                                    <Field
                                        component={TextField}
                                        sx={styles.keyValueField}
                                        placeholder='Key'
                                        name={`header_data.${index}.key`}
                                        value={info.key || ''}
                                        InputProps={{ notched: true }}
                                        type='input'
                                        autoComplete='off'
                                        disabled={false}
                                    />
                                    <Field
                                        component={TextField}
                                        sx={styles.keyValueField}
                                        placeholder='Value'
                                        name={`header_data.${index}.value`}
                                        value={info.value || ''}
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
                        sx={{ margin: '12px 0 0' }}
                        color='primary'
                    >
                        Add
                    </Button>
                </div>
            )}
        </FieldArray>
    );
};

export default HeaderDataTabPanel;
