import './App.css';
import { useState } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from './components/header';
import Button from './components/button';
import Tasks from './components/Tasks';
// import tasks from './Tasks.json'
import AddTask from './components/AddTask';

function App() {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([
    {
        "id": 1,
        "text": "Job Interview",
        "day": "Feb 5th at 14:30",
        "reminder": true
    },
    {
        "id": 2,
        "text": "Learn React Native",
        "day": "Jan 7th at 07:30",
        "reminder": true
    },
    {
        "id": 3,
        "text": "Food Shopping",
        "day": "Feb 5th at 08:30",
        "reminder": false
    }
])

const addTask = (task) => {
  // console.log(task)
  const id = Math.floor(Math.random() * 10000) +1
  // console.log(id)
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
 }

const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="App">
      <Grid xs={11} md={12} sx={{ mx: 'auto' }}>
        <Container maxWidth="sm" sx={{ my: 3, mx: 'auto', border: 1, borderRadius: '12px' }}>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 3 }}> 
            <Typography variant="h5" component="div" gutterBottom>
              <Header title='Task Runner' />
            </Typography>
            <Button 
              ctatext={showAdd ? "Close" : "Add"}  
              colorbtn={showAdd ? "error" : "primary"}
              onAdd={() => setShowAdd(!showAdd)} 
              // show={showAdd}
            />
          </Box>
          { showAdd && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? 
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
          : 'no task' }
        </Container>
      </Grid>
    </div>
  );
}

export default App;
