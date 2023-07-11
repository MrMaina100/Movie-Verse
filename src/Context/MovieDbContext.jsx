import { createContext, useState } from "react";


const movieDbContext = createContext();


export const MovieDbProvider = ({children})=>{
   
 const APIKEY = '';
 const APIURL = 'https://api.themoviedb.org/3/';

 
 const [apiData, SetApiData] = useState([]) 
 const [searchList, setSearchlist] = useState([])
 const [pageNumber, setPageNumber]=useState(1)
 const [movieDetails, setMovieDetails] = useState({})
 
  const searchData = async (text,)=>{  
   
   const res = await fetch(`${APIURL}/search/multi?query=${text}&api_key=${APIKEY}`)
   const data = await res.json()
   console.log(data.results);
   setSearchlist(data.results)
   
  
  }

  const fetchData = async (endpoint,pageNumber)=>{
     
     const res = await  fetch(`${APIURL}${endpoint}?api_key=${APIKEY}&language=en-US&page=${pageNumber}`)
     const data = await res.json()
     SetApiData(data.results) 

       
  } 

  const getSingleMovieDetails = async(movieid)=>{
    const res = await fetch(`${APIURL}/movie/${movieid}?api_key=${APIKEY}&language=en-US`)
    const data = await res.json()
    console.log(data);
    setMovieDetails(data)
   
  }



   return (
   <movieDbContext.Provider value={{
    apiData,
    searchList,
    pageNumber,
    movieDetails,  
    searchData,
    fetchData,
    setPageNumber,
    getSingleMovieDetails
  
   }}>       

  {children}


   </movieDbContext.Provider>
   )
}

export default movieDbContext