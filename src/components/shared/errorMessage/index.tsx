import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { ErrorOutline as ErrorOutlineIcon } from '@mui/icons-material';

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <ErrorOutlineIcon color="error" sx={{ fontSize: 60 }} />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
