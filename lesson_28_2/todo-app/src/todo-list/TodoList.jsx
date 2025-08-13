import { useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';

export function TodoList() {
    const [todos, setTodos] = useState([]);

    function addTask(taskInput) {        
        if (taskInput) {
            const newTask = {
                id: Date.now(),
                task: taskInput,
                completed: false
            };
        setTodos([...todos, newTask])
        }   
    }

    function removeTask(id) {
        setTodos([...todos.filter((todo) => todo.id!==id)])
    }

     function toggleTask(id) {
        setTodos([...todos.map(todo => todo.id===id ?{...todo, completed:!todo.completed}:{...todo})])
    }

    return (
        <div className="todo-container">
            <h1>To-Do List</h1>
            <TodoForm addTask={addTask}/>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id}
                    removeTask={removeTask}
                    toggleTask={toggleTask} />
            ))}
        </div>
    )
}