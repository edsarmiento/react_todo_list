import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

const defaultTodos = [
  { text: 'cortar cebolla', completed: true },
  { text: 'toLALAmar el cafe', completed: false },
  { text: 'introduccion al cursod e react ', completed: false },
  { text: 'intro con la llorona ', completed: false }
];

function App() {
  // states
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  // Derivated States
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    }
  );
  
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    console.log('here we are 2');
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>

      <TodoCounter 
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch
        SearchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        { searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )) }
      </TodoList>

     <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
