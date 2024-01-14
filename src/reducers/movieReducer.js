import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';

import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MOVIE:
            // Create a new movie object from the payload
            const newMovie = action.payload;
            
            // Add the new movie to the movies array in a new state
            return {
                ...state,
                movies: [...state.movies, newMovie]
            };
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item => (action.payload !== item.id))
            };
        default:
            return state;
    }
}

export default reducer;
