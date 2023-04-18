export const styles = {
  responseStatusBox: {
    display: 'flex',
  },
  responseStatusItem: {
    marginRight: '24px',
  },
  responseData: {
    minHeight: '34px',
    maxHeight: '400px',
    overflow: 'auto',
    backgroundColor: '#f5f5f5',
    border: '1px solid rgba(0,0,0,0.23)',
    borderRadius: '3px',
    padding: '4px',
    // marginBottom: '20px',
  },
  statusColorOk: {
    color: '#388e3c',
  },
  statusColorError: {
    color: '#d32f2f',
  },
  wrapperTabs: {
    marginTop: '3px',
  },
  wrapperTab: {
    paddingTop: '12px',
  },
  tab: {
    textTransform: 'none !important',
    '&::active': {
      border: '1px solid #fff',
    },
  },
};
