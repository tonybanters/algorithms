
const fib: Function = (() => {
  
  type Memo = {[key: number]: number}
  const memo: Memo = {
    1 : 1,
    2 : 1
  }

  const fibonacci = (n: number): number => {
    if (n in memo) return memo[n];

    if (n <= 1) {
      return 1
    }
    else {
      return memo[n] = fibonacci(n-2) + fibonacci(n-1)
    }
  }
  return fibonacci;
})();

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