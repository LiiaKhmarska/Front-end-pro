import { useDispatch } from 'react-redux';
import {addTodo, todoCount} from '../store/todoSlice'
import { useRef, useState } from 'react';
import { Box, Button, TextField, Tooltip } from '@mui/material'

export function TodoForm() {
    const refValue = useRef('')
    const [valid, setValid] = useState(true)
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        if (refValue.current.value.trim() ==='') {
            setValid(false);
            return;
        }
        setValid(true);
        dispatch(addTodo({
            content: refValue.current.value
        }))
        refValue.current.value =''
    }
    return (
        <>        
        <Box component='form' noValidate
            sx={{  display: 'flex',
        alignItems: 'baseline',
        width: '100%',
        gap: 1}}
                    data-testid='add-todo-form'
             autoComplete="off" name="form" onSubmit={onSubmit} >
            <TextField
                    id="outlined-basic"
                    variant="outlined"
                    required
                    name="task"
                    inputRef={refValue}
                    placeholder="Add task"
                    label="New task"
                    error={!valid}
                    helperText={!valid ? "Task can't be empty" : ''}  
                    style={{ flexGrow: 1 }}

                
                />
                <Tooltip title="Add task">

                    <Button variant="contained" type="submit" sx={{ my: 2, height: 45 }} onBlur={() => setValid(true)}
                        data-testid='btn-add'>
                Add Task
                    </Button>
                    </Tooltip>
            </Box>
            </>
    )
}