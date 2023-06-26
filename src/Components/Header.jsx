function Header() {
  return (
    <div className=" bg-black text-white">

      <div className="container mx-auto p-6 flex items-center justify-between">

         <div>
         <h1 className="font-bold text-2xl">MovieVerse</h1>
         </div>

         <div className="flex justify-between space-x-6">

        <p className="font-semibold">Movies</p>

        <p className="font-semibold">Tv/shows</p>

        </div>

      </div>     

      
    </div>
  )
}
export default Header