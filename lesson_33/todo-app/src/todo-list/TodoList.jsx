
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { useSelector } from 'react-redux';
import { Box, List, Typography } from '@mui/material'
import { selectTodos } from '../store/todoSlice';


export function TodoList() {
    const todos = useSelector(selectTodos)
    
    return (
           <>
        <Box  sx={{width:'80%', mx:'10%'}}>
            <Typography variant="h3" gutterBottom sx={{ mt: 5 }}>
            TODO
      </Typography>
            <TodoForm />
            <Typography variant="h4" sx={{ mt: 2 }}> All your todos</Typography>
            
            <List dense={true} data-testid='todo-list'>
            
            {todos.map((todo) => (
                <TodoItem todo={todo} key={ todo.id} />
            ))}
                
            </List>
            <TodoCounter counter ={todos.length} />
            </Box>
             </>
    )
}