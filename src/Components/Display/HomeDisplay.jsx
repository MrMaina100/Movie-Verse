import { useContext, useEffect } from "react"
import movieDbContext from "../../Context/MovieDbContext"
import { Link } from "react-router-dom"
function HomeDisplay() {

   const {apiData,fetchData, pageNumber, setPageNumber} = useContext(movieDbContext)
   useEffect(()=>{
    fetchData('movie/popular',pageNumber)
   },[pageNumber])   



  return (
   
   <>
   <div className="flex flex-col justify-between flex-wrap items-center p-12  space-y-4 md:flex-row">

      {apiData.map((items)=>{
        return( 
          
          <Link to={`/movieDetails/${items.id}`} key={items.id}>
           <div key={items.id}  className=" w-64 rounded-xl shadow-2xl h-96 ">
              {items.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`} alt="" className="max-h-[82%] w-full " /> 
              :
               <img src="https://www.shutterstock.com/image-vector/doodle-stick-figure-no-search-600w-1595649697.jpg" alt="" className="max-h-[82%] w-full h-full"  />  }
            
           
            <p>{items.title}</p>
            <p>{items.vote_average}/10</p>    
         
          </div> 
          </Link>
                    
         
        )
      })
      }
 
    </div>   
    <div className="space-x-2 ml-2 mb-2 flex items-center justify-center">
      
    <button onClick={()=>setPageNumber(page=>page -1)} disabled={pageNumber === 1} className="p-1.5 rounded-full bg-black text-white text-center "><svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
     </svg></button>
    <button onClick={()=>setPageNumber(page=>page +1)} className="p-1.5 rounded-full bg-black text-white text-center"><svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
    </svg></button>
      
    </div> 
   
   </>
    
  )
}
export default HomeDisplay