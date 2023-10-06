export const styles = {
  responseStatusBox: {
    display: 'flex',
    fontFamily: 'Roboto, sans-serif',
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
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
  },
  statusColorOk: {
    color: '#388e3c',
  },
  statusColorError: {
    color: '#d32f2f',
  },
  wrapperTabs: {
    marginTop: '3px',
    fontFamily: 'Roboto, sans-serif',
  },
  wrapperTab: {
    paddingTop: '12px',
  },
  tab: {
    textTransform: 'none !important',
    fontFamily: 'Roboto, sans-serif',
    '&::active': {
      border: '1px solid #fff',
    },
  },
};
