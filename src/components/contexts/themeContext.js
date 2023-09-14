import { createContext, useState } from "react";

export const ThemeContext = createContext({});

const ThemeContextProvider = ({children, initialDarkTheme = false})=>{
    const [darkTheme, setDarkTheme] = useState(initialDarkTheme);

    const toggleTheme = () => setDarkTheme(!darkTheme);
    const value = {
        darkTheme,
        toggleTheme
    }

return(
    <ThemeContext.Provider value={value}>
        {children}
        </ThemeContext.Provider>
)
}

export default ThemeContextProvider;


