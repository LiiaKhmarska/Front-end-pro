import { useDispatch } from 'react-redux';
import { DELETE_TODOS, FETCH_TODOS, PUT_TODOS } from '../ducks/todos/todos.actions';

export function TodoItem({ todo }) {
        const dispatch = useDispatch();

    function handlerRemoveTodo(id) {
        dispatch(DELETE_TODOS(id));
        // dispatch(FETCH_TODOS())
    }

    function handlerToggleStatus(todo) {

        todo = {...todo, completed: !todo.completed}
        dispatch(PUT_TODOS(todo));
    }

    return (
        <div className="todo-container">
            <input type='checkbox' checked={ todo.completed} onChange={()=>handlerToggleStatus(todo)}/>
            <div>{todo.content}</div>
            <button className="delete-btn" onClick={()=>handlerRemoveTodo(todo.id)}>❌</button>
        </div>
    )
    
}