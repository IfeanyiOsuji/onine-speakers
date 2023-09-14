import { createContext, useState } from "react";
import Layout from "./components/layout/Layout";
import ThemeContextProvider from "./components/contexts/themeContext";
//export const ThemeContext = createContext();
const App = ({ url }) => {
  //const [darkTheme, setDarkTheme] = useState(false);

  //const toggleTheme = () => setDarkTheme(!darkTheme)
  
  // let value = {
  //   darkTheme,

  //   toggleTheme
  // }



  return (
    <ThemeContextProvider>
  <Layout url={url} />
  </ThemeContextProvider>
  )
};

export default App;
