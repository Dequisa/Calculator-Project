import React, { Component } from 'react';
import KeyComponent from './Component/KeyComponent';
import DisplayResults from './Component/DisplayResults'
import './App.css';


function formatNumber (num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
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
    this.setState({ results: '0',firstNumber:'' })
  }


  button = (e) => {
  if (this.state.results=== '0') {
    this.setState({results:e.target.name})   
   } else if(this.state.operationHit === true){
     this.setState({operationHit: false, results: e.target.name})
   }else{
    const state = Number(e.target.name.replace(/\D/g, ''))
    const nf = new Intl.NumberFormat()
    const sum = nf.format(this.state.results + e.target.name)
    // console.log(typeof nf.format(this.state.results + e.target.name))
     this.setState({results: this.state.results + e.target.name})
     
     
   }
  }

  negative=(e)=>{
    
  }

 mathOperator =(e)=>{
    if(e.target.name === '+'){
      this.setState({operationHit:true, firstNumber: this.state.results})
      this.setState({calculation: "a"})
    }else if(e.target.name === '-'){
      this.setState({operationHit:true, firstNumber: this.state.results})
      this.setState({calculation: "s"})
    }else if(e.target.name === '*'){
      this.setState({operationHit:true, firstNumber: this.state.results})
      this.setState({calculation: "m"})
    }else if(e.target.name === '/'){
      this.setState({operationHit:true, firstNumber: this.state.results})
      this.setState({calculation: "d"})
    }
  }

  calculate = () => {
    if(this.state.calculation === "a"){
      const total = Number(this.state.firstNumber) + Number(this.state.results)
      this.setState({results:total, firstNumber:'', operationHit:true})
    } else if(this.state.calculation === "s"){
      const total = Number(this.state.firstNumber) - Number(this.state.results)
      this.setState({results:total, firstNumber:'', operationHit:true})
    } else if(this.state.calculation === "m"){
      const total = Number(this.state.firstNumber) * Number(this.state.results)
      this.setState({results:total, firstNumber:'', operationHit:true})
    }else if(this.state.calculation === "d"){
      const total = Number(this.state.firstNumber) / Number(this.state.results)
      this.setState({results:total, firstNumber:'', operationHit:true})
    }

  }
  render() {
    const { results}=this.state
    console.log(-results)
    return (
      <div className="App">
        <DisplayResults results={results} />
        <KeyComponent onClick={this.button} mathOperator={this.mathOperator} calculate={this.calculate} clear={this.clearResults} />
      </div>
    );
  }
}

export default App;
