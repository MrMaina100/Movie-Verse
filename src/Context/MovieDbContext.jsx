import { createContext, useState } from "react";
import { toast } from "sonner";

const movieDbContext = createContext();


export const MovieDbProvider = ({children})=>{
   
 const APIKEY = '';
 const APIURL = 'https://api.themoviedb.org/3/';

 
 const [apiData, SetApiData] = useState([]) 
 const [searchList, setSearchlist] = useState([])
 const [pageNumber, setPageNumber]=useState(1)
 const [movieDetails, setMovieDetails] = useState({})
 const [seriesDetails, setSeriesDetails] = useState({})
 const [loading, setLoading] = useState(false)
 
 
  const searchData = async (text, type)=>{  

   try {
    const res = await fetch(`${APIURL}/search/${type}?query=${text}&api_key=${APIKEY}`)
    const data = await res.json()    
    setSearchlist(data.results)
      
   } catch (error) {
       toast.error('error from server')
       setLoading(false)
      
   }
  
      
  
  }

  const fetchData = async (endpoint,pageNumber)=>{

   try {
      setLoading(true)
      const res = await  fetch(`${APIURL}${endpoint}?api_key=${APIKEY}&language=en-US&page=${pageNumber}`)
      const data = await res.json()
      SetApiData(data.results) 
      setLoading(false)
      
   } catch (error) {
      toast.error('error from server')
      setLoading(false)
      
 
   }
      
  } 

  const getSingleMovieDetails = async(movieid)=>{

   try {
     const res = await fetch(`${APIURL}/movie/${movieid}?api_key=${APIKEY}&language=en-US`)
     const data = await res.json()    
     
     setMovieDetails(data)
      
   } catch (error) {
      toast.error('error from server')
      setLoading(false)
      
   }
    
      
  }

  const getSingleTVDetails = async(seriesId)=>{

   try {
    const res = await fetch(`${APIURL}/tv/${seriesId}?api_key=${APIKEY}&language=en-US`)
    const data = await res.json()
    setSeriesDetails(data)
      
   } catch (error) {
      toast.error('error from server')
      setLoading(false)
   }
  
  }



   return (
   <movieDbContext.Provider value={{
    apiData,
    searchList,
    pageNumber,
    movieDetails,
    seriesDetails, 
    loading, 
    searchData,
    fetchData,
    setPageNumber,
    getSingleMovieDetails,
    getSingleTVDetails
  
   }}>       

  {children}


   </movieDbContext.Provider>
   )
}

export default movieDbContext