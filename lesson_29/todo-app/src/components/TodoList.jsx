import './todo.css';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { useSelector } from 'react-redux';

export function TodoList() {

    const todos = useSelector((state) => state.todos.todos)
    

       return (
        <div className="container">
            <h1>TODO</h1>
            <TodoForm />
            <h2>TODOS</h2>
            <hr />
            <div className='todos-list-container'>
            
            {todos.map((todo) => (
                <TodoItem todo={todo} key={ todo.id} />
            ))}
                
            </div>
            <TodoCounter counter ={todos.length} />
        </div>
    )
}