import Header from "./Components/Header"
import Movies from "./Components/Movies"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Shows from "./Components/Shows"
import Home from "./Components/Home"
import { MovieDbProvider } from "./Context/MovieDbContext"
import SearchResults from "./Components/Display/SearchResults"


function App() {
  return (
    <MovieDbProvider>
    <Router>      
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/shows" element={<Shows/>}/> 
      <Route path="/search" element={<SearchResults/>}/> 

    </Routes>
    </Router>
    </MovieDbProvider>
  )
}
export default App
