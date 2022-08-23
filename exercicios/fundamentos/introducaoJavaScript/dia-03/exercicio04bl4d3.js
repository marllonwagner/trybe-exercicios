 let numbers = [];

 let numbersPrimo = [];


 for (let index = 2; index < 51 ; index += 1) {
    numbers.push(index) 
        let isprime = true;
     for (let index2 = 0; index2 < numbers.length; index2 += 1) {
        if (numbers[index] % numbers[index2] === 0) {
            isprime = false;
        }
     }
    if (isprime) {
        numbersPrimo.push(numbers[index])
    }
    
}
 console.log(numbers);
 console.log(numbersPrimo);


// let biggestPrimeNumber = 0;

// for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);