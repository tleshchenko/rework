let favMovies = [];
let favlisteners = [];

export const favMoviesStore = {
    addMovies(movie_item) {
        favMovies = [...favMovies, ...movie_item]
        emitChange();
    },
    subscribe(listener) {
        favlisteners = [...favlisteners, listener];
        return () => {
            favlisteners = favlisteners.filter(l => l !== listener);
        }; 
    },
    getSnapshot() {
        return favMovies;
    }

};

function emitChange() {
    for (let listener of favlisteners) {
      listener();
    }
  }