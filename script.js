// prime check routine
const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num >= 1;
}


const checkInput = (e) => {
  e.preventDefault();

  let input = document.getElementById('input').value
  let parsedInput = input.split(' ')

  console.log('parsedInput: ', parsedInput)

  // strip non-numbers
  let parsedNumbers = []
  for (let pi of parsedInput) {
    pi = Number(pi)
    if (!isNaN(pi) && pi > 0) {
      parsedNumbers.push(pi)
    }
  }
  console.log('parsedNumbers: ', parsedNumbers)

  //---
  // check for primes
  let primes = []
  for (let pn of parsedNumbers) {
    if (isPrime(pn)) primes.push(pn)
  }

  // check for missing composites
  let missingComposites = []
  for (let n = parsedNumbers[0] ; n <= parsedNumbers[parsedNumbers.length-1] ; n++) {
    if (!parsedNumbers.includes(n) && !isPrime(n) && n != 1)
      missingComposites.push(n)
  }

  // compose results
  let primesResults = ''
  if (primes.length != 0) {
    primesResults = '<span>Found primes: </span>'
    for (let p of primes) {
      primesResults += `${p} `
    }
  } else {
    primesResults = "No primes found"
  }

  let compositesResults = ''
  if (missingComposites.length != 0) {
    compositesResults = '<span>Found missing composites: </span>'
    for (let c of missingComposites) {
      compositesResults += `${c} `
    }
  } else {
    compositesResults = "All composites present"
  }

  let inputNumbers = '<span>Input checked:</span> ' + parsedNumbers.join(" ")

  document.getElementById('input').value = ''
  document.getElementById('primes').innerHTML = primesResults
  document.getElementById('composites').innerHTML = compositesResults
  document.getElementById('results').innerHTML = inputNumbers
}

window.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('submit', checkInput);
});
