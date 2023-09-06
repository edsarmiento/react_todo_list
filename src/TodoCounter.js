// is a component that will have the counter of how many has been finished
import './TodoCounter.css'

function TodoCounter({ total, completed }){
  return (
    <h1>
      Has Completado { completed } de { total } TODOS
    </h1>
  );
}

export { TodoCounter };
