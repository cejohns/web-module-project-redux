import React from 'react';
import { connect } from 'react-redux';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = ({ movies }) => {
    // Check if movies is valid and an array
    if (!movies || !Array.isArray(movies)) {
        return <div>No movies found.</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                // Render movie items here
                <div key={movie.id}>{movie.title}</div>
            ))}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
}

export default connect(mapStateToProps)(MovieList);
