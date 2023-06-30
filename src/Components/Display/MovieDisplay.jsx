import { useContext, useEffect } from "react"
import movieDbContext from "../../Context/MovieDbContext"

function MovieDisplay() {

   const {list, fetchdata} = useContext(movieDbContext)

   useEffect(()=>{
      fetchdata('movie/top_rated')

   },[])
  return (
    <div className="flex flex-col justify-between flex-wrap items-center p-12  space-y-4 md:flex-row">
      
      {list.map((items)=>{
        return(          
             <div key={items.id}  className=" w-64 rounded-xl shadow-2xl h-96 ">
            <img src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`} alt="" className="max-h-[82%] w-full " />
           
            <p>{items.title}</p>
            <p>{items.vote_average}/10</p>    
         
          </div>         
         
        )
      })}
    </div>
  )
}
export default MovieDisplay