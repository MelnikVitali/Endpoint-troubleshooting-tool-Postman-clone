import { useEffect, useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, useMediaQuery } from '@mui/material';
import { styles } from './styles';
import { PostmanActions, usePostmanStore } from '../../store/usePostmanStore';
import RequestBlock from '../RequestBlock/RequestBlock';
import ResponseBlock from '../ResponseBlock/ResponseBlock';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const matchesXS = useMediaQuery('(max-width:518px)');

  const [openDialog, setOpenDialog] = useState(false);

  const setUrl = usePostmanStore((state: PostmanActions) => state.setUrl);
  const resetState = usePostmanStore((state: PostmanActions) => state.resetState);

  const currentURL = document.querySelector('#root')?.getAttribute('data-url');

  useEffect(() => {
    if (currentURL) {
      console.log('currentURL -->', currentURL);
      setUrl(currentURL);
    }
  }, []);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    resetState();
    setOpenDialog(false);
  };

  return (
    <div className='app'>
      <Button variant='outlined' onClick={handleClickOpen} sx={{ margin: '20px 50px' }}>
        Open dialog
      </Button>
      <Dialog
        open={openDialog}
        onClose={() => handleClose()}
        fullWidth={true}
        sx={{
          ...styles.wrapper,
          '& .MuiDialog-container': {
            minWidth: '360px',
            '& .MuiDialog-paper': {
              maxWidth: '1400px',
              overflowY: 'scroll',
              margin: `${matchesXS ? '6px' : '32px'}`,
              width: `${matchesXS ? '100%' : 'calc(100% - 64px)'}`,
              maxHeight: `${matchesXS ? 'calc(100% - 12px)' : 'calc(100% - 64px)'}`,
            },
          },
        }}
      >
        <Toaster />
        <DialogContent sx={styles.dialogContainer}>
          <Box component='header' sx={styles.dialogHeader}>
            <h3 color='secondary'>Endpoint troubleshooting tool</h3>
          </Box>
          <RequestBlock />
          <ResponseBlock />
          <DialogActions>
            <Button variant='contained' onClick={() => handleClose()}>
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
