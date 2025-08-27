import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { ADD_TODOS } from '../ducks/todos/todos.actions';


export function TodoForm() {
    const refValue = useRef('')
    
    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault();        
        dispatch(ADD_TODOS({
            content: refValue.current.value
        }))
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