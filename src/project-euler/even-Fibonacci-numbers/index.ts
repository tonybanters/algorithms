/**
 * This IIFE function initializes a memo for fib numbers, and sets fib equal to
 * fibonacci(n) which returns the nth fibonacci number using recursion, and memoization.
 */
const fib: Function = (() => {
  
  type Memo = {[key: number]: number}
  const memo: Memo = {
    1 : 1,
    2 : 1
  }
  /**
   * This function returns the nth fibonacci number.
   * @param n 
   * @returns 
   */
  const fibonacci = (n: number): number => {
    if (n in memo) return memo[n];
    if (n <= 1) return 1;
    
    return memo[n] = fibonacci(n-2) + fibonacci(n-1)
  }
  return fibonacci;
})();

/**
 * This function takes an integer n as input, and returns the sum of all even
 * fibonacci numbers that are less than n.
 * @param n 
 * @returns 
 */
const evenFibSum = (n: number): number => {
  let sum = 0;
  let temp = 1;
  let tempFib = 1;
  while (tempFib < n) {
    tempFib = fib(temp)
    if (tempFib % 2 === 0) {
      sum += tempFib
    }
    temp += 1
  }
  return sum
}

export default evenFibSum;