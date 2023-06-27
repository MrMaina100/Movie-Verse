import movieDbContext from "../Context/MovieDbContext";
import {  useEffect, useContext } from "react";


function Movies() {

   const {list, fetchdata} = useContext(movieDbContext)

   useEffect(()=>{

      fetchdata('movie/popular')

   },[])



  return (
    <div> 
      {list.map((result)=>{
         return <li key={result.id}>{result.original_title}</li>
      })}    

    </div>
  )
}
export default Movies