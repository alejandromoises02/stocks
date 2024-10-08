import { useState } from 'react';
import {
  ErrorMessage,
  LoadingSpinner,
  Paginated,
  Table,
  Search,
} from '../../components/shared';
import { useGetStocksQuery } from '../../store/service/StockService';
import { Container, Content, ContentSearch } from '../../styles';
import { MESSAGES, DEFAULT_OUTPUT_SIZE } from '../../utils/constants';
import { ISearchValues } from '../../types';

const { DEFAULT_ERROR_FETCH } = MESSAGES;

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValues, setSearchValues] = useState<ISearchValues>({
    name: '',
    symbol: '',
  });

  const {
    data: stocks,
    isLoading,
    isError,
  } = useGetStocksQuery({
    page: currentPage - 1,
    outputsize: DEFAULT_OUTPUT_SIZE,
    name: searchValues.name,
    symbol: searchValues.symbol,
  });

  const handleSearch = (value: string, type: string) => {
    setSearchValues((prev) => ({ ...prev, [type]: value }));
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError || stocks.status === 'error')
    return <ErrorMessage message={stocks.message || DEFAULT_ERROR_FETCH} />;

  return (
    <Container>
      <ContentSearch>
        <Search title="Nombre" onSearch={handleSearch} type="name" />
        <Search title="Simbolo" onSearch={handleSearch} type="symbol" />
      </ContentSearch>
      <Content>
        <Table data={stocks.data} />
      </Content>
      <Paginated
        page={currentPage}
        onPageChange={handlePageChange}
        count={Math.ceil(stocks.count / DEFAULT_OUTPUT_SIZE)}
      />
    </Container>
  );
};

export default Home;
