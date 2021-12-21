const MovieCard = ({ movie }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={movie.Poster} className="img-fluid" alt={movie.Title} />
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <a href="/movies" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default MovieCard;