import { useDispatch } from 'react-redux';
import {addTodo, todoCount} from '../ducks/todoSlice'
import { useRef } from 'react';

export function TodoForm() {
    const refValue = useRef('')
    
    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo({
            content: refValue.current.value
        }))
        dispatch(todoCount());
        refValue.current.value =''
    }
    return (
        
            <form  className="todo-form" name="form" onSubmit={onSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className=""
                        placeholder="Add new task..."
                        required 
                        name="task"
                        ref = {refValue}
                        />
                    <button  type='submit' className="btn btn-success">Add</button>
            </div>
            </form>
    )
}