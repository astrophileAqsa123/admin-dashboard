import React from 'react'
import Header from '../others/Header.jsx'
import TaskNumber from '../others/TaskNumber.jsx'
import TaskList from '../TaskList/TaskList.jsx'
const EmployeeDashboard = (props) => {
  
  return (
    <div className=" h-screen w-full p-10">
    <Header data={props.data} changeUser={props.changeUser}/>
    <TaskNumber data={props.data}/>
    <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard