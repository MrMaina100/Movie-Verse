import { useContext, useEffect } from "react"
import movieDbContext from "../../Context/MovieDbContext"
import { Link } from "react-router-dom"
import BackButton from "../../assests/BackButton"
import NextButton from "../../assests/NextButton"
function TvDisplay() {

   const {apiData, fetchData, pageNumber, setPageNumber} = useContext(movieDbContext)
   useEffect(()=>{
    fetchData('tv/top_rated', pageNumber)

   },[pageNumber])
   
   
  return (

    <>
      <div className="flex flex-col justify-between flex-wrap items-center p-12  space-y-4 md:flex-row">
      {apiData.map((items)=>{
        return(  
          
          <Link to={`/showsDetails/${items.id}`} key={items.id}>
           <div key={items.id}  className=" w-64 rounded-xl shadow-2xl h-96 ">
            {items.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`} alt="" className="max-h-[82%] w-full " /> 
              :
               <img src="https://www.shutterstock.com/image-vector/doodle-stick-figure-no-search-600w-1595649697.jpg" alt="" className="max-h-[82%] w-full h-full"  />  }
           
            <p className="font-inter text-[15px]">{items.name}</p>
            <p className="font-inter text-[15px]">{items.vote_average}/10</p>    
         
          </div> 
          
          </Link>
                    
         
        )
      })
      }
 
    </div>

    <div className="space-x-2 ml-2 mb-2 flex items-center justify-center">

      
      
    <button onClick={()=>setPageNumber(page=>page -1)} disabled={pageNumber === 1} className="p-1.5 rounded-full bg-black text-white text-center ">
    <BackButton/>
     </button>
    <button onClick={()=>setPageNumber(page=>page +1)} className="p-1.5 rounded-full bg-black text-white text-center">
     <NextButton/>
    </button>
      
    </div> 
        
    </>
    
  
  )
}
export default TvDisplay
