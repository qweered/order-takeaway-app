import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TodoList} from "./components/TodoList.jsx";

function App() {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Todo 1"
        },
        {
            id: 2,
            title: "Todo 2"
        },
        {
            id: 3,
            title: "Todo 3"
        }
    ])


    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <TodoList todos={todos}/>
        </>
    )
}

export default App
