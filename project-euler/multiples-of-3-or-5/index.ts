export {};

const solutions: {[index: string]: number} = {}

/**
 * 
 * @param n 
 * @returns 
 */
const solution1 = (n: number): number => {
  let result = 0
  for (let i = 1; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) result += i;
  }
  return result
}

solutions['1'] = solution1(1);

console.log(solution1(0));

console.log(solutions);