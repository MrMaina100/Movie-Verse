import { useContext, useEffect } from "react"
import movieDbContext from "../Context/MovieDbContext"
import Search from "./Search"

function Home() {

  const {list,fetchdata} = useContext(movieDbContext)

  useEffect(()=>{

    fetchdata('movie/popular')


  },[])


  return (
    <div>
      <Search/>
      {list.map((items)=>{
        return(
          <li key={items.id}>{items.title}</li>
        )
      })}
    </div>
  

   
  )
}
export default Home

