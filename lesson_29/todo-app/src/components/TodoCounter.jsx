import { useSelector } from 'react-redux';

export function TodoCounter() {

    const counter = useSelector((state) => state.todos.todoCounter)

    return (
        <div className="todo-counter">
            <div>Total: {counter} </div>
        </div>
    )
}