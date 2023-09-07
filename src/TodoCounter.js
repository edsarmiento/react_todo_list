// is a component that will have the counter of how many has been finished
import './TodoCounter.css'

function TodoCounter({ total, completed }){
  return (
    <h1 className='TodoCounter'>
      <div className='TodoCounterCongrats'>
        {(total == completed) ? "Felicidades " : ''}
      </div>
      
      Has Completado <span> { completed } </span> de <span> { total } </span> TODOS
    </h1>
  );
}

export { TodoCounter };
