import { ICustomRadioGroupProps } from '../../../types';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

const CustomRadioGroup = ({
  name,
  value,
  handleChange,
  options,
}: ICustomRadioGroupProps) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioGroup;
