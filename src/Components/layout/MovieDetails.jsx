import { useContext, useEffect } from "react"
import movieDbContext from "../../Context/MovieDbContext"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

function MovieDetails() {
   const params = useParams();
   
   const {movieDetails, getSingleMovieDetails} = useContext(movieDbContext)

   const {backdrop_path, homepage, overview, poster_path, release_date, vote_average}= movieDetails
   useEffect(()=>{
      getSingleMovieDetails(params.movie_id)

   },[params.movie_id])
  return (
    <>
    
    <div>
     <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${backdrop_path})`}} className="w-full h-full bg-no-repeat bg-cover bg-center md:min-h-screen flex items-center justify-center">

     <div className="bg-white mx-auto max-w-[80%] flex flex-col space-y-2 md:flex-row md:space-x-3 mt-6">
      <div className="w-62 h-96 ">
       <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className=" w-full h-full" />
      </div>      
      <div className="px-5 space-y-2">
        <p className="">{overview}</p>
        <p className="">Release Date: {release_date}</p>
        <p>{vote_average}/10</p>
        

      </div>

     </div>
      
     </div>
    </div>
   


    </>
  )
}
export default MovieDetails