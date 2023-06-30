import React from "react";
import { useContext } from "react";
import movieDbContext from "../../Context/MovieDbContext";
import Search from "../Search";

const SearchResults = () => {
  const { loading, movies, series } = useContext(movieDbContext);
  return (
    <>
      <Search />
      <div className="flex flex-wrap justify-center gap-4 my-4 ">
        {loading
          ? "Loading..."
          : !movies.length
          ? "Enter a search term"
          : movies.map((movie) => {
              return (
                <div className="border shadow-lg w-[340px] p-4" key={movie.id}>
                  <img
                    className="w-full"
                    src={
                      !movie.backdrop_path
                        ? "https://www.shutterstock.com/image-vector/doodle-stick-figure-no-search-260nw-1595649697.jpg"
                        : `https://image.tmdb.org/t/p/w200${movie.backdrop_path}`
                    }
                    alt=""
                  />
                  <h2 className="font-bold text-xl">{movie.title}</h2>
                  <p>{movie.overview}</p>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default SearchResults;
