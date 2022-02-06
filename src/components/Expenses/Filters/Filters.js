import classes from './Filters.module.scss';
import MonthFilter from "./MonthFilter/MonthFilter";

const Filters = (props) => {
  const yearSelectHandler = (event) => {
    const year = event.target.value;
    props.onYearSelected(year);
  };

  const monthSelectHandler = (value) => {
    props.onMonthSelected(value);
  }

  return (
    <div className={classes.filters}>
      <div className={classes.yearFilter}>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={yearSelectHandler}>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>
      <MonthFilter expenses={props.expenses} onMonthSelected={monthSelectHandler} />
    </div>
  );
};

export default Filters;
