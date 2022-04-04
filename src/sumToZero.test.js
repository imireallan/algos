const sumToZero = require("./sumToZero");

describe("SumToZero", () => {
  test("it should return an array of the first values that sum to zero", () => {
    let value = sumToZero([-3, -2, 1, 2, 3]);
    expect(value).toEqual([-3, 3]);
  });
});
