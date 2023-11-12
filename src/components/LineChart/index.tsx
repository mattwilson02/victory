import { VictoryChart, VictoryLine } from "victory";

type Props = {
  data: any[];
};

const LineChart = ({ data }: Props) => {
  return (
    <VictoryChart domainPadding={20}>
      <VictoryLine animate data={data} x="quarter" y="earnings" />
    </VictoryChart>
  );
};

export default LineChart;
