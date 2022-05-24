
import { useState } from "react";

function Todo(prop) {
  const { todo, index, getIdEditing, IdEditing, editTodo, editComplete, deleteTodo } = prop;
  const isEditing = IdEditing === todo.id;
  const [content, settcontent] = useState(todo.content);
  const handleeditTodo = () =>{
    editTodo({...todo,content}, index);
  }
  return (
    <li
      className={`${isEditing ? "editing" : ""} ${
        todo.isComplete ? "complete" : ""
      }`}
    >
      {!isEditing ? (
        <div className="TodoInner">
          <input
            type="checkbox"
            className="toggle"
            onChange={() => {
              editComplete(todo.id)
            }}
            checked={todo.isComplete}
          />
          <label onDoubleClick={() => getIdEditing(todo.id)}>
            {todo.content}
          </label>
          <button className="deleteTodo" onClick={()=>{deleteTodo(todo)}}>x</button>
        </div>
      ) : (
        <input
          className="editing"
          type="text"
          value={content}
          onChange={(e) => settcontent(e.target.value)}
          onBlur={handleeditTodo}
          onKeyPress={(e ) => (e.key === 'Enter') ? handleeditTodo() : {}}
        />
      )}
    </li>
  );
}

export default Todo;
