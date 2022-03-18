import { multiplesOf3Or5, sumOfMultiplesInRange } from '.';

interface TestCase {
  arg: number,
  expected: number
}

describe("multiplesOf3Or5", () => {
  const testCases: TestCase[] = [
    {
      arg: 0,
      expected: 0,
    },
    {
      arg: 10,
      expected: 23,
    },
    {
      arg: 1000,
      expected: 233168,
    },
    {
      arg: 1,
      expected: 0,
    },
  ];
  for (const testCase of testCases) {
    describe(`when given ${testCase.arg}`, () => {
      it(`should return the sum of the multiples of 3 or 5 less than n`, () => {
        expect(multiplesOf3Or5(testCase.arg)).toBe(testCase.expected);
      });
    });
  };
});

describe("sumOfMultiplesInRange", () => {
  const testCases = [
    {
      args: [1, 10, 3, 5],
      expected: 23,
    },
    {
      args: [1, 1000, 3, 5],
      expected: 233168,
    },
    {
      args: [0, 0, 10, 20, 30],
      expected: 0,
    },
    {
      args: [1, 20, 2, 3, 7],
      expected: 124,
    },
    {
      args: [1, 1, 1],
      expected: 0,
    },
    {
      args: [30, 30, 2, 7, 13],
      expected: 0,
    },
  ];
  testCases.forEach(({ args: [lowerBound, upperBound, ...factors], expected }) => {
    describe(`when given (${lowerBound}, ${upperBound}, ${factors.join(", ")})`, () => {
      it(`should return the sum of the integers in the range that are multiples of at least one of the given factors`, () => {
        expect(sumOfMultiplesInRange(lowerBound, upperBound, ...factors)).toBe(expected);
      });
    });
  });
});