import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { primesResults: '', compositesResults: '' }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()

    // prime check routine
    const isPrime = num => {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
      return num >= 1;
    }

    // parse input numbers
    let input = e.target.area.value
    let parsedInput = input.split(' ')

    // strip non-numbers
    let parsedNumbers = []
    for (let pi of parsedInput) {
      if (!isNaN(pi) && pi > 0) {
        parsedNumbers.push(Number(pi))
      }
    }
    console.log('parsedNumbers: ', parsedNumbers)

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
      primesResults = 'Found primes:\n'
      for (let p of primes) {
        primesResults += `${p} `
      }
    } else {
      primesResults = "No primes found"
    }

    let compositesResults = ''
    if (missingComposites.length != 0) {
      compositesResults = 'Found missing composites:\n'
      for (let c of missingComposites) {
        compositesResults += `${c} `
      }
    } else {
      compositesResults = "All composites present"
    }

    document.getElementById('input').value = ''
    this.setState({ primesResults, compositesResults })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Are These Composite?</h1>
        </header>
        <form onSubmit={this.handleClick}>
          <input name="area" id='input'></input>
          <button type='submit'>Check</button>
        </form>
        <div className='results'>
          <p className='primes'>{ this.state.primesResults }</p>
          <p className='composites'>{ this.state.compositesResults }</p>
        </div>
        <footer>
          by <a href="https://github.com/jonoco">jonoco</a>
        </footer>

      </div>
    );
  }
}

export default App;
