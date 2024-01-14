import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMovie } from './../actions/movieActions';

// Assuming you have a deleteMovie action in your Redux actions

const Movie = (props) => {
    const { id } = useParams();
    const history = useHistory();
    const movies = props.movies || [];
    const movie = movies.find(movie => movie.id === Number(id));


   

 if (!movie) {
        return <div>No movie found with ID {id}</div>;
    }

     const dispatch = useDispatch();

    const handleAddFavorite = () => {
        dispatch(addFavorite(movie));
    };

    const handleRemoveFavorite = () => {
        dispatch(removeFavorite(movie.id));
    };

    // Handle favorite button actions here if needed

    return (
        <div className="modal-page col">
              {/* ... Rest of your component code ... */}
        <div className="modal-dialog">
             {/* ... Modal Content ... */}
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span className="m-2 btn btn-dark">Favorite</span>
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

const mapStateToProps = (state) => ({
    movies: state.movies,
    favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
    deleteMovie: (movieId) => dispatch(deleteMovie(movieId)),
    // Dispatch other actions if needed
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
