
import React, { useState, useEffect} from 'react'
import API_KEY from './Api'

const CONTEXT_KEY = "6e5c1a46f7aabccbd"
const useGoogle = (term) => {

    const [data, setData] = useState();
    

    useEffect(()=>{

        const fetchData = async() =>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(res => res.json())
            .then(result =>{
                setData(result)
            })
            
        }

        fetchData();

    }, [term])


    
  return {data}
  
    
  
};

export default useGoogle
