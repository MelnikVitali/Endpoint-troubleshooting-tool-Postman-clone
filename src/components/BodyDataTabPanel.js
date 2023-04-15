import React from 'react';
import { Box } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { githubLight } from '@uiw/codemirror-theme-github';
import { json } from '@codemirror/lang-json';
import { styles } from './styles';

const BodyDataTabPanel = ({ reqBody, setReqBody }) => {
    const onChange = React.useCallback((value, viewUpdate) => {
        setReqBody(value);
    }, []);

    return (
        <Box component='div' sx={styles.responseData}>
            <CodeMirror
                value={reqBody}
                // height='200px'
                theme={githubLight}
                extensions={[json()]}
                onChange={onChange}
            />
        </Box>
    );
};

export default BodyDataTabPanel;
