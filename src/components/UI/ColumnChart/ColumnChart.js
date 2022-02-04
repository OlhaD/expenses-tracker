import "./ColumnChart.scss";
import ColumnChartBar from "./ColumnChartBar/ColumnChartBar";

const ColumnChart = (props) => {
  return (
    <div className="chart">
      {props.data.map((columnData) => (
        <ColumnChartBar
          key={columnData.name}
          value={columnData.value}
          maxValue={columnData.maxValue}
          name={columnData.name}
          onClick={() => props.onClick(columnData.name)}
        />
      ))}
    </div>
  );
};

export default ColumnChart;
