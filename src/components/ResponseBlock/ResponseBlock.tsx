import React, { useState } from 'react';
import { Box, Tab, Tabs, CircularProgress } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { githubLight } from '@uiw/codemirror-theme-github';
import { json } from '@codemirror/lang-json';
import { styles } from './styles';
import { PostmanState, usePostmanStore } from '../../store/usePostmanStore';

const ResponseBlock = () => {
  const [valueTabResponse, setValueTabResponse] = useState(0);

  const status = usePostmanStore((state: PostmanState) => state.status);
  const time = usePostmanStore((state: PostmanState) => state.time);
  const size = usePostmanStore((state: PostmanState) => state.size);
  const response = usePostmanStore((state: PostmanState) => state.response);
  const cookie = usePostmanStore((state: PostmanState) => state.cookie);
  const responseHeaders = usePostmanStore((state: PostmanState) => state.responseHeaders);
  const isLoading = usePostmanStore((state: PostmanState) => state.isLoading);

  const handleChangeTabsResponse = (event: React.SyntheticEvent, newValue: number) => {
    setValueTabResponse(newValue);
  };

  return (
    <Box sx={{ fontFamily: 'Roboto, sans-serif' }}>
      <Box component='h3' sx={{ margin: '12px 0 8px' }}>
        Response
      </Box>
      <Box component='div' sx={styles.responseStatusBox}>
        <Box component='div' sx={styles.responseStatusItem}>
          Status:&nbsp;
          <Box
            component='span'
            sx={status.toString()[0] === '2' ? styles.statusColorOk : styles.statusColorError}
          >
            {status}{' '}
          </Box>
        </Box>
        <Box component='div' sx={styles.responseStatusItem}>
          Time:&nbsp;{time}&nbsp;{time ? 'ms' : null}
        </Box>
        <Box component='div' sx={styles.responseStatusItem}>
          Size:&nbsp;{size}
        </Box>
      </Box>

      <Box sx={styles.wrapperTabs}>
        <Tabs
          value={valueTabResponse}
          TabIndicatorProps={{ sx: { height: 4, bottom: 2 } }}
          onChange={handleChangeTabsResponse}
        >
          <Tab label='Data' sx={styles.tab} />
          <Tab label='Headers' sx={styles.tab} />
          <Tab label='Cookies' sx={styles.tab} />
        </Tabs>
        <Box
          role='tabpanel'
          hidden={valueTabResponse !== 0}
          id={`simple-tabpanelResponse-${0}`}
          aria-labelledby={`simple-Response-${0}`}
        >
          <Box component='div' sx={styles.responseData}>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <CodeMirror
                value={JSON.stringify(response, null, 2)}
                theme={githubLight}
                extensions={[json()]}
              />
            )}
          </Box>
        </Box>
        <Box
          role='tabpanel'
          hidden={valueTabResponse !== 1}
          id={`simple-tabpanelResponse-${1}`}
          aria-labelledby={`simple-tabResponse-${1}`}
        >
          <Box component='div' sx={styles.responseData}>
            <CodeMirror
              value={JSON.stringify(responseHeaders, null, 2)}
              theme={githubLight}
              extensions={[json()]}
            />
          </Box>
        </Box>
        <Box
          role='tabpanel'
          hidden={valueTabResponse !== 2}
          id={`simple-tabpanelResponse-${2}`}
          aria-labelledby={`simple-tabResponse-${2}`}
        >
          <Box component='pre' sx={styles.responseData}>
            {/* {JSON.stringify(cookie, null, 2)} */}
            {cookie}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResponseBlock;
