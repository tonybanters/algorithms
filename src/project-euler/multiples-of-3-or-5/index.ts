/**
 * Returns the sum of multiples of 3 or 5 less than n
 * @param n 
 * @returns 
 */
export const multiplesOf3Or5 = (n: number): number => {
  let sum = 0
  for (let i = 1; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }
  return sum
}

/**
 * Returns the sum of multiples of given factors in given range of
 * [lowerBound, upperBound]
 * @param lowerBound 
 * @param upperBound 
 * @param factors 
 * @returns 
 */
export const sumOfMultiplesInRange = (lowerBound: number, upperBound: number, ...factors: number[]): number => {
  let sum = 0;
  for (let i = 0; i < upperBound - lowerBound + 1; i++) {
    if (factors.some((factor) => (i + lowerBound - 1) % factor === 0)){
      sum += i + lowerBound - 1
    }
  }
  return sum
}

