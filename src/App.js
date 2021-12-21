import './App.css';

import Navbar from './components/Navbar';
import MovieList from './components/MovieList';


import axios from 'axios';
import { useState, useEffect } from 'react';

const APIKEY = '114c9f37';
const BASEURI = 'http://www.omdbapi.com/';



function App() {

  const [movies, setMovies] = useState([]);

  const getMovies = async (search) => {
    if (search !== undefined && search !== '') {
      const tempMovies = await axios.get(`${BASEURI}/?s=${search}&apikey=${APIKEY}`);
      if (!tempMovies.data.Error) {
        setMovies(tempMovies.data.Search);
      }
    } else {
      setMovies([]);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);



  return (
    <div className="App">
      <header>
        <Navbar onSearchChange={getMovies} />
      </header>
      <main className="mt-3">
        <MovieList movies={movies} />
      </main>
    </div>

  );
}

export default App;
