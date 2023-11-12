import {
  VictoryBar,
  VictoryCandlestick,
  VictoryChart,
  VictoryLine,
} from "victory";

const data = [
  { name: "Data 1", quarter: 1, earnings: 13000 },
  { name: "Data 2", quarter: 2, earnings: 16500 },
  { name: "Data 3", quarter: 3, earnings: 14250 },
  { name: "Data 4", quarter: 4, earnings: 19000 },
];

const candlestickData = [
  { x: 1, open: 9, close: 30, high: 56, low: 7 },
  { x: 2, open: 80, close: 40, high: 120, low: 10 },
  { x: 3, open: 50, close: 80, high: 90, low: 20 },
];

function App() {
  const dataLabels = data.map((d) => d.name);

  return (
    <div className="App">
      <h3>Victory graph representation</h3>
      <VictoryChart domainPadding={20}>
        <VictoryBar
          animate
          labels={dataLabels}
          barWidth={15}
          data={data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
      <VictoryChart domainPadding={20}>
        <VictoryLine
          animate
          labels={dataLabels}
          data={data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
      <VictoryChart domainPadding={20}>
        <VictoryCandlestick
          animate
          data={candlestickData}
          candleColors={{
            negative: "#ea3943",
            positive: "#16C784",
          }}
        />
      </VictoryChart>
    </div>
  );
}

export default App;
