import React from 'react';



const KeyComponent = (props) => {
    const {onClick, calculate, clear }= this.props
  

    return(
        <div>
        <button name='AC' onClick={clear}>AC</button>
        <button name= '1' onClick={onclick}>1</button>
        <button name= '2' onClick={onclick}>2</button>
        <button name= '3' onClick={onclick}>3</button>
        <button name= '4' onClick={onclick}>4</button>
        <button name= '5' onClick={onclick}>5</button>
        <button name= '6' onClick={onclick}>6</button>
        <button name= '7' onClick={onclick}>7</button>
        <button name= '8' onClick={onclick}>8</button>
        <button name= '9' onClick={onclick}>9</button>
        <button name= '0' onClick={onclick}>0</button>
        <button name= '%' onClick>%</button>
        <button name= 'X' onClick>X</button>
        <button name= '-' onClick>-</button>
        <button name= '+' onClick>+</button>
        <button name= '=' onClick={calculate}>=</button>
        <button name= '.' onClick>.</button>
        </div>
    )

};

export default KeyComponent;