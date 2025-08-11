import { ThemeButton } from './themeButton/ThemeButton';
import { Navigation } from './Navigation';

export function Header() {
    return (
        <header >
            <div className="header">
                <h1>TODO APP</h1>
                <ThemeButton />
            </div>
            <Navigation />
        </header>
    )
}