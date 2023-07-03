import { createContext, useState,  } from "react";

const movieDbContext = createContext();


export const MovieDbProvider = ({children})=>{
   
const APIKEY = '';
const APIURL = 'https://api.themoviedb.org/3/';

const [list, setList] = useState([]);
const [loading, setLoading] = useState(false);

const searchMovie = async (text)=>{  
   
   const res = await fetch(`${APIURL}/search/movie?query=${text}&api_key=${APIKEY}`)
   const data = await res.json()   
   console.log(data.results);

   setList(data.results);

}


const fetchdata = async (endpoint)=>{
     setLoading(true)  

     const res = await  fetch(`${APIURL}${endpoint}?api_key=${APIKEY}&language=en-US`)
     const data = await res.json()
     setLoading(false)

     setList(data.results);   
   }



   return (
   <movieDbContext.Provider value={{
      list,
      loading,   
      fetchdata,
      searchMovie

   }}>       

  {children}


   </movieDbContext.Provider>
   )
}

export default movieDbContext