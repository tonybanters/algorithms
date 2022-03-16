/**
 * Returns the sum of multiples of 3 or 5 less than n
 * @param n 
 * @returns 
 */
const multiplesOf3Or5 = (n: number): number => {
  let result = 0
  for (let i = 1; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) result += i;
  }
  return result
}


export default multiplesOf3Or5;