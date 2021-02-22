import "./todo.css";
import React from "react";

function ToDoList()  {
    const [todos, setTodos] = React.useState([]);
    const [todo, setTodo] = React.useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const newTodo = {
        id: new Date().getTime(),
        text: todo,
        completed: false,
      };
      setTodos([...todos].concat(newTodo));
      setTodo("");
    }
  

  
    return (
        <div className = "ToDoList">
            <form onSubmit = {handleSubmit}>
                <input type = "text" onChange = {(e) => setTodo(e.target.value)} value = {todo}/>
                <button type = "submit" >Add To-Do</button>

            </form>
            {todos.map((todo) => <div>{todo.test}</div>)}

        </div>
    );
}
  
  
export default ToDoList;



