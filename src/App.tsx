import Candlestick from "./components/Candlestick";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

const data = [
  { name: "Data 1", quarter: 1, earnings: 13000 },
  { name: "Data 2", quarter: 2, earnings: 16500 },
  { name: "Data 3", quarter: 3, earnings: 14250 },
  { name: "Data 4", quarter: 4, earnings: 19000 },
];

function App() {
  return (
    <div className="App">
      <h1>Victory graph representation</h1>
      <Candlestick />
      <BarChart data={data} />
      <LineChart data={data} />
    </div>
  );
}

export default App;
