import multiplesOf3Or5 from '.';

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