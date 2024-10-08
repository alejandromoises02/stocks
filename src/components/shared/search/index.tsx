import { useState, ChangeEvent, useCallback } from 'react';
import { TextField, Box } from '@mui/material';
import { ISearchProps } from '../../../types';

const Search = ({ title, onSearch, type }: ISearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSearchTerm(value);
      onSearch(value, type);
    },
    [onSearch, type],
  );

  return (
    <Box>
      <TextField
        label={title}
        placeholder={`Buscar por '${title}'`}
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        fullWidth
      />
    </Box>
  );
};

export default Search;
