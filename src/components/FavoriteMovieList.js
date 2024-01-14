import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const FavoriteMovieList = (props) => {
    const { favorites } = props;

    

    // Check if favorites is a valid array
    if (!Array.isArray(favorites) || favorites.length === 0) {
        return (
            <div className="col-xs savedContainer">
                <h5>Favorite Movies</h5>
                <p>No favorite movies found.</p>
            </div>
        );
    }

    return (
        <div className="col-xs savedContainer">
            <h5>Favorite Movies</h5>
            {favorites.map((movie) => (
                <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons">remove_circle</span></span>
                    </Link>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    favorites: state.favorites,
});

export default connect(mapStateToProps)(FavoriteMovieList);
