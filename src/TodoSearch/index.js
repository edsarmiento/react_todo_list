import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
    return (
      <input
        placeholder="your task here..."
        className='TodoSearch'
        value={searchValue} 
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    );
  }

export { TodoSearch };
  