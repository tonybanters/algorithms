import evenFib from '.';

interface TestCase {
  arg: number,
  expected: number
}

describe("evenFib", () => {
  const testCases: TestCase[] = [
    {
      arg: 0,
      expected: 0,
    },
    {
      arg: 10,
      expected: 0,
    },
    {
      arg: 1000,
      expected: 0,
    },
    {
      arg: 1,
      expected: 0,
    },
  ];
  for (const testCase of testCases) {
    describe(`when given ${testCase.arg}`, () => {
      it(`should return 0`, () => {
        expect(evenFib(testCase.arg)).toBe(testCase.expected);
      });
    });
  };
});