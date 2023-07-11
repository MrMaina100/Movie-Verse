import { useState, useContext } from "react"
import movieDbContext from "../../Context/MovieDbContext"


function Search() {

   const [formData, setFormData] = useState('')
   const { searchData, searchList } = useContext(movieDbContext)

   const handleSubmit = (e)=>{
      e.preventDefault()
      if(formData === ''){
        alert('please input something')
      }else{
        searchData(formData)
        setFormData('')

      }
    
   }

  return (

    <>
     <div className="flex justify-center">      

      <form  onSubmit={handleSubmit}>

         <input
          type="text"
          value={formData}
          name="input"
          onChange={(e)=>setFormData(e.target.value)}
          className=" border-2 border-black rounded-xl px-4 focus:outline-none mt-2 md:px-8 md:h-10 md:rounded-lg  "
         />
         <button >search</button>         
        
      </form> 
    </div>

    {searchList.map((items) => {
        return (
          <div key={items.id} className=" w-64 rounded-xl shadow-2xl h-96 ">
           {items.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`} alt="" className="max-h-[82%] w-full " /> 
              :
               <img src="https://www.shutterstock.com/image-vector/doodle-stick-figure-no-search-600w-1595649697.jpg" alt="" className="max-h-[82%] w-full h-full"  />  }

            <p>{items.title}</p>
            <p>{items.vote_average}/10</p>
          </div>
        );
      })
      
      }
    
    </>
   
  )
}
export default Search