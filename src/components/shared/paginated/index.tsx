import { useCallback } from 'react';
import { Pagination, Stack } from '@mui/material';
import { IPaginatedProps } from '../../../types';

const Paginated = ({ page, onPageChange, count }: IPaginatedProps) => {
  const handleChange = useCallback(
    (_: unknown, value: number) => {
      onPageChange(value);
    },
    [onPageChange],
  );

  return (
    <Stack spacing={2}>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
};

export default Paginated;
