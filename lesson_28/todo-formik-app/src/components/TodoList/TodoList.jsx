import './todoList.css';
import { CustomForm } from '../Form/Form';
import { useState } from 'react';
import { TaskItem } from '../TaskItem/TaskItem';

export function TodoList() {
   
    const [tasks, setTasks] = useState([]);

    function addTask(inputData) {
          
        if (inputData) {
            const newTask = {
                id: Date.now(),
                title:inputData.title,
                task: inputData.task,
                completed: false
            };
        setTasks([...tasks, newTask])
        }   
    }
    
    function removeTask(id) {       
        setTasks([...tasks.filter((task) => task.id!==id)])
    }

     function toggleTask(id) {
        setTasks([...tasks.map(task => task.id===id ?{...task, completed:!task.completed}:{...task})])
    }


    return (
        <div className="todo-container">
            <h1>To-Do List</h1>
            <CustomForm addTask={addTask} />
            {
                tasks.map((task) => (
                
                    <TaskItem task={task} key={ task.id }
                        toggleTask={toggleTask}
                        removeTask={removeTask}
                    />
                ))
           }

           
        </div>
    )
}