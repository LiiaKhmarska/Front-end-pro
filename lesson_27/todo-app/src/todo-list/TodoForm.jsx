import { useState } from 'react';


export function TodoForm({ addTask }) {
    const [taskInput, setTaskInput] = useState('');

    function handleChange(event) {        
        setTaskInput(event.target.value);        
    }

    function handleSubmit(event) {
        event.preventDefault();
        addTask(taskInput);
        setTaskInput('');
    }

    return (
        
            <form  className="form js--form" name="form" onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add new task..."
                        onChange={handleChange}
                    value={taskInput}
                    required 
                    name="task"
                    />
                    <button  type='submit' className="btn btn-success">Add</button>
            </div>
            </form>
    
    )
}


