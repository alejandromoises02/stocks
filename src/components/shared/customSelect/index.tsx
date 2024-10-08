import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { ICustomSelectProps } from '../../../types';

const CustomSelect = ({
  labelId,
  id,
  value,
  label,
  handleChange,
  options,
}: ICustomSelectProps) => {
  return (
    <FormControl>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
