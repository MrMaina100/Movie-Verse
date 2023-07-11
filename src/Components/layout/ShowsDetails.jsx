import { useContext, useEffect } from "react"
import movieDbContext from "../../Context/MovieDbContext"
import { useParams } from "react-router-dom"



function ShowsDetails() {

   const {seriesDetails,getSingleTVDetails} = useContext(movieDbContext)
   const {first_air_date, last_air_date, homepage, overview, backdrop_path, vote_average, poster_path} = seriesDetails
   const params = useParams();

   useEffect(()=>{
    getSingleTVDetails(params.series_id)

   },[params.series_id])
  return (
     <>
    
    <div>
     <div style={{backgroundImage:backdrop_path ? `url(https://image.tmdb.org/t/p/original/${backdrop_path})`:`url(https://www.pexels.com/photo/word-error-on-white-surface-4439425/)`}} className="w-full h-full bg-no-repeat bg-cover bg-center md:min-h-screen flex items-center justify-center">

     <div className="bg-white mx-auto max-w-[80%] flex flex-col space-y-2 md:flex-row md:space-x-3 mt-6">
      <div className="w-62 h-96 ">
       <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className=" w-full h-full" />
      </div>      
      <div className="px-5 space-y-2">
        <p className="">{overview}</p>
        <p className="">first_air_date: {first_air_date}</p>
        <p className="">last_air_date: {last_air_date}</p>
        <p>{vote_average}/10</p>
        

      </div>

     </div>
      
     </div>
    </div>
   


    </>
  )
}
export default ShowsDetails