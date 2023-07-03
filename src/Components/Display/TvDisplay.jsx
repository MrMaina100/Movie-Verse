import { useContext, useEffect } from "react"
import movieDbContext from "../../Context/MovieDbContext"

function TvDisplay() {

   const {list, fetchdata, loading} = useContext(movieDbContext)
   useEffect(()=>{

      fetchdata('tv/top_rated')

   },[])
  return (
    
    <div className="flex flex-col justify-between flex-wrap items-center p-12  space-y-4 md:flex-row">
      {loading ? <h1>loading....</h1> 
      :list.map((items)=>{
        return(          
             <div key={items.id}  className=" w-64 rounded-xl shadow-2xl h-96 ">
            {items.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`} alt="" className="max-h-[82%] w-full " /> 
              :
               <img src="https://www.shutterstock.com/image-vector/doodle-stick-figure-no-search-600w-1595649697.jpg" alt="" className="max-h-[82%] w-full h-full"  />  }
           
            <p>{items.name}</p>
            <p>{items.vote_average}/10</p>    
         
          </div>         
         
        )
      })
      }
      
      
    </div>
  )
}
export default TvDisplay
