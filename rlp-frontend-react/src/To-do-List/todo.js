import "./todo.css";
import React from "react";


const ToDoList = () => {
    const [todos, setTodos] = React.useState([])
    const [todo, setTodo] = React.useState("")
    const [todoEdit, setTodoEdit] = React.useState(null)
    const [editText, setEditText] = React.useState("")

    React.useEffect(() => {
      const tempVal = localStorage.getItem("todos")
      const loadedTodos = JSON.parse(tempVal)

      if(loadedTodos) {
        setTodos(loadedTodos)
      }
    }, [])

    React.useEffect(() => {
      const tempVal = JSON.stringify(todos)
      localStorage.setItem("todos", tempVal)
    }, [todos])

  
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

    function deleteTodo(id) {
      const updatedTodos = [...todos].filter((todo) => todo.id !== id)

      setTodos(updatedTodos)
    }

    function toggleComplete(id) {
      const updatedTodos = [...todos].map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })

      setTodos(updatedTodos)
    }

    function editTodo(id) {
      const updatedTodos = [...todos].map((todo) => {
        if(todo.id === id) {
          todo.text = editText
        }
        return todo
      })
      setTodos(updatedTodos)
      setTodoEdit(null)
      setEditText("")
    }
  
    return (
        <div className="ToDoList">
            <form onSubmit = {handleSubmit}>
                <input type="text" onChange = {(e) => setTodo(e.target.value)} value = {todo}/>
                <button type ="submit"> Add To-Do </button>
            </form>
            {todos.map((todo) => <div key = {todo.id}>

              {todoEdit === todo.id ? 
              (<input type = "text" onChange = {(e) => setEditText(e.target.value)} value = {editText}/>) : 
              (<div>{todo.text}</div>)}

                <button onClick = {() => deleteTodo(todo.id)}>Delete</button>
                <input type = "checkbox" onChange = {() => toggleComplete(todo.id)}
                checked = {todo.completed}/>

                {todoEdit === todo.id ? (<button onClick = {() => editTodo(todo.id)}>Submit Edit</button>) : 
                (<button onClick = {() => setTodoEdit(todo.id)}>Edit To-Do</button>)}

                </div>)}
        </div>
      
    );
  }
  
  export default ToDoList;