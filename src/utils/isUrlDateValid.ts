/**
 * Check if the date in the URL is valid
 * @param {string} pathname - The URL pathname
 * @returns {boolean} - Whether the date is valid
 * @example
 * isUrlDateValid("/2019/1"); // true
 * isUrlDateValid("2019/1"); // true
 * isUrlDateValid("2019/1/"); // true
 * isUrlDateValid("/1/2019"); // false
 */

const isUrlDateValid = (pathname: string): boolean => {
  // convert string to array of numbers
  const array = pathname
    .replace(/^\/+|\/+$/g, "")
    .split("/")
    .map(Number);

  // check if array length is 2 and year and month are within valid ranges
  return (
    array.length === 2 &&
    array.every((num) => !isNaN(num) && num > 0) &&
    array[0] <= 9999 &&
    array[0] >= 1900 &&
    array[1] <= 12 &&
    array[1] >= 1
  );
};

export default isUrlDateValid;
