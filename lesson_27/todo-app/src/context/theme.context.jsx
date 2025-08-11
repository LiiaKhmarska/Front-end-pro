import { createContext, useState } from "react";

export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';
const initialThemeState = {
    theme: THEME_LIGHT,
    setTheme : () => {}
}

export const themeContext = createContext(initialThemeState);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(THEME_LIGHT)
    return (
        <themeContext.Provider value={{theme, setTheme}}>
            {children}
        </themeContext.Provider>
    )
}

export const ThemeConsumer = themeContext.Consumer;