import React from 'react';



const KeyComponent = (props) => {
    const {mathOperator, onClick, calculate, clear }= props
  

    return(
        <div className="button">
        <button name='AC' onClick={clear} class="child one">AC</button>
        <button name= '1' value='1' onClick={onClick}>1</button>
        <button name= '2' value='2' onClick={onClick}>2</button>
        <button name= '3' value='3' onClick={onClick}>3</button>
        <button name= '4' onClick={onClick}>4</button>
        <button name= '5' onClick={onClick}>5</button>
        <button name= '6' onClick={onClick}>6</button>
        <button name= '7' onClick={onClick}>7</button>
        <button name= '8' onClick={onClick}>8</button>
        <button name= '9' onClick={onClick}>9</button>
        <button name= '0' onClick={onClick}>0</button>
        <button name= '.' >.</button>
        <button name= '+/-' onClick={onClick}>+/-</button>
        <button name= '/' onClick={mathOperator} className='operator1'>%</button>
        <button name= '*' onClick={mathOperator} className='operator2'>x</button>
        <button name= '-' onClick={mathOperator} className='operator3'>-</button>
        <button name= '+' onClick={mathOperator} className='operator4'>+</button>
        <button name= '=' onClick={calculate}    className='operator5'>=</button>
        </div>
    )

};

export default KeyComponent;