import React, { Component } from 'react';
import KeyComponent from './Component/KeyComponent';
import DisplayResults from './Component/DisplayResults'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: '',
      firstNumber: '',
      secondNumber: '',
      calculation: '1',
      operationHit: false,
    }
  }

  clear = () => {
    this.setState({ display: '' })
  }
  onChange = (e) => {
    console.log('hi')
    this.setState ({
      results: parseInt(e.target.value) 
    })
  }

  onClick = (e) => {
    const { input } = this.state
  if (this.state.operationHit === false) {
  this.setState({ 
  display: [...this.state.display] + e.target.name
  });
       
   }else{
     this.setState({display:''})
     this.setState({display:[...this.state.display] + e.target.name })
   }
    console.log("display:" + this.state.display, "firstNumber:" + this.state.firstNumber, "cal:" + this.state.calculation, this.state.operationHit)

  }
 mathOperator =(e)=>{
   console.log('I work')
    // this.setState({operationHit:true, firstNumber: this.state.display, display:''})
    if(e.target.name === '+'){
      this.setState({operationHit:true, firstNumber: this.state.display, display:''})
      this.setState({calculation: "a"})
    }else if(e.target.name === '-'){
      this.setState({operationHit:true, firstNumber: this.state.display, display:''})
      this.setState({calculation: "s"})
    }else if(e.target.name === '*'){
      this.setState({operationHit:true, firstNumber: this.state.display, display:''})
      this.setState({calculation: "m"})
    }else if(e.target.name === '/'){
      this.setState({operationHit:true, firstNumber: this.state.display, display:''})
      this.setState({calculation: "d"})
    }
  }

  calculate = () => {
    console.log('I work too')
    this.setState({secondNumber: this.state.display})
    if(this.state.calculation === "a"){
      const total = parseInt(this.state.firstNumber) + parseInt(this.state.display)
      console.log(total)
      this.setState({display:total})
    } else if(this.state.calculation === "s"){
      const total = parseInt(this.state.firstNumber) - parseInt(this.state.display)
      console.log(total)
      this.setState({display:total})
    } else if(this.state.calculation === "m"){
      const total = parseInt(this.state.firstNumber) * parseInt(this.state.display)
      console.log(total)
      this.setState({display:total})
    }else if(this.state.calculation === "d"){
      const total = parseInt(this.state.firstNumber) / parseInt(this.state.display)
      console.log(total)
      this.setState({display:total})
    }


  }
  render() {
    console.log(typeof parseInt(this.state.firstNumber),typeof parseInt(this.state.secondNumber))
    return (
      <div className="App">
        <DisplayResults results={this.state.display} />
        <KeyComponent onClick={this.onClick} mathOperator={this.mathOperator} calculate={this.calculate} clear={this.clear} />
      </div>
    );
  }
}

export default App;
