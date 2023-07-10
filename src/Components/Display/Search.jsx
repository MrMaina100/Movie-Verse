import { useState, useContext } from "react"
import movieDbContext from "../../Context/MovieDbContext"


function Search() {

   const [formData, setFormData] = useState('');
   const { searchData  } = useContext(movieDbContext)

   const handleSubmit = (e)=>{
      e.preventDefault();
      if(formData === ''){
        alert('please input something')
      }else{
        searchData(formData)
        setFormData('')

      }
    
   }

  return (
    <div className="flex items-center justify-center">      

      <form  onSubmit={handleSubmit}>

         <input
          type="text"
          value={formData}
          name="input"
          onChange={(e)=>setFormData(e.target.value)}
          className=" border-2 border-black rounded-xl px-4 focus:outline-none mt-4 md:px-8 md:h-10 md:rounded-lg  "
         />
         <input type="submit" />
         
      </form>  

    </div>
  )
}
export default Search