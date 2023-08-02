import { Link} from "react-router-dom"
import movieDbContext from "../../Context/MovieDbContext"
import { useContext} from "react"
import ErrorComponet from "../Error/ErrorComponet"

function MovieSearchResults() {

    const {searchList, loading} = useContext(movieDbContext) 
    const renderSearchResults = (
      <div>
         { searchList.map((items) => {
        return (
         <Link to={`/movieDetails/${items.id}`} key={items.id}>
         
          <div key={items.id} className=" w-64 rounded-xl shadow-2xl h-96 ">
           {items.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`} alt="" className="max-h-[82%] w-full " /> 
              :
               <img src="https://www.shutterstock.com/image-vector/doodle-stick-figure-no-search-600w-1595649697.jpg" alt="" className="max-h-[82%] w-full h-full"  />  }

            <p className="font-inter">{items.title}</p>
            <p className="font-inter">{typeof items.vote_average === 'number' ? items.vote_average.toFixed(1): items.vote_average}/10</p>
          </div>
          </Link>
        );
      })
      
      }

      </div>
    )   

  return (
    <div  className="flex flex-col items-center justify-center space-y-4 p-4 md:flex-row md:flex-wrap md:space-x-6">
      {loading ? <h1>loading</h1> : renderSearchResults}
      {searchList.length === 0 && <ErrorComponet/>}
     
    </div>
  )
}
export default MovieSearchResults