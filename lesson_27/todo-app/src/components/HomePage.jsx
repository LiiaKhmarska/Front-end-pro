import { Header } from './Header';
import { TodoList } from '../todo-list/TodoList'


export function HomePage() {
    return (
        <>
            <Header />
            <TodoList />
        </>
    )
}