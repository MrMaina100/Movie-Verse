import { useState, useContext, useEffect } from "react";
import movieDbContext from "../../Context/MovieDbContext";
import SearchIcon from "../../assests/SearchIcon";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Search() {

   const [formData, setFormData] = useState({
    searchInput:'',
    type:'movie',

   }) 
   const {searchInput, type} = formData
  

   const navigate = useNavigate()
   const { searchData } = useContext(movieDbContext)
    

   const handleChange = (e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() === "") {
      toast.error("please input something")
    } else {
      searchData(searchInput, type)

     navigate(type === 'movie' ?'/MovieSearchResults' : '/TvSearchResults' )

      setFormData({
        searchInput: "",
        type: "",
      });
    }
       
    
   
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center"
      >
        <div className="flex-col">
          <div className="relative ">
            <input
              type="text"
              value={searchInput}
              name="searchInput"
              onChange={handleChange}
              className="w-full text-sm border border-black outline-none rounded-lg p-2.5  pr-16 mt-2 md:pr-32"
            />
            <button  className="absolute right-2.5 bottom-2.5 ">             
              
              <SearchIcon />
            </button>
          </div>

          <div className="space-x-3">
            <label className="font-inter">
              <input
                type="radio"
                name="type"
                value="movie"
                checked={type === "movie"}
                onChange={handleChange}
              />
              Movie
            </label>

            <label className="font-inter">
              <input
                type="radio"
                name="type"
                value="tv"
                checked={type === "tv"}
                onChange={handleChange}
              />
              TvShows
            </label>
          </div>
        </div>
      </form>
    </>
  );
}
export default Search;
