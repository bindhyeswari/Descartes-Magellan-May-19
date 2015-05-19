function calculatePrimes(number_of_primes) {
    // calculate n primes
    var primes = [];
    var curr = 2;
    while (primes.length < number_of_primes) {
        if (isPrime(curr)) {
            primes.push(curr);
        }
        curr++;
    }
    return primes;
}

function isPrime(num) {
    // check if a number is prime
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

self.addEventListener('message', function (e) {
   // self.postMessage('Hello from web worker!');

    self.postMessage(calculatePrimes(e.data));

});