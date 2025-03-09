import React, { useState,useEffect } from 'react'

const Header = (props) => {
  const [userName,setUserName] = useState('');
  useEffect(() => {
    if (!props.data) {
      setUserName('Admin');
    } else {
      setUserName(props.data.firstName);
    }
  }, [props.data]);

  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('');
  }
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{userName}</span></h1>
        <button onClick={logOutUser} className='bg-red-500 text-white text-lg font-medium px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header

