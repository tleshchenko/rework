import React, { StrictMode } from "react";
import MovieSearch from "../components/movie_search.js";
import MoviesList from "../components/movies_list.js";
import { moviesStore } from '../store/movies_store.js';
import { useSyncExternalStore, useState } from "react";
import { CssBaseline, Pagination } from "@mui/material";
import BackgroundSlider from "../components/slider.js";



export default function MainContent() {
    const [page, setPage] = useState(1);
    const results = useSyncExternalStore(moviesStore.subscribe, moviesStore.getResults);
    const movies = useSyncExternalStore(moviesStore.subscribe, moviesStore.getSnapshot);
    const [active, setActive] = useState('');

    
    const handleChange = (event, value) =>{
        setPage(value)
    }

    return (
        <React.StrictMode>
            <MovieSearch  page={page}/>
            {movies ? <StrictMode>
                <MoviesList/>
                <div className="pagination_wrapper">
                    { results ? <CssBaseline><Pagination count={Math.ceil(results/10)} onChange={handleChange} color="primary" shape="rounded" /></CssBaseline> : <BackgroundSlider/> }
                </div>
            </StrictMode> : <p className="error_message">No match </p>}
        </React.StrictMode>
    )
}