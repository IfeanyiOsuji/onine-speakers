import { createContext} from "react";
import { useTheme } from "../hooks/useTheme";

export const ThemeContext = createContext({});

const ThemeContextProvider = ({children, initialDarkTheme = false})=>{
   
    const value = useTheme();

return(
    <ThemeContext.Provider value={value}>
        {children}
        </ThemeContext.Provider>
)
}

export default ThemeContextProvider;


