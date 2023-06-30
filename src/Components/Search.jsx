import { useState, useContext, useEffect } from "react"
import movieDbContext from "../Context/MovieDbContext"

function Search() {

   const [input, setInput] = useState('');
   const { searchMovie,searchTv, fetchdata} = useContext(movieDbContext)

   const handleSubmit = (e)=>{
      e.preventDefault()
      if(input === ''){
        alert('please enter something')
      }else if(fetchdata('movie/popular') || fetchdata('movie/top_rated')){
        searchMovie(input)
      }else {
        searchTv(input)
      }
     
      
   }

  return (
    <div className="flex items-center justify-center">      

      <form  onSubmit={handleSubmit}>

         <input
          type="text"
          value={input} 
          onChange={(e)=>setInput(e.target.value)}
          className=" border-2 border-black rounded-xl px-4 focus:outline-none mt-4 md:px-8 md:h-10 md:rounded-lg  "

         />

         <input type="submit" />

      </form>

    </div>
  )
}
export default Search