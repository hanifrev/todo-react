import React, { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('please add a task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="formclass" onSubmit={onSubmit}>
            <div className="form-list">
                <label className="form-label">Task</label>
                <input type='text' placeholder='add task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-list">
                <label className="form-label">Day and Time</label>
                <input type='text' placeholder='add day time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-list">
                <label className="form-label">Set Reminder</label>
                <input className="" type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input 
                type='submit'  
                checked={reminder}
                value='save task' 
                className="form-btn" 
            />
        </form>
    )
}

export default AddTask
