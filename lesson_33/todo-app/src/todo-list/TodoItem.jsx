import { Checkbox,IconButton, ListItem, ListItemText, Tooltip, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import {removeTodo,toggleTodo} from '../store/todoSlice'


export function TodoItem({ todo }) {
    const dispatch = useDispatch();

    function handleRemoveTodo(id) {
        dispatch(removeTodo(id));
    }

    function handleToggleTodo(id) {
        dispatch(toggleTodo(id))        
    }

    return (
        <>
            <ListItem sx={{ bgcolor: '#e3f2fd', borderRadius: 3, my: 1, px: 4, py: 2 }}>
                <Checkbox checked={todo.checked} onClick={()=>handleToggleTodo(todo.id)}/>
                <ListItemText >
                    <Typography sx={{
                        color: 'indigo', fontSize: 20,
                        textDecoration: todo.checked ? 'line-through' : 'none',
                    }}>
                        {todo.content}
                    </Typography>
                </ListItemText>
                <Tooltip title="Delete">
                    <IconButton edge='end' onClick={()=>{handleRemoveTodo(todo.id)}}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </ListItem>
            
        </>
    )
    
}