import React from 'react';


const DisplayResults =({results}) =>{
    console.log(results)
const parseNumber = new Intl.NumberFormat().format(results)
return(
    <p className='display'>{parseNumber}</p>
)
};

export default DisplayResults
