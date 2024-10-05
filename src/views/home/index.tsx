import { useState } from 'react';
import {
  ErrorMessage,
  LoadingSpinner,
  Paginated,
  Table,
} from '../../components/shared';
import { useGetStocksQuery } from '../../store/service/StockService';
import { Content } from '../../styles';
import { MESSAGES, defaultOutputSize } from '../../utils/constants';

const { DEFAULT_ERROR_FETCH } = MESSAGES;

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const {
    data: stock,
    isLoading,
    isError,
  } = useGetStocksQuery({
    page: currentPage - 1,
    outputsize: defaultOutputSize,
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError || stock.status === 'error')
    return (
      <>
        <ErrorMessage message={stock.message || DEFAULT_ERROR_FETCH} />
      </>
    );

  return (
    <>
      <Content>
        <Table data={stock.data} />
      </Content>
      <Paginated
        page={currentPage}
        onPageChange={handlePageChange}
        count={Math.ceil(stock.count / defaultOutputSize)}
      />
    </>
  );
};

export default Home;
