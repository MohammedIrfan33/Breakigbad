import React,{ useState } from 'react'


function Search({getQuery}) {
  const[text,setText] = useState('')
  
  const onChange = (q) =>{
    getQuery(q)
    setText(q)
  }
  return (
    <form class="center search">
      <input 
        type="text"
        placeholder="Enter Here"
        value={text}
        onChange={(e)=>onChange(e.target.value)}
      />
    </form>
    )
}
export default Search