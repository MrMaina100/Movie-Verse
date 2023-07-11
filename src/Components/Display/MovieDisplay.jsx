import { useContext, useEffect } from "react";
import movieDbContext from "../../Context/MovieDbContext";
import { Link } from "react-router-dom";


function MovieDisplay() {
  const {apiData,fetchData, pageNumber, setPageNumber} = useContext(movieDbContext);
  useEffect(()=>{
    fetchData('movie/top_rated', pageNumber)
  },[pageNumber])

  
  return (
    <>
     
     <div className="flex flex-col justify-between flex-wrap items-center p-14  space-y-4 md:flex-row">
     
      {apiData.map((items) => {
        return (

          <Link to={`/movieDetails/${items.id}`} key={items.id}>
           <div key={items.id} className=" w-64 rounded-xl shadow-2xl h-96 ">
           {items.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`} alt="" className="max-h-[82%] w-full " /> 
              :
               <img src="https://www.shutterstock.com/image-vector/doodle-stick-figure-no-search-600w-1595649697.jpg" alt="" className="max-h-[82%] w-full h-full"  />  }

            <p>{items.title}</p>
            <p>{items.vote_average}/10</p>
          </div>
          
          </Link>
         
        );
      })
      
      }
     
    </div>

    <button onClick={()=>setPageNumber(page=>page -1)} disabled={pageNumber === 1}>Prev</button>
    <button onClick={()=>setPageNumber(page=>page +1)}>Next</button>
 
    </>
   
  );
}
export default MovieDisplay;
