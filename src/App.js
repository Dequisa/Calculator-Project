import React, { Component } from 'react';
import KeyComponent from './Component/KeyComponent';
import DisplayResults from './Component/DisplayResults'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      results: '0',
      firstNumber: '',
      calculation: '1',
      operationHit: false,
    }
  }

  clearResults = () => {
    this.setState({ results: '0', firstNumber: '' })
  }


  button = (e) => {
    if (this.state.results === '0') {
      this.setState({ results: e.target.name })
    } else if (this.state.operationHit === true) {
      this.setState({ operationHit: false, results: e.target.name })
    } else {
      this.setState({ results: this.state.results + e.target.name })


    }
  }

  positiveNegative = (e) => {
    const { results } = this.state;
    results === -results ? this.setState({ results: results }) : this.setState({ results: -results })

  }

  mathOperator = (e) => {
    if (e.target.name === '+') {
      this.setState({ operationHit: true, firstNumber: this.state.results })
      this.setState({ calculation: "a" })
    } else if (e.target.name === '-') {
      this.setState({ operationHit: true, firstNumber: this.state.results })
      this.setState({ calculation: "s" })
    } else if (e.target.name === '*') {
      this.setState({ operationHit: true, firstNumber: this.state.results })
      this.setState({ calculation: "m" })
    } else if (e.target.name === '/') {
      this.setState({ operationHit: true, firstNumber: this.state.results })
      this.setState({ calculation: "d" })
    }
  }

  calculate = () => {
    if (this.state.calculation === "a") {
      const total = Number(this.state.firstNumber) + Number(this.state.results)
      this.setState({ results: total, firstNumber: '', operationHit: true })
    } else if (this.state.calculation === "s") {
      const total = Number(this.state.firstNumber) - Number(this.state.results)
      this.setState({ results: total, firstNumber: '', operationHit: true })
    } else if (this.state.calculation === "m") {
      const total = Number(this.state.firstNumber) * Number(this.state.results)
      this.setState({ results: total, firstNumber: '', operationHit: true })
    } else if (this.state.calculation === "d") {
      const total = Number(this.state.firstNumber) / Number(this.state.results)
      this.setState({ results: Math.ceil(total), firstNumber: '', operationHit: true })
    }

  }
  render() {
    const { results } = this.state
    return (
      <div className="App">
        <DisplayResults results={results} />
        <KeyComponent onClick={this.button} mathOperator={this.mathOperator} calculate={this.calculate} clear={this.clearResults} posOrNeg={this.positiveNegative} />
      </div>
    );
  }
}

export default App;
