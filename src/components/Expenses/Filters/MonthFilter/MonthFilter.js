import ColumnChart from "../../../UI/ColumnChart/ColumnChart";

const MonthFilter = (props) => {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const clickHandler = (value) => {
    const monthId = months.indexOf(value);
    props.onMonthSelected(monthId);
  };

  let data = months.map((month, index) => {
    const expensesInMonth = props.expenses.filter(
      (exp) => exp.date.getMonth() === index
    );
    return {
      name: month,
      value: expensesInMonth.length,
      maxValue: props.expenses.length,
    };
  });

  return (
    <div>
      <ColumnChart data={data} onClick={clickHandler} />
    </div>
  );
};

export default MonthFilter;
