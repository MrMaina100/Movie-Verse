import { useLocation , Link} from "react-router-dom"
import movieDbContext from "../../Context/MovieDbContext"
import { useContext} from "react"

function SearchResults() {

   const location = useLocation()
   const searchQuery = new URLSearchParams(location.search).get('query')
   const {searchList, loading} = useContext(movieDbContext)
   
  return (
    <div  className="flex flex-col justify-center flex-wrap items-center p-12  space-y-4 md:flex-row md:space-x-8">
      { loading ? <h1>loading..</h1> :searchList.map((items) => {
        return (
         <Link key={items.id}>
         
          <div key={items.id} className=" w-64 rounded-xl shadow-2xl h-96 ">
           {items.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`} alt="" className="max-h-[82%] w-full " /> 
              :
               <img src="https://www.shutterstock.com/image-vector/doodle-stick-figure-no-search-600w-1595649697.jpg" alt="" className="max-h-[82%] w-full h-full"  />  }

            <p>{items.title || items.name}</p>
            <p>{typeof items.vote_average === 'number' ? items.vote_average.toFixed(1): items.vote_average}/10</p>
          </div>
          </Link>
        );
      })
      
      }
    </div>
  )
}
export default SearchResults