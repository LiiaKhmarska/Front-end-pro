import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export function TodoCounter() {

    const counter = useSelector((state) => state.todos.todoCounter)

    return (
        <Box sx={{textAlign: 'left'}}>
            <Typography sx={{mx:4, fontSize: 24, color: '#1a237e'}}>Total: {counter} </Typography>
        </Box>
    )
}