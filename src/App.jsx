import Header from "./Components/Header"
import Movies from "./Components/Movies"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Shows from "./Components/Shows"
import Home from "./Components/Home"

function App() {
  return (

    <Router> 
     
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/shows" element={<Shows/>}/>     


    </Routes>

    </Router>
  )
}
export default App
