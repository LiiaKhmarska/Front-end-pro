import { IconButton, ListItem, ListItemText, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import {removeTodo, todoCount} from '../store/todoSlice'


export function TodoItem({ todo }) {
    const dispatch = useDispatch();

    function handleRemoveTodo(id) {
        dispatch(removeTodo(id));
         dispatch(todoCount('-1'));
    }

    return (
        <>
            <ListItem sx={{bgcolor:'#e3f2fd', borderRadius: 3, my:1, px:4, py:2}}>
                <ListItemText >
                    <Typography sx={{ color: 'indigo',  fontSize: 18 }}>
                        {todo.content}
                    </Typography>
                </ListItemText>
                <IconButton edge='end' onClick={()=>{handleRemoveTodo(todo.id)}}>
                    <DeleteIcon />
                </IconButton>
            </ListItem>
            
        </>
    )
    
}