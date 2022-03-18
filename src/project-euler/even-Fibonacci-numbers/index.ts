
function fib(n: number): number {
  if (n <= 2) {
    return 1
  }
  else {
    return fib(n-2) + fib(n-1)
  }
}

const evenFibSum = (n: number): number => {
  let sum = 0;
  let temp = 1;
  while (fib(temp) < n) {
    const tempFib = fib(temp)
    if (tempFib % 2 === 0) {
      sum += tempFib
    }
    temp += 1
  }
  return sum
}




export default evenFibSum;