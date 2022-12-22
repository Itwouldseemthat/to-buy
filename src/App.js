import React, { useState } from 'react';
import './App.css';
import Search from './components/header/searchbar';
import Maincontent from './components/maincontent/maincontent';


function App() {
  const [filter, setFilter] = useState('');

  const onSearchChange = (event) => {
      setFilter(event.target.value)
  }
  
  return (
    <div className='container'>
      <Search onChange={onSearchChange} filter={filter} />
      <Maincontent filter={filter} />
    </div>
  );
}

export default App;
