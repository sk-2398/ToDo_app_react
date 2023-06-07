import './App.css';
import Header from './components/Header';
import Todoform from './components/Todoform';
import { useState } from 'react';

function App() {
  const [todo,setTodo]=useState("");
  const [todoList,setTodoList]=useState([]);
  return (
    <div className="App">
      <Header></Header>
      <Todoform todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}></Todoform>
    </div>
  );
}

export default App;
