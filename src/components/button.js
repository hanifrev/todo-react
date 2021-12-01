import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

const button = ({ctatext}) => {
    return (
        <div>
            <Box sx={{ my: 0 }}>
                <Button variant="contained" size="small" onClick={() => { console.log('onClick'); }}>{ctatext}</Button>
            </Box>
        </div>
    )
}

export default button
