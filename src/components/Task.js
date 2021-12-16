import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {FaTimes} from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <Grid xs={11} sx={{ mx: 'auto' }}>
                <Card variant="outlined" sx={{ mb: '1rem', bgcolor: 'secondary.card' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', my: '0.5rem' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', ml: '1rem' }}>
                            <Typography variant="h6" component="div" gutterBottom>
                                {task.text} 
                            </Typography>
                            <Typography variant="subtitle1" component="p" gutterBottom>
                                {task.day}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: '1rem' }}>
                            <FaTimes style={{ color: 'red' }} onClick={() => onDelete(task.id)} />
                        </Box>
                    </Box>
                </Card>
            </Grid>
        </div>
    )
}

export default Task
