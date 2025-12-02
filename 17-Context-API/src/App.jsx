import './App.css'

import { useContext } from "react";
import { AppContext} from "./context/AppContext";

function App() {
  const { theme, setTheme } = useContext(AppContext);

  function DarkModeHandler () {
    setTheme('dark')
  }

  function LightModeHandler () {
    setTheme('')
  }
  return (
    <div className={theme ==='dark' ? ("dark") : ("light")}>
      <h1>Theme Changer</h1>
      <div className="buttons">
        {theme ? (<button  onClick={LightModeHandler}>Light Theme</button>) :
        (<button  onClick={DarkModeHandler}>Dark Theme</button>)}
      </div>
    </div>
  );
}

export default App;
