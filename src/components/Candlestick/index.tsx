import { VictoryCandlestick, VictoryChart } from "victory";
import { btcData } from "../../mockBtcData";

const positiveColor = "#16C784";
const negativeColor = "#ea3943";

const Candlestick = () => {
  const data = btcData.data.quotes.map((quote, index) => {
    const dataQuote = quote.quote;

    return {
      x: index,
      open: dataQuote.open,
      close: dataQuote.close,
      high: dataQuote.high,
      low: dataQuote.low,
    };
  });

  return (
    <VictoryChart domainPadding={20}>
      <VictoryCandlestick
        animate
        data={data}
        candleColors={{
          negative: negativeColor,
          positive: positiveColor,
        }}
      />
    </VictoryChart>
  );
};

export default Candlestick;
