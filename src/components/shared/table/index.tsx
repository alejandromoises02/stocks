import { Link } from 'react-router-dom';
import {
  Table as TableMui,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { IStockTableProps } from '../../../types';

const Table = ({ data }: IStockTableProps) => {
  return (
    <TableContainer component={Paper}>
      <TableMui>
        <TableHead>
          <TableRow>
            <TableCell>Símbolo</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Moneda</TableCell>
            <TableCell>Tipo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((stock, index) => (
            <TableRow key={index}>
              <TableCell>
                <Link to={`/action/${stock.symbol}/${stock.exchange}`}>
                  {stock.symbol}
                </Link>
              </TableCell>
              <TableCell>{stock.name}</TableCell>
              <TableCell>{stock.currency}</TableCell>
              <TableCell>{stock.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMui>
    </TableContainer>
  );
};

export default Table;
