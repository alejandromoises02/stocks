import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { IStockData, IStockChartProps } from '../../../types';

const transformData = (data: IStockData[]) => {
  return data.map((item) => [
    new Date(item.datetime).getTime(),
    parseFloat(item.close),
  ]);
};

const StockChart = ({ data, title }: IStockChartProps) => {
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
        data: transformData(data),
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
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StockChart;
