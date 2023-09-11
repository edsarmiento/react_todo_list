import React from "react";
// this is a custom hook
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    let parsedItem;
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem(itemName);
  
        if (!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          
          parsedItem = JSON.parse(localStorageTodos);
        }
  
        setLoading(false);
        setError(false);
      } catch (error){
        setLoading(false);
        setError(true);
        setItem(parsedItem);
      }
    }, 2000);
    console.log('executing');
  },[]);

  const saveItem = (newItem) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage };
