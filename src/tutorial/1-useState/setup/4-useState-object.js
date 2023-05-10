import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Siomon Peter',
    age: 24, 
    message:'Random Message'})

    const changeMessage =() =>{
      setPerson({...person, message: 'hello world'})
    }
  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}>Change Message</button>
    </>
  )
};

export default UseStateObject;
