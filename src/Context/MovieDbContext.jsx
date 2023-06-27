import { createContext, useState,  } from "react";

const movieDbContext = createContext();


export const MovieDbProvider = ({children})=>{
   
const APIKEY = '';
const APIURL = 'https://api.themoviedb.org/3/';

const [list, setList] = useState([])


const fetchdata = async (endpoint)=>{

     const res = await  fetch(`${APIURL}${endpoint}?api_key=${APIKEY}&language=en-US`)
     const data = await res.json()

     setList(data.results);


   }



   return (
   <movieDbContext.Provider value={{
      list,
      fetchdata

   }}>       

  {children}


   </movieDbContext.Provider>
   )
}

export default movieDbContext