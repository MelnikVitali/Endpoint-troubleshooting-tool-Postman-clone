import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { styles } from './styles';
import QueryDataTabPanel from './QueryDataTabPanel';
import HeaderDataTabPanel from './HeaderDataTabPanel';
import CodeMirrorEditorPane from './CodeMirrorEditorPane';

const RequestTabs = ({values, doc, setDoc}) => {
    const [valueTabForm, setValueTabForm] = useState(0);

    const handleChangeTabsForm = (event, newValue) => {
        setValueTabForm(newValue);
    };

    return (
        <Box sx={styles.wrapperTabs}>
            <Tabs value={valueTabForm}
                  TabIndicatorProps={{sx: {height: 4, bottom: 2}}}
                  onChange={handleChangeTabsForm}
            >
                <Tab label="Query Params" sx={styles.tab}/>
                <Tab label="Headers" sx={styles.tab}/>
                <Tab label="Body" sx={styles.tab}/>
            </Tabs>
            <Box
                role="tabpanel"
                hidden={valueTabForm !== 0}
                id={`simple-tabpanel-${0}`}
                aria-labelledby={`simple-tab-${0}`}
                sx={styles.wrapperTab}
            >
                <QueryDataTabPanel values={values}/>
            </Box>
            <Box
                role="tabpanel"
                hidden={valueTabForm !== 1}
                id={`simple-tabpanel-${1}`}
                aria-labelledby={`simple-tab-${1}`}
                sx={styles.wrapperTab}
            >
                <HeaderDataTabPanel values={values}/>
            </Box>
            <Box
                role="tabpanel"
                hidden={valueTabForm !== 2}
                id={`simple-tabpanel-${2}`}
                aria-labelledby={`simple-tab-${2}`}
                sx={styles.wrapperTab}
            >
                <Box component="div" sx={styles.responseData}>
                    <CodeMirrorEditorPane
                        doc={doc}
                        setDoc={setDoc}/>
                </Box>
            </Box>
        </Box>
    );
};

export default RequestTabs;