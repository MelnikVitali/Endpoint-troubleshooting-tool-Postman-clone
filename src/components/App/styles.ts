import { pxToRem } from '../../utils/pxToRem';

export const styles = {
  wrapper: {
    '& .MuiDialog-container': {
      maxWidth: pxToRem(1536),
      minWidth: '360px',
      margin: 'auto',

      '& .MuiDialog-paper': {
        maxWidth: pxToRem(1400),
        overflowY: 'scroll',
        width: 'calc(100% - 64px)',
        maxHeight: 'calc(100% - 64px)',
        minHeight: pxToRem(490),
        margin: '32px',

        zIndex: 1500,
      },
    },
    '& div': {
      '*': {
        scrollbarWidth: 'thin',
        scrollbarColor: '#B7B7B7 transparent',
        '&::-webkit-scrollbar': {
          width: 8,
          height: 8,
          backgroundColor: 'transparent',
          zIndex: 1500,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: 6,
          backgroundColor: '#B7B7B7',
          minHeight: 250,
          minWidth: 24,
          zIndex: 1500,
        },
        '&::-webkit-scrollbar-thumb:focus': {
          backgroundColor: '#adadad',
          zIndex: 1500,
        },
        '&::-webkit-scrollbar-thumb:active': {
          backgroundColor: '#adadad',
          zIndex: 1500,
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#adadad',
          zIndex: 1500,
        },
        '&::-webkit-scrollbar-corner': {
          backgroundColor: 'transparent',
          zIndex: 1500,
        },
      },
    },
  },
  dialogContainer: {
    padding: `${pxToRem(30)} ${pxToRem(22)} ${pxToRem(30)} ${pxToRem(30)}`,
    paddingTop: 0,
  },
  dialogHeader: {
    willChange: 'transform',
    top: pxToRem(-20),
    paddingLeft: '2px',
    color: '#1565c0',
    margin: 0,
    backgroundColor: 'transparent',
  },
  dialogTitle: {
    padding: 0,
    margin: 0,
    paddingTop: pxToRem(3),
    textAlign: 'left',
    fontSize: pxToRem(24),
    fontWeight: 800,
  },
};
