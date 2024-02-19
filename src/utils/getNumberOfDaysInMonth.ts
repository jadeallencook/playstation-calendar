/**
 * Get the number of days in a month
 * @param date The date object
 * @returns The number of days in the month
 * @example
 * const date = new Date(2022, 1, 1);
 * const numberOfDays = getNumberOfDaysInMonth(date);
 */

const getNumberOfDaysInMonth = (date: Date): number => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month + 1, 0).getDate();
};

export default getNumberOfDaysInMonth;
