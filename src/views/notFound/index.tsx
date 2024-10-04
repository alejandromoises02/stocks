import { Typography } from '@mui/material';

const NotFound = () => {
  return (
    <>
      <Typography variant="h1" component="h2">
        404 - Página No Encontrada
      </Typography>
      <Typography variant="body1">
        Lo sentimos, la página que buscas no existe.
      </Typography>
    </>
  );
};

export default NotFound;
