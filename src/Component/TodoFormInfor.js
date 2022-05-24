
function TodoFormInfor(props) {
  const { ListToDo, Status,numsOfTodosLeft, getStatus } = props;
  const FilterBtns = [
    {
      title: "All",
      All: Status === "All",
      onClick: () => getStatus("All"),
      link: "",
    },
    {
      title: "InComplete",
      isActived: Status === "InComplete",
      onClick: () => getStatus("InComplete"),
      link: "inComplete",
    },
    {
      title: "Completed",
      isActived: Status === "Completed",
      onClick: () => getStatus("Completed"),
      link: "completed",
    },
  ];
  return (
    <footer className="Infor">
      <span className="Todo-count">
        <strong>{numsOfTodosLeft}</strong>
        <span>{` of ${ListToDo.length} ${numsOfTodosLeft <= 1 ? "job" : "jobs"} left`}</span>
      </span>
      <ul>
        {FilterBtns.map((Btn) => (
          <FilterBtn key={`${Btn.title}`} {...Btn} />
        ))}
      </ul>
    </footer>
  );
}

function FilterBtn(props) {
  const { title, isActived, onClick, link } = props;
  return (
    <li className='buttonFilter'>
      <a
        href={`#/${link}`}
        className={`${isActived ? "active" : ""}`}
        onClick={onClick}
      >
        {title}
      </a>
    </li>
  );
}
export default TodoFormInfor;
