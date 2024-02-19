const getDateFromPathname = (pathname: string): Date => {
  // remove slashes from beginning and end of string
  const cleanPathname = pathname.replace(/^\/+|\/+$/g, "");

  // convert pathname to array of numbers
  const array = cleanPathname.split("/");
  const [year, month] = array.map(Number);

  // check if year and month are valid
  return array.length !== 2 ||
    isNaN(year) ||
    isNaN(month) ||
    year < 1 ||
    year > 9999 ||
    month < 1 ||
    month > 12
    ? new Date(new Date().getFullYear(), new Date().getMonth())
    : new Date(year, month - 1);
};

export default getDateFromPathname;
