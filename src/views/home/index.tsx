import { useState } from 'react';
import { Typography } from '@mui/material';
import {
  ErrorMessage,
  LoadingSpinner,
  Paginated,
} from '../../components/shared';
import { useGetStocksQuery } from '../../store/service/StockService';
import { Content } from '../../styles';

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading, isError } = useGetStocksQuery({});
  console.log(data);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return (
      <>
        <ErrorMessage message="Error al obtener los datos" />
      </>
    );

  return (
    <>
      <Content>
        <Typography variant="h1" component="h2">
          Home
        </Typography>
      </Content>
      <Paginated
        page={currentPage}
        onPageChange={handlePageChange}
        count={10}
      />
    </>
  );
};

export default Home;
