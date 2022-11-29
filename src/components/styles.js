import { pxToRem } from '../utils/pxToRem';

export const styles = {
    wrapper: {
        '& .MuiDialog-container': {
            maxWidth: pxToRem(1536),
            minWidth: '360px',
            margin: 'auto',

            '& .MuiDialog-paper': {
                maxWidth: pxToRem(1400),
                overflowY: 'scroll',
                width: `calc(100% - 64px)`,
                maxHeight: `calc(100% - 64px)`,
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
    //procedure header
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
    formWrapper: {
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between'
    },
    selectRequest: {
        width: 150,
        minWidth: '88px',
        marginRight: '6px',
        '& .MuiInputBase-root ': {
            height: 43,
            backgroundColor: '#f5f5f5',
        }
    },
    buttonSend: {
        width: 100,
        height: 43,
        marginLeft: '12px'
    },
    urlTextField: {
        width: '100%',
        '& .MuiInputBase-root ': {
            height: 43,
            backgroundColor: '#f5f5f5',
        },
        '& label.Mui-error':{
            top:'-5px'
        },
        '& .MuiInputBase-root.Mui-error>fieldset>legend':{
            // display:'none',
            "& span":{
                display:'none',
            }
        }
    },
    wrapperTabs: {
        marginTop: '3px'
    },
    wrapperTab: {
        paddingTop: '12px'
    },
    tab: {
        textTransform: ['none', '!important'],
        '&::active': {
            border: '1px solid #fff'
        }
    },
    keyValueBox: {
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center'
    },
    keyValueField: {
        marginRight: '8px',
        '& .MuiInputBase-root ': {
            height: '30.75px'
        }

    },
    responseStatusBox: {
        display: 'flex'
    },
    responseStatusItem: {
        marginRight: '24px'
    },
    responseData: {
        minHeight:'34px',
        maxHeight: '400px',
        overflow: 'auto',
        backgroundColor: '#f5f5f5',
        border: '1px solid rgba(0,0,0,0.23)',
        borderRadius: '3px',
        padding: '4px'
    },
    statusColorOk: {
        color: '#388e3c'
    },
    statusColorError: {
        color: '#d32f2f'
    }
};
