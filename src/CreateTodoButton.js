import './CreateTodoButton.css';

function CreateTodoButton(){
  return (
    <button className='CreateTodoButton' onClick={event => alert(event.target.id)}>
        +
    </button>
  );
}

export { CreateTodoButton };
