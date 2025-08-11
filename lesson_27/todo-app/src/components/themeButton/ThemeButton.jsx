import { useContext } from 'react';
import './themeButton.css';
import { THEME_DARK, THEME_LIGHT, themeContext } from '../../context/theme.context';

export function ThemeButton() {
    const { theme, setTheme } = useContext(themeContext);

    const content = theme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    function clickHandler() {
        setTheme((prev) => prev === THEME_LIGHT ? THEME_DARK : THEME_LIGHT)
    }

    return (
        <>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={clickHandler}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id="light-dark-switch"> </label>
            </div>
              {content}
        </>
    )
}