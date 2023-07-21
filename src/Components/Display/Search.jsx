import { useState, useContext } from "react"
import movieDbContext from "../../Context/MovieDbContext"
import { useNavigate} from "react-router-dom"
import { toast } from "sonner"

function Search() {

   const [formData, setFormData] = useState('') 
   const navigate = useNavigate()
   const { searchData } = useContext(movieDbContext)

   const handleSubmit = (e)=>{
      e.preventDefault()
      if(formData === ''){
        toast.error('please input something')
      }else{
        searchData(formData)
        navigate('/searchResults')        
        setFormData('')

      }
    
   }

  return (

    <>
     <div>      

      <form className="flex items-center justify-center mt-2">

         <input
          type="text"
          value={formData}
          name="input"
          onChange={(e)=>setFormData(e.target.value)}
          className=" border-2 border-black rounded-lg "
         />
         
         <button onClick={handleSubmit}>search</button>  
        
                
        
      </form> 
    </div>

    
    
    </>
   
  )
}
export default Search