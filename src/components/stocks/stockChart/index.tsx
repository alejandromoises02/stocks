import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { FormHelperText } from '@mui/material';
import { IStockData, IStockChartProps } from '../../../types';
import { LoadingSpinner } from '../../shared';
import { ContentForm } from '../../../styles';

const transformData = (data: IStockData[]) => {
  return data.map((item) => [
    new Date(item.datetime).getTime(),
    parseFloat(item.close),
  ]);
};

const StockChart = ({ timeSeries, title, isLoading }: IStockChartProps) => {
  const options = {
    title: {
      text: title || 'Cotización vs Intervalo',
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Intervalo',
      },
    },
    yAxis: {
      title: {
        text: 'Cotización',
      },
    },
    series: [
      {
        name: 'Cotización',
        data: transformData(timeSeries?.values || []),
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
    tooltip: {
      shared: true,
      crosshairs: true,
    },
  };

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {timeSeries && (
        <ContentForm>
          {timeSeries.values && (
            <HighchartsReact highcharts={Highcharts} options={options} />
          )}
          {timeSeries.status === 'error' && (
            <FormHelperText error>{timeSeries.message}</FormHelperText>
          )}
        </ContentForm>
      )}
    </div>
  );
};

export default StockChart;
