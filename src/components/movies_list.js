import {
    Button,
    Grid,
    Card,
    CardActions,
    CardContent,
    CardMedia,
} from "@mui/material";

import {
    useSyncExternalStore
} from "react";

import { moviesStore } from '../store/movies_store.js';
import { Link } from "react-router-dom";



export default function MoviesList() {

    const movies = useSyncExternalStore(moviesStore.subscribe, moviesStore.getSnapshot);


    const cardList = movies.map((item, index) => {
        return (
            <Grid item xs={12} md={3} lg={2.4} xl={2.1} key={index}>
                <Card className="grid_item" xs={{ maxWidth: 200 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image={item.Poster}
                    />
                    <CardContent>
                        <div className="card_text_content">
                            <h2 className="movie_title">{item.Title}</h2>
                            <span className="release_year">Year: {item.Year}</span>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Link to={`item/${item.imdbID}`}>
                            <Button size="small">Show More</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        )
    });
    return (
        <div className="container">
            <Grid container className="movies_list" spacing={2}>
                {cardList}
            </Grid>
        </div>
    )
}