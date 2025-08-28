import { useDispatch } from 'react-redux';
import {addTodo, todoCount} from '../store/todoSlice'
import { useRef } from 'react';
import { Box, Button, TextField } from '@mui/material'

export function TodoForm() {
    const refValue = useRef('')
    
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();        
        dispatch(addTodo({
            content: refValue.current.value
        }))
        dispatch(todoCount('+1'));
        refValue.current.value =''
    }
    return (
        <>        
        <Box component='form'
            sx={{ '& .MuiTextField-root': { m: 1, width: '80%', alignContent:'center' } }}
             autoComplete="off" name="form" onSubmit={onSubmit}>
            <TextField
                id="outlined-basic"
                variant="outlined" 
                required 
                name="task"
                inputRef={refValue}
                placeholder="Add task"
                label="New task"

            />
            <Button variant="contained" type="submit" sx={{ my:2, height:45 }}>
                Add Task
            </Button>
            </Box>
            </>
    )
}