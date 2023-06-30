import { createContext, useState } from "react";

const movieDbContext = createContext();

export const MovieDbProvider = ({ children }) => {
  const APIKEY = import.meta.env.VITE_API;
  const APIURL = "https://api.themoviedb.org/3/";

  const [list, setList] = useState([]);
  const [movies, setmovies] = useState([]);
  const [series, setseries] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovie = async (text) => {
    setLoading(true);
    const res = await fetch(
      `${APIURL}/search/movie?query=${text}&api_key=${APIKEY}`
    );
    const data = await res.json();
    console.log(data.results);

    setmovies(data.results);
    setLoading(false);
  };

  const searchTv = async (text) => {
    setLoading(true);
    const res = await fetch(
      `${APIURL}/search/tv?query=${text}&api_key=${APIKEY}`
    );
    const data = await res.json();
    console.log(data.results);

    setseries(data.results);
    setLoading(false);
  };

  const fetchdata = async (endpoint) => {
    const res = await fetch(
      `${APIURL}${endpoint}?api_key=${APIKEY}&language=en-US`
    );
    const data = await res.json();

    setList(data.results);
  };

  return (
    <movieDbContext.Provider
      value={{
        loading,
        list,
        fetchdata,
        searchMovie,
        searchTv,
        movies,
        series,
      }}
    >
      {children}
    </movieDbContext.Provider>
  );
};

export default movieDbContext;
