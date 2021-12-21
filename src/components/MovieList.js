import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
    return (
        <div className="container">
            <div className="row">
                {movies.map(movie => <div className="col-3" key={movie.imdbID}>
                    <MovieCard movie={movie} />
                </div>)}
            </div>
        </div>

    );
}

export default MovieList;