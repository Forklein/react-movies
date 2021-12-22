const MovieCard = ({ movie, selectedMovie }) => {


    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={movie.Poster} className="img-fluid" alt={movie.Title} />
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                {/* Button trigger modal */}
                <button onClick={() => selectedMovie(movie.imdbID)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Details
                </button>
            </div>
        </div>
    );
}

export default MovieCard;