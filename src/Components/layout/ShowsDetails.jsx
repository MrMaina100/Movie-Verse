import { useContext, useEffect } from "react"
import movieDbContext from "../../Context/MovieDbContext"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import BackButton from "../../assests/BackButton"



function ShowsDetails() {

   const {seriesDetails,getSingleTVDetails} = useContext(movieDbContext)
   const {first_air_date, last_air_date, homepage, overview, backdrop_path, vote_average, poster_path} = seriesDetails
   const params = useParams();  
   useEffect(()=>{
    getSingleTVDetails(params.series_id)

   },[params.series_id])
  return (
     <>
     <Link to='/shows'>
     <button className="p-2 ml-2 bg-black text-white mt-2 rounded-lg capitalize">
     <BackButton/>
     </button>
     </Link>
    
    
   <div className="flex flex-col mt-2 md:flex-row md:space-x-2 max-w-[80%] mx-auto items-center">

      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className="h-96"  />

      <div className="px-2.5 space-y-2 mt-2 mb-2">

        <p className="font-inter">{overview}</p>
        <Link to={homepage}>
          <button className="p-3 bg-black text-white mt-2 rounded-lg capitalize font-inter">Visit HomePage</button>
        </Link> 
        <p className="font-inter">First-air-date: {first_air_date}</p>
        <p className="font-inter">Last-air-date:{last_air_date}</p>
        
        <p className="font-inter">Ratings:{typeof vote_average === 'number' ? vote_average.toFixed(1) : vote_average }/10</p>
      </div>

     </div>
    
   


    </>
  )
}
export default ShowsDetails