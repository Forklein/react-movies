import './App.css';

import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import Modal from './components/Modal';


import axios from 'axios';
import { useState, useEffect } from 'react';

const APIKEY = process.env.REACT_APP_API_KEY;
const BASEURI = process.env.REACT_APP_BASEURI;



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

  const [moviesInfo, setMoviesInfo] = useState([]);

  const getMoviesById = async (id) => {
    const moviesId = await axios.get(`${BASEURI}/?i=${id}&apikey=${APIKEY}`);
    setMoviesInfo(moviesId.data);
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
        <MovieList movies={movies} selectedMovie={getMoviesById} />
        <Modal movie={moviesInfo} />
      </main>
    </div>

  );
}

export default App;
