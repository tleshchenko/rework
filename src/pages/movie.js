import axios from "axios";
import {
    useState,
    useEffect,
    useSyncExternalStore
} from "react";
import { Link, useParams } from "react-router-dom"
import oscarLogo from '../assets/img/oscar.png'
import imdbLogo from '../assets/img/imdb_logo.png'
import metascoreLogo from '../assets/img/metacritic.png'
import { Card, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { moviesStore } from "../store/movies_store";

const API_URL = 'http://www.omdbapi.com/?apikey=c8f03185';

export default function MovieItem() {
    const movies = useSyncExternalStore(moviesStore.subscribe, moviesStore.getSnapshot);
    const [movie, setMovie] = useState({});
    const params = useParams();
    const getFullMovieInfo = () => {
        axios.get(`${API_URL}&i=${params.id}`).then((response) => {
            setMovie(response.data);
        });
    };
    const cardList = movies.map((item, index) => {
        return (
            <Grid item xs={6} md={2} lg={1} key={index}>
                <Link to={`item/${item.imdbID}`}>
                    <Card className="grid_item" sx={{ maxWidth: 300 }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={item.Poster}
                            alt={item.Title}
                        />
                    </Card>
                </Link>
            </Grid>
        );
    });

    useEffect(() => {
        getFullMovieInfo()
    },);

    return (
        <div className="container">
            <div className="item_content">
                <img className="poster" src={movie.Poster} alt="" />
                <div className="item_description">
                    <Paper elevation={12} className="item_wrapper">
                        <Typography className="movie_header" variant="h5">{movie.Title}</Typography>
                        <div className="main_description">
                            <Typography className="genre">{movie.Genre}</Typography>
                            <Typography className="country">{movie.Country}</Typography>
                            <Typography className="release_date">Release Date: {movie.Released}</Typography>
                            <Typography className="director">Director: {movie.Director}</Typography>
                            <Typography className="authors">Writers: {movie.Writer}</Typography>
                            <Typography className="actors">Actors: {movie.Actors}</Typography>
                            <div className="about">
                                <Typography variant="h5" className="about_header">About:</Typography>
                                <Typography className="about_description">{movie.Plot}</Typography>
                            </div>
                            <div className="ratings"><div className="nominated_block">
                                <img className="oscar_logo" src={oscarLogo} alt="" />
                                <Typography className="nominated">{movie.Awards}</Typography>
                            </div>
                                <div className="imdb_rating">
                                    <img className="imdb_logo" src={imdbLogo} alt="" />
                                    <Typography className="imdb_rating_text">imdB Rating: {movie.imdbRating}, based on {movie.imdbVotes} votes</Typography>
                                </div>
                                <div className="metacritic_rating">
                                    <img className='metascore_logo' src={metascoreLogo} alt="" />
                                    <Typography className="metacritic_rating_text">Metascore rating: {movie.Metascore}/100</Typography>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>

            <div className="cardlist_block">
                <Typography variant="h7" className="cardslist_header">Also can be interested:</Typography>
                <Grid container className="cardlist" spacing={2}>
                    {cardList}
                </Grid>
            </div>
        </div>
    )
}
