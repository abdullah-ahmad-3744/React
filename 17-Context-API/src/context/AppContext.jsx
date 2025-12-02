import { createContext, useState } from "react";
export const AppContext = createContext();



function AppContextProvider  ({ children }) {
  const[theme, setTheme] = useState(null)



  const value = {
    theme,
    setTheme

  }
  return (
    <AppContext.Provider value={value} >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider