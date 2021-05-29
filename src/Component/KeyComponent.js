import React from 'react';



const KeyComponent = (props) => {
    const {mathOperator, onClick: button, calculate, clear: clearResults, negative }= props
  

    return(
        <div className="button">
        <button name='AC' onClick={clearResults} class="child one">AC</button>
        <button name= '1' value='1' onClick={button}>1</button>
        <button name= '2' value='2' onClick={button}>2</button>
        <button name= '3' value='3' onClick={button}>3</button>
        <button name= '4' onClick={button}>4</button>
        <button name= '5' onClick={button}>5</button>
        <button name= '6' onClick={button}>6</button>
        <button name= '7' onClick={button}>7</button>
        <button name= '8' onClick={button}>8</button>
        <button name= '9' onClick={button}>9</button>
        <button name= '0' onClick={button}>0</button>
        <button name= '.' onClick={button}>.</button>
        <button name= '+/-' onClick={negative}>+/-</button>
        <button name= '/' onClick={mathOperator} className='operator1'>%</button>
        <button name= '*' onClick={mathOperator} className='operator2'>x</button>
        <button name= '-' onClick={mathOperator} className='operator3'>-</button>
        <button name= '+' onClick={mathOperator} className='operator4'>+</button>
        <button name= '=' onClick={calculate}    className='operator5'>=</button>
        </div>
    )

};

export default KeyComponent;