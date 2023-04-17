import React from 'react';
import { Box } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { githubLight } from '@uiw/codemirror-theme-github';
import { json } from '@codemirror/lang-json';
import { styles } from './styles';
import {
    PostmanActions,
    PostmanState,
    usePostmanStore,
} from '../../../../store/usePostmanStore';

const BodyDataTabPanel = () => {
    const reqBody = usePostmanStore((state: PostmanState) => state.reqBody);
    const setReqBody = usePostmanStore(
        (state: PostmanActions) => state.setReqBody
    );

    const onChange = React.useCallback((value: string, viewUpdate: any) => {
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
