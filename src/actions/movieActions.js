export const DELETE_MOVIE = "DELETE_MOVIE"; // Action type for deleting a movie
export const ADD_MOVIE = "ADD_MOVIE"; // Define the action type

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

// Action creator for adding a movie
export const addMovie = (movie) => {
    return {
        type: ADD_MOVIE,
        payload: movie // Pass the new movie as payload
    };
}