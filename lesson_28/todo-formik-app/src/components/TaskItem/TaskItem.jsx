import { Button } from '../Button/Button';
import './taskItem.css';

export function TaskItem({task, toggleTask, removeTask} ) {
    
    return (
        <div className='wrapper'>
            <h3>{task.title}</h3>
             <div className='task-container'>
            <div className={task.completed ? 'item completed' : 'item'}>
                <input type="checkbox" onClick={()=>toggleTask(task.id)}/>
            {task.task}
            </div>
            <button className='delete-button' onClick={()=>removeTask(task.id)}>❌</button>
        </div>
        </div>
       
    )
}

