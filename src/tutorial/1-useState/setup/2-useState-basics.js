import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Anything Here')

  const handleClick = () =>{
    if(text === 'Anything Here'){
      setText('Hello World')
    }else{
      setText('Anything Here')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
