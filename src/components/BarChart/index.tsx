import { VictoryBar, VictoryChart } from "victory";

type Props = { data: any[] };

const BarChart = ({ data }: Props) => {
  return (
    <VictoryChart domainPadding={20}>
      <VictoryBar animate barWidth={15} data={data} x="quarter" y="earnings" />
    </VictoryChart>
  );
};

export default BarChart;
