export const styles = {
  formWrapper: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
    fontFamily: 'Roboto, sans-serif',
  },
  selectRequest: {
    width: 150,
    minWidth: '88px',
    marginRight: '6px',
    fontFamily: 'Roboto, sans-serif',
    '& .MuiInputBase-root ': {
      height: 43,
      backgroundColor: '#f5f5f5',
    },
  },
  buttonSend: {
    width: 100,
    height: 43,
    marginLeft: '12px',
  },
  urlTextField: {
    width: '100%',
    '& .MuiInputBase-root ': {
      height: 43,
      backgroundColor: '#f5f5f5',
    },
    '& label.Mui-error': {
      top: '-5px',
    },
    '& .MuiInputBase-root.Mui-error>fieldset>legend': {
      // display:'none',
      '& span': {
        display: 'none',
      },
    },
  },
};
