exports.largestPrimeFactor = function (n) {
  var primeNumber = 0;
  // do your work here
  let primeFactors = [];

  while (n % 2 === 0) {
    primeFactors.push(2);
    n = n / 2;
  }

  let squareRootNum = Math.sqrt(n);
  for (let i = 3; i <= squareRootNum; i++) {
    while (n % i === 0) {
      primeFactors.push(i);
      n = n / i;
    }
  }

  if (n > 2) {
    primeFactors.push(n)
  };
  primeNumber = Math.max(...primeFactors);
  return primeNumber;
};