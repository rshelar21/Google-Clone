import React, { useState } from 'react'
import "./Search.css"
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useStateValue } from './StateProvider';




function Search({val = false}) {
  const [{}, dispatch] = useStateValue();
  const [input,  setInput] = useState("");
  const navigate = useNavigate();
  // const [val, setVal] = useState('true')


  const searchdata = (e)=>{
    e.preventDefault();
    // console.log("tap " + input)
   
    
    dispatch({
      type: "SET_SEARCH_TERM",
      term: input

    })

    navigate('/search')
    

  }
  
 


  const changeData = (event)=>{
    setInput(event.target.value)
    // console.log(event)
    
  }

  
 

  

  return (
    <form className='search'>
    <div className="search-input">
    <SearchIcon className="searchbtn"/>
    <input type="text" value={input} onChange={changeData}/>
    <MicIcon/>
    </div>
    {!val ? (
      <div className="searchButton" >
    <Button   type="submit"   onClick={searchdata} variant="outlined">Google Search</Button>
    <Button variant="outlined">I'm Feeling Lucky</Button>
    </div>
    ): (
      <div className="searchButton" >
    <Button className= 'hideBtn'  type="submit"   onClick={searchdata} variant="outlined">Google Search</Button>
    <Button className= 'hideBtn' variant="outlined">I'm Feeling Lucky</Button>
    </div>
    )}

    
    
      
    </form>
  )
}

export default Search
