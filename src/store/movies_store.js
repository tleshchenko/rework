let movies = [];
let listeners = [];
let allResults = 0;

export const moviesStore = {
    setAllResults(value) {
        allResults = value
        emitChange();
    },
    addMovies(movie_item) {
        movies = [...movie_item]
        emitChange();
    },
    resetGlobalStore () {
        movies = [ ]
        emitChange();
    },
    subscribe(listener) {
        listeners = [...listeners, listener];
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }; 
    },
    getSnapshot() {
        return movies;
    },
    getResults() {
        return allResults;
    }

};

function emitChange() {
    for (let listener of listeners) {
      listener();
    }
  }