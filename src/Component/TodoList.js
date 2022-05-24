import Todo from "./Todo";

function TodoList(props) {
  const { ListToDo } = props;

  return (
    <ul className="TodoList">
      {ListToDo.map((todo,index) => <Todo key={todo.id} {...{todo}} {...props} index = {index}/>)}
    </ul>
  );
}

export default TodoList;
