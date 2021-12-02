import React from 'react'
import Task from './Task'
// import tasks from '../Tasks.json'

const Tasks = ({ tasks }) => {
    return (
        <>
         {tasks.map((task) => {
             return (
                 <Task key={task.id} task={task} />
             )
         })}   
        </>
    )
}

export default Tasks
