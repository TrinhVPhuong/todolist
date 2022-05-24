import { useState } from "react";

function Header(props) {
  const { addTodo, Toggle, isNotCheckAll } = props;
  const [TodoText, setTodoText] = useState("");
  const handleaddTodo = (key) => {
    if (key.code === "Enter" && TodoText) {
      addTodo({
        // id: new Date().valueOf(),
        'id': new Date().valueOf().toString(),
        'content': TodoText,
        'isComplete': false,
      });
      setTodoText("");
    }
  };

  return (
    <header className="header">
      <h1>TodosList</h1>
      <label className={`${isNotCheckAll ? 'active toggle-all' : 'toggle-all'}` } htmlFor="toggle-all" onClick={() => {Toggle()}}>O</label>
      <input
        className="addTodoInput"
        type="text"
        value={TodoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={(key) => handleaddTodo(key)}
        placeholder="Take some action........"
      />
    </header>
  );
}
export default Header;
