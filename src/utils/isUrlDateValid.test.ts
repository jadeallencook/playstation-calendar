import isUrlDateValid from "./isUrlDateValid";

describe("isUrlDateValid", () => {
  test("Valid URL date format: '/2019/1'", () => {
    expect(isUrlDateValid("/2019/1")).toBe(true);
  });

  test("Valid URL date format: '2019/1'", () => {
    expect(isUrlDateValid("2019/1")).toBe(true);
  });

  test("Valid URL date format with trailing slash: '2019/1/'", () => {
    expect(isUrlDateValid("2019/1/")).toBe(true);
  });

  test("Invalid URL date format: '/1/2019' (month and year swapped)", () => {
    expect(isUrlDateValid("/1/2019")).toBe(false);
  });

  test("Invalid URL date format: '/' (empty string)", () => {
    expect(isUrlDateValid("")).toBe(false);
  });

  test("Invalid URL date format: '' (no input)", () => {
    expect(isUrlDateValid("")).toBe(false);
  });

  test("Invalid URL date format: '/1/1/1/1/1/1' (too many segments)", () => {
    expect(isUrlDateValid("/1/1/1/1/1/1")).toBe(false);
  });

  test("Invalid URL date format: '/9999/13' (year and month out of range)", () => {
    expect(isUrlDateValid("/9999/13")).toBe(false);
  });

  test("Invalid URL date format: '/0/1' (year out of range)", () => {
    expect(isUrlDateValid("/0/1")).toBe(false);
  });

  test("Invalid URL date format: '/2024/0' (month out of range)", () => {
    expect(isUrlDateValid("/2024/0")).toBe(false);
  });
});
