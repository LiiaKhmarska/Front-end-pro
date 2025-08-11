export function TodoItem({todo, toggleTask, removeTask}) {
    return (
        <div className="item-container">
            <div className={todo.completed ? 'item completed' : 'item'}>
                <input type="checkbox" onClick={()=>toggleTask(todo.id)}/>
            {todo.task}
            </div>
            <div onClick={()=>removeTask(todo.id)}><i className="bi bi-trash"></i></div>
        </div>
        
    )
}