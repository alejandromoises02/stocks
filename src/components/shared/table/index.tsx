import {
  Table as TableMui,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

interface Stock {
  currency: string;
  name: string;
  symbol: string;
  type: string;
}

interface StockTableProps {
  data: Stock[];
}

const Table = ({ data }: StockTableProps) => {
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
              <TableCell>{stock.symbol}</TableCell>
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
