import React from 'react'
import Task from './Task'
// import tasks from '../Tasks.json'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
         {tasks.map((task) => {
             return (
                 <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
             )
         })}   
        </>
    )
}

export default Tasks
