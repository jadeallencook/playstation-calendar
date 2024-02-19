import "./style.css";

const CalendarError = () => {
  return (
    <p className="CalendarError">
      <b>There was an error fetching the calendar.</b>
      <br />
      <br />
      Please try refreshing the page.
    </p>
  );
};

export default CalendarError;
