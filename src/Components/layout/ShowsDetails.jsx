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
    
    
     <div className="w-full min-h-screen flex flex-col items-center">

     <div className="bg-white mx-auto max-w-[80%] flex flex-col space-y-2 md:flex-row md:space-x-3 mt-6">
      <div className="">
       <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className=" w-full h-full md:h-[400px] md:w-[500px]" />
      </div>      
      <div className="px-5 space-y-2">
        <p className="">{overview}</p>
        <p className="">first_air_date: {first_air_date}</p>
        <p className="">last_air_date: {last_air_date}</p>
        <p>{typeof vote_average === 'number' ? vote_average.toFixed(1) : vote_average }/10</p>
        

      </div>

     </div>
      
     </div>
    
   


    </>
  )
}
export default ShowsDetails