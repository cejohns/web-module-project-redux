import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer'; // Import your favoritesReducer

const rootReducer = combineReducers({
    movies: movieReducer,
    favorites: favoritesReducer, // Add your favoritesReducer here
    // Add other reducers if needed
});

export default rootReducer;
