import React, {useState, useEffect} from 'react';
import './App.css';
//importing component
import Form from "./Form";
import TodoList from "./Todo";


function App() {
  //state
  const [inputText, setInputtext] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([]);


  //Run Once when the app refresh
    useEffect(() => {
        getLocalTodos();
    }, []);

  //useEffect
  useEffect(() => {
    FilterHandler()
  }, [todos, status, filteredTodos]);

  //functions and event
  const FilterHandler = () => {
    switch (status){
      case "Positive":
      setFilteredTodos(todos.filter(todo => todo.completed === true))
            break;
      case "Negative":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
            break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //save to local
    const saveLocalStorage =() => {
          localStorage.setItem('todos', JSON.stringify(todos));
    };
    const getLocalTodos = () => {
        if(localStorage.getItem("todos") === null){
            localStorage.setItem("todos", JSON.stringify([]));
        }else {
           let todoLocal = JSON.parse(localStorage.getItem("todos"));
           setTodos(todoLocal);
         }
    }
  return (
    <div className="App">
      <header>
        <h1>My Todo' List{inputText}</h1>
      </header>
      <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputtext}
          setStatus={setStatus}
      />
      <TodoList
           FilteredTodos={setFilteredTodos}
          setTodos todos={todos}
      />
    </div>
  );
}

export default App;
