import { LineChart } from '@mui/x-charts/LineChart';
import {
  electricityUsage,
  keyToLabel,
  colors,
} from '../data/electricityUsage';

const stackStrategy = {
  stack: 'total',
  area: true,
  stackOffset: 'none',
} as const;

const customize = {
  height: 300,
  legend: { hidden: true },
  margin: { top: 5 },
  stackingOrder: 'descending',
};

const Graph = () => {
  return (
    <div>
      <LineChart
       xAxis={[
        {
          dataKey: 'time',
          valueFormatter: (value) => value.toString(),
          min: 1,
          max: 24
        },
      ]}
        series={Object.keys(keyToLabel).map((key) => ({
            dataKey: key,
            label: keyToLabel[key],
            color: colors[key],
            showMark: false,
            ...stackStrategy,
        }))}
        dataset={electricityUsage}
        {...customize}
        />
    </div>
  )
}

export default Graph
