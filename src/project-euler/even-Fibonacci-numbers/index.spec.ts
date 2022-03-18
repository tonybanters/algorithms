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
      arg: 1,
      expected: 0,
    },
    {
      arg: 3,
      expected: 2,
    },
    {
      arg: 9,
      expected: 10,
    },
  ];

  for (const testCase of testCases) {
    it(`When given ${testCase.arg} should return ${testCase.expected}`, () => {
      expect(evenFib(testCase.arg)).toBe(testCase.expected);
    });

  };
});

