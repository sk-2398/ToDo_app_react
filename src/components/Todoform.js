import React from 'react';
import Todo from './Todo';
import styles from "../style.module.css";


export default function Todoform({todo,setTodo,todoList,setTodoList}) {
    const handleChange = (event) =>{
        let item=event.target.value;
        setTodo(item)
        console.log(item)
    }
    const addItem = (event) =>{
        event.preventDefault();
        setTodoList([...todoList,todo])
        setTodo("")
        // let tempList=todoList;
        // todoList.push(todo);
        // setTodoList(tempList);
        // setTodo("");
    }
  return (
    <>
    <div  className={styles.todoform}>
      <form onSubmit={addItem} className={styles.todoinput}>
        <input type="text" value={todo} onChange={handleChange} className={styles.todoinputfield} placeholder='Enter task here' />
        <button type="submit" className={styles.todobtn}>Add Task</button>
      </form>
      
    </div>
    {todoList.map((item)=>(
      <Todo item={item}></Todo>

  ))}
  </>
  )
}
