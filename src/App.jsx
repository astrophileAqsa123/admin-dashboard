import React,{useContext} from 'react'
import { useEffect,useState } from 'react'
import LogIn from './components/Auth/LogIn'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import {setLocalStorage,getLocalStorage} from './utils/LocalStorage'
import {AuthContext} from './context/AuthProvider'
const App = () => {

   const [user,setUser]= useState(null);
   const [loggedInUserData,setLoggedInUserData]=useState(null);
   const [userData,setUserData]=useContext(AuthContext);
   //localStorage.clear()
   useEffect(() => {
     
      const loggedInUser=localStorage.getItem("loggedInUser");
      if(loggedInUser){
        const userData=JSON.parse(loggedInUser);
        setUser(userData.role);
        setLoggedInUserData(userData.data)
      }
     
   },[]);
   



   const handleLogin=(email,password)=>{
        if(email=='admin@example.com' && password=='123'){
          setUser('admin');
          localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
        }
        else if(userData ){
          const employee=userData.find((e)=>e.email==email && e.password==password)
          if(employee){
            setUser('employee');
            setLoggedInUserData(employee);
            localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
          }
          
          
        }
        else{
          alert("Invalid credentials");
        }
   }
   
   
  return (
    <>
    {!user?<LogIn handleLogin={handleLogin}/>:''} 
    {/* no user then login page open */}
    {user=='admin'?<AdminDashboard changeUser={setUser}/>:(user=='employee'?<EmployeeDashboard  changeUser={setUser} data={loggedInUserData}/>:null)}
     
    {/* <EmployeeDashboard/> */}
     {/* <AdminDashboard/>  */}
    </>
  )
}

export default App
