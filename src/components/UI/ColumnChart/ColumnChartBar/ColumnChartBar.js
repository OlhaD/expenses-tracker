import "./ColumnChartBar.scss";
import "./ColumnChartBar";

const ColumnChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="bar" onClick={() => props.onClick(props.value)}>
      <div className="inner">
        <div className="fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="label">
        <label>{props.name}</label>
      </div>
    </div>
  );
};

export default ColumnChartBar;
