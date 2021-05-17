import React, { Component } from 'react';
import KeyComponent from './Component/KeyComponent';
import DisplayResults from './Component/DisplayResults'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      results: 'I am the result',
      number: ''
    }
  }

  clear=() =>{
    this.setState({results: ''})
  }
   onClick=(e)=>{
this.setState({results: e.target.name})

  }
  calculate = () =>{

  }
  render() {
    console.log(this.onClick)
    return (
      <div className="App">
        <DisplayResults results={this.state.results}/>
        <KeyComponent onClick={this.onClick} calculate={this.calculate} clear={this.clear}/>
      </div>
    );
  }
}

export default App;
