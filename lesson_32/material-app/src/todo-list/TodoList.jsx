
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { useSelector } from 'react-redux';
import { Header } from '@components/Header'
import {List, Typography} from '@mui/material'


export function TodoList() {

    const todos = useSelector((state) => state.todos.todos)
    

    return (
           <>
           <Header />
          
        <div className="container">
            <Typography variant="h3" gutterBottom sx={{ mt: 5 }}>
            TODO
      </Typography>
            <TodoForm />
            <Typography variant="h4" sx={{ mt: 2 }}> All your todos</Typography>
            
            <List dense={true}>
            
            {todos.map((todo) => (
                <TodoItem todo={todo} key={ todo.id} />
            ))}
                
            </List>
            <TodoCounter counter ={todos.length} />
            </div>
             </>
    )
}