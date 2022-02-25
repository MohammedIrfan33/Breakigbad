import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharactersGrid from './components/characters/CharactersGrid';

function App() {
  const[items,setItems] = useState([]);
  const[isloading,setIsLoading] = useState(true);
  //state for search elements
  const[query,setQuery] = useState('');
  
  useEffect(()=>{
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  },[query]);
  
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=>setQuery(q)} />
      { isloading? <h1>loading </h1> :<CharactersGrid items={items} isloading={isloading} />}
    </div>
  );
}

export default App;
