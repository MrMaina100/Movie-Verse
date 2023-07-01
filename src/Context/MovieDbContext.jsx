import { createContext, useState,  } from "react";

const movieDbContext = createContext();


export const MovieDbProvider = ({children})=>{
   
const APIKEY = '';
const APIURL = 'https://api.themoviedb.org/3/';

const [list, setList] = useState([])


const searchMovie = async (text)=>{  
   
  setList([])

   const res = await fetch(`${APIURL}/search/movie?query=${text}&api_key=${APIKEY}`)
   const data = await res.json()
   console.log(data.results);

   setList(data.results);

}

const searchTv = async (text)=>{
   setList([])
   const res = await fetch(`${APIURL}/search/tv?query=${text}&api_key=${APIKEY}`)
   const data = await res.json()
   console.log(data.results);

   setList(data.results)
}


const fetchdata = async (endpoint)=>{

     const res = await  fetch(`${APIURL}${endpoint}?api_key=${APIKEY}&language=en-US`)
     const data = await res.json()

     setList(data.results);   
   }



   return (
   <movieDbContext.Provider value={{
      list,
      fetchdata,
      searchMovie,
      searchTv

   }}>       

  {children}


   </movieDbContext.Provider>
   )
}

export default movieDbContext