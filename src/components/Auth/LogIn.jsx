import React from 'react'
import { useState } from 'react';
function LogIn({handleLogin}) {
  
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const submitHandler=(e)=>{
    e.preventDefault();
      handleLogin(email,password);

      setemail("");
      setpassword("");
  }
  return (
   
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className="border-2 rounded-xl border-emerald-600 p-20">
          <form onSubmit={(e)=>{
            submitHandler(e);
          }} className='flex flex-col  item-center justify-center'>
            <input value={email} onChange={(e)=>{
              setemail(e.target.value);
            }} required className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type='email' placeholder='Enter your email'/>
            <input value={password} onChange={(e)=>{
              setpassword(e.target.value);
            }} required className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type='password' placeholder='Enter your password'/>
            <button className='mt-5 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-3 px-5 w-full rounded-full '>
            LogIn
          </button>
          </form>
        </div>
    </div>
  )
}

export default LogIn