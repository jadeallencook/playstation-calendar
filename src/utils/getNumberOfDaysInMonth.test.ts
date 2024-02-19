import getNumberOfDaysInMonth from "./getNumberOfDaysInMonth";

describe("getNumberOfDaysInMonth", () => {
  test("returns 31 days for January", () => {
    const date = new Date(2022, 0, 1);
    expect(getNumberOfDaysInMonth(date)).toBe(31);
  });

  test("returns 28 days for February in a non-leap year", () => {
    const date = new Date(2023, 1, 1);
    expect(getNumberOfDaysInMonth(date)).toBe(28);
  });

  test("returns 29 days for February in a leap year", () => {
    const date = new Date(2024, 1, 1);
    expect(getNumberOfDaysInMonth(date)).toBe(29);
  });

  test("returns 30 days for April", () => {
    const date = new Date(2022, 3, 1);
    expect(getNumberOfDaysInMonth(date)).toBe(30);
  });
});
