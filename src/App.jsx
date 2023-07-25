import Header from "./Components/layout/Header"
import Movies from "./Components/layout/Movies"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Shows from "./Components/layout/Shows"
import Home from "./Components/layout/Home"
import MovieDetails from "./Components/layout/MovieDetails"
import ShowsDetails from "./Components/layout/ShowsDetails"
import { MovieDbProvider } from "./Context/MovieDbContext"
import MovieSearchResults from "./Components/Display/MovieSearchResults"
import TvSearchResults from "./Components/Display/TvSearchResults"
import { Toaster } from "sonner"



function App() {

  
  return (

   <MovieDbProvider>
    <Toaster position="top-center" expand={false} richColors/>
    <Router>      
    <Header/>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/shows" element={<Shows/>}/>          
      <Route path="/movieDetails/:movie_id" element={<MovieDetails/>}/>
      <Route path="/showsDetails/:series_id" element={<ShowsDetails/>}/>  
      <Route path="/MovieSearchResults" element={<MovieSearchResults/>}/>
      <Route path="/TvSearchResults" element={<TvSearchResults/>}/>

    </Routes>
    </Router>
   </MovieDbProvider>
    
   
  )
}
export default App
