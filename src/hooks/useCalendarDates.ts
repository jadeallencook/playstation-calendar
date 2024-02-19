/**
 * This hook is used to manage the date state and the URL when the user changes the month.
 * @param pathname The current pathname.
 * @returns An object with the date, month, year, and a function to handle the month change.
 * @example
 * const { date, month, year, handleMonthChange } = useDate(pathname);
 */
import { useEffect, useState } from "react";
import getDateFromPathname from "../utils/getDateFromPathname";
import { CalendarCells } from "../types/CalendarCells";

interface UseCalendarDates {
  date: Date;
  month: number;
  year: number;
  handleMonthChange: (months: number) => void;
  cells: CalendarCells;
}

const useCalendarDates = (pathname: string): UseCalendarDates => {
  // Get the date from the pathname and set it as the initial state
  const dateFromPathname = getDateFromPathname(pathname);
  const [date, setDate] = useState(dateFromPathname);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const firstDay = date.getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const cells: CalendarCells = Array.from({ length: 6 }, () =>
    Array(7).fill(null)
  );

  for (let i = 0; i < daysInMonth; i++) {
    const row = Math.floor((firstDay + i) / 7);
    const column = (firstDay + i) % 7;
    const key = `${year}-${date.getMonth() + 1}-${i + 1}`;
    cells[row][column] = key;
  }

  // Add the date to the URL when the component mounts
  useEffect(() => {
    const path: string = `/${date.getFullYear()}/${date.getMonth() + 1}`;
    window.history.pushState({}, "", path);
  }, []);

  // Update the date state and the URL when the user changes the month
  const handleMonthChange = (months: number) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    const path: string = `/${newDate.getFullYear()}/${newDate.getMonth() + 1}`;
    setDate(newDate);
    window.history.pushState({}, "", path);
  };

  return { date, month, year, handleMonthChange, cells };
};

export default useCalendarDates;
