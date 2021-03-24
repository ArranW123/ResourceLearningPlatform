import "./todo.css";
import Header from '../Header/Header';
import React from "react";


const ToDoList = () => {
    const [todos, setTodos] = React.useState([])  //useState hook adding an array containing "todos and setTodos" and set default value to empty array
    const [todo, setTodo] = React.useState("")  
    const [todoEdit, setTodoEdit] = React.useState(null)   //set to null initially because we are not editing at the start
    const [editText, setEditText] = React.useState("")

    React.useEffect(() => {                           /*accesses the local storage with getItem*/
      const tempVal = localStorage.getItem("todos")
      const loadedTodos = JSON.parse(tempVal)

      if(loadedTodos) {               /*makes sure there are no pre loaded data for first time users*/
        setTodos(loadedTodos)
      }
    }, [])

    React.useEffect(() => {                     /*allows us to save our data into local storage*/
      const tempVal = JSON.stringify(todos)     /*turns our array into JSON which turns any javascript into JSON*/
      localStorage.setItem("todos", tempVal)    
    }, [todos])

  
  function handleSubmit(e) {     /*by default forms refresh the page when they are submitted hence this function stops this*/
      e.preventDefault();             
  
      const newTodo = {                   /*sets up a new todo*/
        id: new Date().getTime(),         /*gives us unique id*/
        text: todo,                       /*is set to todo hook*/
        completed: false,                 /*todo is not completed at first*/
      };
      setTodos([...todos].concat(newTodo));    /*clones our todos and makes a new array out of it and adds our new object into our todos array*/
      setTodo("");                             /*restores setTodo to empty string, doesn't add the same todo to be added again*/
    }

    function deleteTodo(id) {                  /*funtion to delete an existing todo in the array by unique id*/
      const updatedTodos = [...todos].filter((todo) => todo.id !== id)    /*set a varaible which return only the value not equal to id, this will be true for every todo expect the one being deleted */

      setTodos(updatedTodos)            
    }

    function toggleComplete(id) {             /* */
      const updatedTodos = [...todos].map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })

      setTodos(updatedTodos)
    }

    function editTodo(id) {
      const updatedTodos = [...todos].map((todo) => {      /*stores our new todo and maps over them*/
        if(todo.id === id) {
          todo.text = editText                             /*sets the todo text to the editing text*/
        }
        return todo
      })
      setTodos(updatedTodos)
      setTodoEdit(null)       /*resets our ediiting funciton*/
      setEditText("")
    }
  
    return (
      <div>
        <Header />
      <div id="todo-list">
        <h1>Todo List</h1>
        <div className="form-todo">
        <form onSubmit={handleSubmit}>   {/*runs everytime a submit button is used which runs the handleSumbit function*/}
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}     
            value={todo}  
          />                {/*event object which uses an onchange handler to pass the text to setTodo hook, where e is the event obj, target is the input and value of the input*/}
          <button type="submit">Add Todo</button>
        </form>
        </div>
        {todos.map((todo) => (                      /*mapping over our todo, goes through each element of an array and return the text*/             
          <div key={todo.id} className="todo">
            <div className="todo-text">
              <input
                type="checkbox"
                id="completed"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}     /*wheh checkbox is tickeed it runs the todocomplete function*/
              />
              {todo.id === todoEdit ? (      
                <input
                  type="text"
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <div>{todo.text}</div>
              )}
            </div>
            <div className="todo-actions">
              {todo.id === todoEdit ? (            /*if true we can submit the edit with the submit button otherwise it only shows edit button*/
                <button onClick={() => editTodo(todo.id)}>Submit Edits</button>
              ) : (
                <button onClick={() => setTodoEdit(todo.id)}>Edit</button>
              )}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>    {/*button to delete todo*/}
            </div>
          </div>
        ))}
      </div>
      </div>

    );
  }
  
  export default ToDoList;