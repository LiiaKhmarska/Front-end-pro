import { NavLink } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="navigation-container">
            <ul>
                <li><NavLink to='/'>Головна</NavLink></li>
                <li><NavLink to='/about'>Про нас</NavLink></li>
                <li><NavLink to='/contacts'>Контакти</NavLink></li>
            </ul>
        </nav>
    )
}