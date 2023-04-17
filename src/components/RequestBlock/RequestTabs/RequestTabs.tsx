import React, { FC, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { styles } from './styles';
import QueryDataTabPanel from './QueryDataTabPanel/QueryDataTabPanel';
import HeaderDataTabPanel from './HeaderDataTabPanel/HeaderDataTabPanel';
import BodyDataTabPanel from './BodyDataTabPanel/BodyDataTabPanel';

interface RequestTabsProps {
    values: {
        url: string;
        query_data: {}[];
        header_data: {}[];
        method: string;
    };
}

const RequestTabs: FC<RequestTabsProps> = ({ values }) => {
    const [valueTabForm, setValueTabForm] = useState(0);

    const handleChangeTabsForm = (
        event: React.SyntheticEvent,
        newValue: React.SetStateAction<number>
    ) => {
        setValueTabForm(newValue);
    };
    return (
        <Box sx={styles.wrapperTabs}>
            <Tabs
                value={valueTabForm}
                TabIndicatorProps={{ sx: { height: 4, bottom: 2 } }}
                onChange={handleChangeTabsForm}
            >
                <Tab label='Query Params' sx={styles.tab} />
                <Tab label='Headers' sx={styles.tab} />
                <Tab label='Body' sx={styles.tab} />
            </Tabs>

            <Box
                role='tabpanel'
                hidden={valueTabForm !== 0}
                id={`simple-tabpanel-${0}`}
                aria-labelledby={`simple-tab-${0}`}
                sx={styles.wrapperTab}
            >
                <QueryDataTabPanel values={values} />
            </Box>

            <Box
                role='tabpanel'
                hidden={valueTabForm !== 1}
                id={`simple-tabpanel-${1}`}
                aria-labelledby={`simple-tab-${1}`}
                sx={styles.wrapperTab}
            >
                <HeaderDataTabPanel values={values} />
            </Box>

            <Box
                role='tabpanel'
                hidden={valueTabForm !== 2}
                id={`simple-tabpanel-${2}`}
                aria-labelledby={`simple-tab-${2}`}
                sx={styles.wrapperTab}
            >
                <BodyDataTabPanel />
            </Box>
        </Box>
    );
};

export default RequestTabs;
