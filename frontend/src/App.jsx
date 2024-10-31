import { useState } from 'react'
import { CreateTodos } from './components/CreateTodos';
import { Todos } from './components/Todos';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'




function App() {
  const [todos, settodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json()
    settodos(json.todos)
  })
  return (
    <div>
      <CreateTodos></CreateTodos>
      <Todos todos = {todos}></Todos>
    </div>
  )
}

export default App
