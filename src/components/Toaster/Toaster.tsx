import { Toaster as LibToaster, } from 'react-hot-toast';

const Toaster = () => {
  return (
    <LibToaster
      toastOptions={{
        success: {
          duration: 3000,
          icon: '✅',
          iconTheme: {
            primary: '#000',
            secondary: '#fff',
          },

          // Aria
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },
        },
        error: {
          duration: 3000,
          icon: '❌',
          iconTheme: {
            primary: '#000',
            secondary: '#fff',
          },
          ariaProps: {
            role: 'status',
            'aria-live': 'polite',
          },
        },
        className: '',
        style: {
          fontSize: '1.1rem',
          width: 'auto',
          boxShadow: ' 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
          padding: '16px',
          display: 'flex',
          maxWidth: 'none',
          alignItems: 'flex-end',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: '8px',
          borderWidth: '1px',
          backgroundColor: '#fff',
          fontFamily: 'Roboto, sans-serif',
        },
      }}
    />
  );
};

export default Toaster;
