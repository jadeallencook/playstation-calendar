/**
 * @file This file is the entry point of the application.
 * It renders the Calendar component and passes the month and year to it.
 */

import { createRoot } from "react-dom/client";
import "./global.css";

// Components
import CurrentMonthHeader from "./components/CurrentMonthHeader";
import Weekdays from "./components/Weekdays";
import CalendarGrid from "./components/CalendarGrid";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import CalendarError from "./components/CalendarError";

// Hooks
import useCalendarDates from "./hooks/useCalendarDates";
import useCalendarEvents from "./hooks/useCalendarEvents";

// Get the current pathname
const { pathname } = window.location;

// Calendar component
const Calendar = () => {
  const { month, year, cells, handleMonthChange } = useCalendarDates(pathname);
  const { events, isLoading, error } = useCalendarEvents();
  return (
    <div>
      <CurrentMonthHeader
        month={month}
        year={year}
        incrementMonth={() => handleMonthChange(1)}
        decrementMonth={() => handleMonthChange(-1)}
      />
      <Weekdays />
      {isLoading ? (
        <Loading />
      ) : !error ? (
        <CalendarGrid cells={cells} events={events} />
      ) : (
        <CalendarError />
      )}
      <Footer />
    </div>
  );
};

// Get the root element
const element = document.getElementById("root");

// Check if the root element exists
if (!element) throw new Error("Root element not found");

// Create the root and render the Calendar component
const root = createRoot(element);
root.render(<Calendar />);
