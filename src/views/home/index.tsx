import { Typography } from '@mui/material';
import { ErrorMessage, LoadingSpinner } from '../../components/shared';
import { useGetStocksQuery } from '../../store/service/StockService';

const Home = () => {
  const { data, isLoading, isError } = useGetStocksQuery({});
  console.log(data);

  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return (
      <>
        <ErrorMessage message="Error al obtener los datos" />
      </>
    );

  return (
    <Typography variant="h1" component="h2">
      Home
    </Typography>
  );
};

export default Home;
