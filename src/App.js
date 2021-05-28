import React, { Component } from 'react';
import KeyComponent from './Component/KeyComponent';
import DisplayResults from './Component/DisplayResults'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: '',
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


  onClick = (e) => {
  if (this.state.operationHit === false) {
    const concatString = this.state.display;
    const newDisplay =concatString.concat(e.target.name);
    this.setState({display:newDisplay})
    
    
       
   }else{
     this.setState({display:''})
     const concatString = this.state.display;
     const newDisplay =concatString.concat(e.target.name);
     this.setState({display:newDisplay})
   }
  }

 mathOperator =(e)=>{
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
    this.setState({secondNumber: this.state.display})
    if(this.state.calculation === "a"){
      const total = parseInt(this.state.firstNumber) + parseInt(this.state.display)
      this.setState({display:total})
      this.setState({results:this.state.display})
    } else if(this.state.calculation === "s"){
      const total = parseInt(this.state.firstNumber) - parseInt(this.state.display)
      this.setState({display:total})
      this.setState({results:this.state.display})
    } else if(this.state.calculation === "m"){
      const total = parseInt(this.state.firstNumber) * parseInt(this.state.display)
      this.setState({display:total})
      this.setState({results:this.state.display})
    }else if(this.state.calculation === "d"){
      const total = parseInt(this.state.firstNumber) / parseInt(this.state.display)
      this.setState({display:total})
      this.setState({results:this.state.display})
    }

  }
  render() {
    return (
      <div className="App">
        <DisplayResults results={this.state.results} />
        <KeyComponent onClick={this.onClick} mathOperator={this.mathOperator} calculate={this.calculate} clear={this.clear} />
      </div>
    );
  }
}

export default App;
