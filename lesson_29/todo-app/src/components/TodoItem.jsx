export function TodoItem({ todo }) {

    return (
        <div className="todo-container">
            {todo.content}
        </div>
    )
    
}