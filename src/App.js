import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu';
import Score from './component/Score';
import Quiz from './component/Quiz';
import{createContext, useState} from "react"
import './App.css'

export const DataContext = createContext()

function App() {
  const [appState, setAppState] = useState("menu")
  return (
    <DataContext.Provider value={{appState,setAppState}}>
      <div className="App">
        <h1>Web Development Quiz</h1>
      {appState === "menu" &&<Menu/>}
      {appState === "quiz" &&<Quiz/>}
      {appState === "score" &&<Score/>}
    </div></DataContext.Provider>
    
  );
}

export default App;
