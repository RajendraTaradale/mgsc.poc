import { useState, useEffect } from "react";
import "./App.css"
import MovieDetails from "./components/MovieDetails";
import Myapi from './service/ServiceBase.interceptor'

function App() {
  const [query, setquery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    var result = await Myapi.get("/movies");
    setMovies(result.payload.payload.movies);
    console.log(result.data.data);
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    setMovies(movies.filter(s => s["Name"] === query))
  };

  return (
    <div className="app">
      <h1>MGSC Movies Apps</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="Search By Movie Name"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>

      <div className="app__movies">
        {movies !== [] &&
          movies.map((mv) => {
            return <MovieDetails mv={mv} />;
          })}
      </div>
    </div>
  );
}

export default App;