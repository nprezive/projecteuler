/**
 * Find the primes of a number
 *
 * @param {number} x The number to be factored
 * @returns {Array}
 */
function findPrimes(x) {
  const primes = [];
  const sqrt = Math.sqrt(x);

  for(let i=2; i<=sqrt; i++) {
    while(x % i === 0) {
      primes.push(i);
      x /= i;
    }
  }

  if(x > 2) {
    primes.push(x);
  }

  return primes;
}


const number = 600851475143;
console.log(`The largest prime factor of ${number} is ${Math.max(...findPrimes(number))}.`);
