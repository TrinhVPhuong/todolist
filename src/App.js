import { useState } from "react";
import Header from "./Component/Header";
import TodoFormInfor from "./Component/TodoFormInfor";
import TodoList from "./Component/TodoList";

function App() {
  const [Todos, setTodos] = useState([]);
  const addTodo = (todo = {}) => {
    setTodos([...Todos, todo]);
  };
  const [IdEditing, setIdEditing] = useState("");
  const getIdEditing = (id = "") => {
    setIdEditing(id);
  };
  const editTodo = (todo = {}) => {
    const index = Todos.findIndex((item) => item.id === todo.id);
    const Temp = [...Todos];
    Temp.splice(index, 1, todo);
    setTodos(Temp);
    setIdEditing("");
  };
  const deleteTodo = (todo ={}) => {
    const index = Todos.findIndex((item) => item.id === todo.id);
    const Temp = [...Todos];
    Temp.splice(index, 1);
    setTodos(Temp);
    setIdEditing("");
  }
  const editComplete = (id = "") => {
    setTodos(
      Todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };
  const isNotCheckAll = (Todos = []) => Todos.find((todo) => !todo.isComplete);
  const isCheckAll = !isNotCheckAll(Todos);
  const Toggle = () => {
    let Temp = [...Todos];
    isCheckAll
      ? Temp.map((todo) => (todo.isComplete = false))
      : Todos.map((todo) => (todo.isComplete = true));
    setTodos(Temp);
  };
  const filterByStatus = (Todos = [], status = '') =>{
    switch(status){
      case 'InComplete' :
        return Todos.filter(todo => !todo.isComplete);
      case 'Completed' :
        return Todos.filter(todo => todo.isComplete);
      default: 
        return Todos
    }
    // console.log(status)
  }
  const [Status, setStatus] = useState('All')
  const getStatus = (status = '') => {
    setStatus(status)
  }
  const ListToDo = filterByStatus(Todos, Status)

  return (
    <div className="App">
      <Header addTodo={addTodo} isNotCheckAll={isNotCheckAll} Toggle={Toggle}  />
      <TodoList
        {...{ ListToDo }}
        getIdEditing={getIdEditing}
        IdEditing={IdEditing}
        editTodo={editTodo}
        editComplete={editComplete}
        deleteTodo ={deleteTodo}
      />
      <TodoFormInfor 
      {...{ ListToDo }} 
      Status={Status} 
      getStatus={getStatus} 
      numsOfTodos = {Todos.length}
      numsOfTodosLeft = {filterByStatus(Todos, 'InComplete').length}
      />
    </div>
  );
}

export default App;
