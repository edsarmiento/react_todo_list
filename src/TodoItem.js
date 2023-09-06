import './TodoItem.css'

function TodoItem(props){
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>V { props.completed }</span>
      <p className={`TodoItem-p ${ props.completed && "TodoItem--complete"}`}>
        { props.text }
      </p>
      <span className="Icon Icon-delete">X</span>
    </li>
  );
}

export { TodoItem }
