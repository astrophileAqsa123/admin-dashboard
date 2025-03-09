import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto py-5 flex items-center justify-start gap-6 flex-nowrap w-full mt-10'>
       {data.tasks.map((element,idx)=>{
        if(element.active){
          return <AcceptTask key={idx} data={element}/>
        }
        if(element.newTask){
          return <NewTask key={idx} data={element}/>
        }
        if(element.completed){
          return <CompleteTask key={idx} data={element}/>
        }
        if(element.failed){
          return <FailedTask key={idx} data={element}/>
        }
       })}


       

      

     
    </div>
  )
}

export default TaskList