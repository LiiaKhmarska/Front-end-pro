import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectTodos } from '../store/todoSlice';


export function TodoCounter() {

    const todos = useSelector(selectTodos);
    const counter = todos.length;

    return (
        <Box sx={{textAlign: 'left'}}>
            <Typography sx={{mx:4, fontSize: 24, color: '#1a237e'}} data-testid='todo-counter'>Total: {counter} </Typography>
        </Box>
    )
}