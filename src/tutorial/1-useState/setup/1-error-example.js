import React from 'react';

const ErrorExample = () => {

  let title = 'Bound to Change'
  const handleClick = () =>{
    title = 'Hello There!!'
    console.log(title)
  }
  return (
    <>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleClick}>Magic</button>
    </>
  )
};

export default ErrorExample;
