import "./style.css";

interface CurrentMonthHeaderProps {
  year: number;
  month: number;
  incrementMonth: () => void;
  decrementMonth: () => void;
}

const CurrentMonthHeader: React.FC<CurrentMonthHeaderProps> = ({
  month,
  year,
  incrementMonth,
  decrementMonth,
}) => {
  const monthName = new Date(`${month}/1/${year}`).toLocaleString("default", {
    month: "long",
  });
  return (
    <div className="CurrentMonthHeader">
      <a onClick={decrementMonth}>&#8249;</a>
      <h1>
        {monthName} {year}
      </h1>
      <a onClick={incrementMonth}>&#8250;</a>
    </div>
  );
};

export default CurrentMonthHeader;
