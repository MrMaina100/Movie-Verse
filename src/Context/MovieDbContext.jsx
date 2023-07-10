import { createContext, useState } from "react";


const movieDbContext = createContext();


export const MovieDbProvider = ({children})=>{
   
 const APIKEY = '';
 const APIURL = 'https://api.themoviedb.org/3/';

 
 const [apiData, SetApiData] = useState([]) 
 const [searchList, setSearchlist] = useState([])
 
 const searchData = async (text,)=>{  
   
   const res = await fetch(`${APIURL}/search/multi?query=${text}&api_key=${APIKEY}`)
   const data = await res.json()
   console.log(data.results);
   setSearchlist(data.results)
   
  
 }

 const fetchData = async (endpoint)=>{
     
     const res = await  fetch(`${APIURL}${endpoint}?api_key=${APIKEY}&language=en-US`)
     const data = await res.json()
    SetApiData(data.results) 

       
   } 

   return (
   <movieDbContext.Provider value={{
    apiData,
    searchList,  
    searchData,
    fetchData

   
   }}>       

  {children}


   </movieDbContext.Provider>
   )
}

export default movieDbContext