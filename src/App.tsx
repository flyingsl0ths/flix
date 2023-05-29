import React from "react";
import { default as Movie, type MovieInfo } from "./components/Movie";
import "./App.css";

function App() {
  const [movie, _] = React.useState({
    plot: "In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDkxNzRmNDYtMDY0OS00N2JhLTkzZWUtMWE3MzZkNDk1MmJiXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_FMjpg_UX1000_.jpg",
    genres: ["Action", "Adventure", "Comedy"],
    cast: ["Ryan Reynold", "Justice Smith", "Kathryn Newton"],
    title: "Detective Pikachu",
    released: "2019",
    directors: ["Rob Letterman"]
  } as MovieInfo | null);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {movie ? <Movie {...movie} /> : <h1>???</h1>}
      <div className="w-4/12 flex flex-col items-center justify-center text-base">
        <input
          className="p-2 mt-5 w-full border placeholder:italic rounded-md"
          type="text"
          pattern="w+"
          placeholder="Lookup a movie..."
          defaultValue="Detective Pikachu"
          required
        />
        <div className="p-2 mt-5 rounded-md w-full bg-sky-400 text-slate-50 select-none text-center shadow">
          <span>Search</span>
        </div>
      </div>
    </div>
  );
}

export default App;
