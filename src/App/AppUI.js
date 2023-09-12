import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter }      from '../TodoCounter';
import { TodoSearch }       from '../TodoSearch';
import { TodoList }         from '../TodoList';
import { TodoItem }         from '../TodoItem';
import { TodosLoading }     from '../TodosLoading';
import { TodosError }       from '../TodosError';
import { EmptyTodos}        from '../EmptyTodos';

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {
  return(
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
          {loading && <TodosLoading/>}
          {error && <TodosError/>}
          {(!loading && searchedTodos.lenght === 0) && <EmptyTodos/>}

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
  )
}

export { AppUI };