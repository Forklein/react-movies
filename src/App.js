import './App.css';

import Navbar from './components/Navbar';
import MovieList from './components/MovieList';


import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const APIKEY = '114c9f37';
  const BASEURI = 'http://www.omdbapi.com/';

  const [movies, setMovies] = useState([]);




  useEffect(() => {
    const getMovies = async () => {
      const tempMovies = await axios.get(`${BASEURI}/?s=titanic&apikey=${APIKEY}`);
      setMovies(tempMovies.data.Search);
    }
    getMovies();
  }, []);



  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="mt-3">
        <MovieList movies={movies} />
      </main>
    </div>

  );
}

export default App;
