import { Pagination, Stack } from '@mui/material';

interface IPaginatedProps {
  count: number;
  onPageChange: (page: number) => void;
  page: number;
}

const Paginated = ({ page, onPageChange, count }: IPaginatedProps) => {
  const handleChange = (_: unknown, value: number) => {
    onPageChange(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
};

export default Paginated;
