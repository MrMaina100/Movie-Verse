import { useContext, useEffect } from "react"
import movieDbContext from "../../Context/MovieDbContext"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import BackButton from "../../assests/BackButton";

function MovieDetails() {
   const params = useParams();
   
   const {movieDetails, getSingleMovieDetails} = useContext(movieDbContext)

   const { homepage, overview, poster_path, release_date, vote_average}= movieDetails
   useEffect(()=>{
      getSingleMovieDetails(params.movie_id)

   },[params.movie_id])
  return (
    <>
     <Link to='/'>
     <button className="p-2 ml-2 bg-black text-white mt-2 rounded-lg capitalize">
     <BackButton/>
     </button>
     </Link> 

     <div className="flex flex-col mt-2 md:flex-row md:space-x-2 max-w-[80%] mx-auto items-center">

      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className="h-96"  />

      <div className="px-2.2 space-y-2 mt-2 mb-2">

        <p className="font-inter ">{overview}</p>
        <Link to={homepage}>
          <button className="p-3 bg-black text-white mt-2 rounded-lg capitalize font-inter">Visit HomePage</button>
        </Link> 
        <p className="font-inter">Release Date: {release_date}</p>
        
        <p className="font-inter">Ratings: {typeof vote_average === 'number' ? vote_average.toFixed(1) : vote_average }/10</p>
      </div>

     </div>
    
    
    </>
  )
}
export default MovieDetails