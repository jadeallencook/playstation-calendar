import getDateFromPathname from "./getDateFromPathname";

describe("getDateFromPathname", () => {
  test("Valid date from pathname: '/2022/1'", () => {
    expect(getDateFromPathname("/2022/1")).toEqual(new Date(2022, 0));
  });

  test("Valid date from pathname: '2023/12'", () => {
    expect(getDateFromPathname("2023/12")).toEqual(new Date(2023, 11));
  });

  test("Valid date from pathname with trailing slash: '/2024/6/'", () => {
    expect(getDateFromPathname("/2024/6/")).toEqual(new Date(2024, 5));
  });

  test("Invalid date format: '/1/2025' (month and year swapped)", () => {
    expect(getDateFromPathname("/1/2025")).toEqual(new Date());
  });

  test("Invalid date format: '/' (empty string)", () => {
    expect(getDateFromPathname("")).toEqual(new Date());
  });

  test("Invalid date format: '/2021/13' (invalid month)", () => {
    expect(getDateFromPathname("/2021/13")).toEqual(new Date());
  });

  test("Invalid date format: '/10000/1' (invalid year)", () => {
    expect(getDateFromPathname("/10000/1")).toEqual(new Date());
  });

  test("Invalid date format: '/0/0' (invalid year and month)", () => {
    expect(getDateFromPathname("/0/0")).toEqual(new Date());
  });

  test("Invalid date format: '/2022/2/2' (too many segments)", () => {
    expect(getDateFromPathname("/2022/2/2")).toEqual(new Date());
  });
});
