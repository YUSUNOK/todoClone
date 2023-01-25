import React from 'react';
import { useState, useEffect } from 'react';
import InsertItem from './components/InsertItem';
import ItemList from './components/ItemList';
import { Item } from './types/type';
import './App.css';

function App() {
  const saveItems = localStorage["todos"] ? JSON.parse(localStorage.getItem("todos") || "") : [];
  const [items, setItems] = useState<Item[]>(saveItems);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <h1>TO DO LIST</h1>
        </div>
        <InsertItem items={items} setItems={setItems} />
        <ItemList items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default App;
