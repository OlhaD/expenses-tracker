import classes from "./ColumnChartBar.module.scss";
import "./ColumnChartBar";

const ColumnChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className={classes.bar} onClick={() => props.onClick(props.value)}>
      <div className={classes.inner}>
        <div className={classes.fill} style={{ height: barFillHeight }}></div>
      </div>
      <div className={classes.label}>
        <label>{props.name}</label>
      </div>
    </div>
  );
};

export default ColumnChartBar;
