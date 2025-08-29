import './todo.css';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos, selectStatus } from '../ducks/todos/todos.slice.js';
import { useEffect } from 'react';
import { FETCH_TODOS } from '../ducks/todos/todos.actions';

export function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    
    
    useEffect(() => {
        const controller = new AbortController();
        dispatch(FETCH_TODOS());
        return () => {
            controller.abort();
        }
    },[])

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
            <TodoCounter counter = {todos.length} />
        </div>
    )
}