import React, { Component } from 'react';
import KeyComponent from './Component/KeyComponent';
import DisplayResults from './Component/DisplayResults'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      firstNumber: '',
      calculation: '1',
      operationHit: false,
    }
  }

  clear = () => {
    this.setState({ input: '' })
  }
  onChange = (e) => {
    console.log('hi')
    this.setState ({
      results: parseInt(e.target.value) 
    })
  }
  onClick = (e) => {
    const { input } = this.state
    this.state.operationHit === false ? this.setState({ input: [...this.state.input] + e.target.name}) : this.setState({input: '' });
    if (e.target.name === "+") {
      this.setState({ operationHit: true, firstNumber: parseInt(this.state.input), calculation: 'a' })
    } else if (e.target.name === "-") {
      this.setState({ operationHit: true, firstNumber: input })
    } else if (e.target.name === "x") {
      this.setState({ operationHit: true, firstNumber: input})
    } else if (e.target.name === "%") {
      this.setState({ operationHit: true, firstNumber: input })
    } else if(e.target.name === '=') {
      this.calculate()
    }
    // else if (this.state.operationHit === false) {
    //   this.setState({ 
    //     input: [...this.state.input] + e.target.name
    //     });
       
    // }
    console.log("input:" + this.state.input, "firstNumber:" + this.state.firstNumber, "cal:" + this.state.calculation, this.state.operationHit)

  }

  calculate = () => {


  }
  render() {
    console.log(this.state.firstNumber)
    return (
      <div className="App">
        <DisplayResults results={this.state.input} />
        <KeyComponent onClick={this.onClick} onChange={this.onChange} calculate={this.calculate} clear={this.clear} />
      </div>
    );
  }
}

export default App;
