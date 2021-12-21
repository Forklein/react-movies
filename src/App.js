import './App.css';

import Navbar from './components/Navbar';
import MovieList from './components/MovieList';


import axios from 'axios';
import { useState, useEffect } from 'react';

const APIKEY = '114c9f37';
const BASEURI = 'http://www.omdbapi.com/';

const getMovies = async (search = 'titanic') => {
  const tempMovies = await axios.get(`${BASEURI}/?s=${search}&apikey=${APIKEY}`);
  return tempMovies.data.Search;
}

function App() {

  const [movies, setMovies] = useState([]);

  const callApi = async (search = '') => {
    const data = await getMovies(search);
    setMovies(data);
  }

  useEffect(() => {
    callApi();
  }, []);



  return (
    <div className="App">
      <header>
        <Navbar onSearchChange={callApi} />
      </header>
      <main className="mt-3">
        <MovieList movies={movies} />
      </main>
    </div>

  );
}

export default App;
