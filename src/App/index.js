import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
import React from 'react';

function App() {
  // initial states
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
    const newItem = [...todos];
    const todoIndex = newItem.findIndex(
      (todo) => todo.text === text
    );

    newItem[todoIndex].completed = true;
    saveTodos(newItem);
  }

  const deleteTodo = (text) => {
    console.log('here we are 2');
    const newItem = [...todos];
    const todoIndex = newItem.findIndex(
      (todo) => todo.text === text
    );

    newItem.splice(todoIndex, 1);
    saveTodos(newItem);
  }

  return (
      <AppUI
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
  );
}

export default App;
