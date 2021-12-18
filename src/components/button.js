import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

const button = ({ ctatext, onAdd, colorbtn }) => {
    return (
        <div>
            <Box sx={{ my: 0 }}>
                <Button 
                    variant="contained" 
                    size="small" 
                    onClick={onAdd}
                    text="Add"
                    color={colorbtn}
                >
                    {ctatext}
                </Button>
            </Box>
        </div>
    )
}

export default button
