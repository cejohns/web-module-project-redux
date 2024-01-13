import { connect } from 'react-redux';
import { addMovie, deleteMovie } from './../actions/movieActions'; // Import your movie-related action creators
import { addFavorite, removeFavorite, toggleDisplayFavorites } from './../actions/favoritesActions'; // Import your favorites-related action creators


// Assuming you have a deleteMovie action in your Redux actions

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    // Assuming you receive the list of movies as props
    const movies = props.movies || [];

    // Find the movie with the given ID
    const movie = movies.find(movie => movie.id === Number(id));

    // Check if movie exists before accessing its properties
    if (!movie) {
        return <div>No movie found with ID {id}</div>;
    }

    // Function to handle movie deletion
    const handleDelete = () => {
        // Call the deleteMovie action with the current movie's ID
        props.deleteMovie(movie.id);
        // Redirect the user to the movies page
        push('/movies');
    };

    return (
        <div className="modal-page col">
            {/* ... Rest of your component code ... */}
            <button onClick={handleDelete}>Delete Movie</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    movies: state.movies, // Map movies state to props
    favorites: state.favorites, // Map favorites state to props
    // Map other state if needed
});



// Map the deleteMovie action to props
const mapDispatchToProps = (dispatch) => ({
    deleteMovie: (movieId) => dispatch(deleteMovieAction(movieId)), // Replace with your actual action
});

// Connect the component to Redux
export default connect(null, mapDispatchToProps)(Movie);
