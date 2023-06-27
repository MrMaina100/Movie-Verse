import { Link } from "react-router-dom"

function Header() {
  return (
    <div className=" bg-black text-white">

      <div className="container mx-auto p-5 flex items-center justify-between">

         <Link to='/'>
         <h1 className="font-bold text-2xl">MovieVerse</h1>
         </Link>

         <div className="flex justify-between space-x-6">

         <Link to='/movies'>
        <p className="font-semibold">Movies</p>
        </Link>

        <Link to='/shows'>        
        <p className="font-semibold">Tv/shows</p>
        </Link>        

        </div>

      </div>     

      
    </div>
  )
}
export default Header