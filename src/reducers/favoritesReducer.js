

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const TOGGLE_DISPLAY_FAVORITES = "TOGGLE_DISPLAY_FAVORITES";

// Initial state
const initialState = {
    favorites: [], // An array to store favorite movie objects
    displayFavorites: false, // A boolean to control displaying favorites
}

// Reducer function
const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            // Add a movie to favorites
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        case REMOVE_FAVORITE:
            // Remove a movie from favorites based on some criteria
            // You can implement this logic based on your requirements
            // For example, you can remove a favorite by movie ID
            return {
                ...state,
                favorites: state.favorites.filter(movie => movie.id !== action.payload),
            };
        case TOGGLE_DISPLAY_FAVORITES:
            // Toggle the display of favorites
            return {
                ...state,
                displayFavorites: !state.displayFavorites,
            };
        default:
            return state;
    }
}

export default favoritesReducer;
