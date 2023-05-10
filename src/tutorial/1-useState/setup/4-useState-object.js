import React, { useState } from 'react';

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: 'Siomon Peter',
  //   age: 24, 
  //   message:'Random Message'})

    const [name,setName] = useState('Simon Peter')
    const [age,setAge] = useState(24)
    const [message,setMessage] = useState('Hello Simon')


    const changeMessage =() =>{
      // setPerson({...person, message: 'hello world'})
      
      if(message === 'Hello Simon'){
        setName('Judas')
        setAge(33)
        setMessage('Hello Judas')
      }else{
        setName('Simon Peter')
        setAge(24)
        setMessage('Hello Simon')
      }

    }
  return (
    <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={changeMessage}>Change Message</button>
    </>
  )
};

export default UseStateObject;
