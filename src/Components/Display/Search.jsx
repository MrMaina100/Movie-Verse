import { useState, useContext, useEffect } from "react"
import movieDbContext from "../../Context/MovieDbContext"
import { useNavigate} from "react-router-dom"
import { toast } from "sonner"

function Search() {

   const [formData, setFormData] = useState({
    searchInput:'',
    type:'',

   }) 
   const {searchInput, type} = formData
  

   const navigate = useNavigate()
   const { searchData } = useContext(movieDbContext)
    

   const handleChange = (e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))

   }

   const handleSubmit = (e)=>{
      e.preventDefault()
      if(searchInput.trim() === ''){
        toast.error('please input something')
      }else{
        searchData(searchInput, type)
          
        setFormData({
         searchInput:'',
         type:'',
        })

      }
        {type === 'movie' ? navigate('/MovieSearchResults'): navigate('/TvSearchResults')}    
        
   }

  return (

    <>
          

      <form onSubmit={handleSubmit} className="flex items-center justify-center mt-2">

         <input
          type="text"
          value={searchInput}
          name="searchInput"  
          onChange={handleChange}                
          className=" border-2 border-black rounded-lg "
         />

         <label>
          <input
          type="radio"
          name="type"
          value="movie"
          checked={type ==='movie'}
          onChange={handleChange}
           />
           movie

         </label>

         <label>
          <input
          type="radio"
          name="type"
          value="tv"
          checked={type ==='tv'}
          onChange={handleChange}
           />
           Tv
         </label>

         
         
         {/* <button onClick={handleSubmit}>search</button>   */}
        
                
        
      </form>  
    
    </>
   
  )
}
export default Search