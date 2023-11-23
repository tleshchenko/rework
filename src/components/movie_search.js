import axios from 'axios';

import {
    Button,
    CssBaseline,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Tooltip
} from "@mui/material";

import {
    useRef,
    useState,
    useEffect
} from "react";

import { moviesStore } from '../store/movies_store.js';

const API_URL = 'http://www.omdbapi.com/?apikey=c8f03185';




export default function MovieSearch(props) {
    const inpRef = useRef(null);
    const [searchValue, setSearchValue] = useState(' ');
    const [searchType, setSearchType] = useState('');

    useEffect(() => {
        moviesStore.resetGlobalStore();
        getResults();
    }, [props.page])

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (searchValue) {
            getResults()
        };
    };

    const getResults = () => {
        axios.get(`${API_URL}&s=${searchValue}&type=${searchType}&page=${props.page}`).then((response) => {
            if (response.data.Search) {
                moviesStore.addMovies(response.data.Search);
                moviesStore.setAllResults(response.data.totalResults)
                document.querySelector('.search_wrapper').classList.add('active')
            }
            response.data.Error === 'Movie not found!' && moviesStore.addMovies([])
        });
    };

    return (
        <div className="container">
                <form onSubmit={onSubmitHandler} className="search_wrapper" >
                    <CssBaseline>
                    <TextField className="input_wrapper"
                        ref={inpRef}
                        id="outlined-basic"
                        placeholder="Let's find something"
                        variant="outlined"
                        onChange={(e) => setSearchValue(e.target.value)} />
                    </CssBaseline>
                    <FormControl className='control_wrapper'>
                        <InputLabel id="demo-simple-select-label">Choose type</InputLabel>
                        <Tooltip title="Choose type" arrow placement="top">
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={searchType}
                                label="Type"
                                onChange={(e) => setSearchType(e.target.value)}
                            >
                                <MenuItem value={'movie'}>Movie</MenuItem>
                                <MenuItem value={'series'}>Series</MenuItem>
                                <MenuItem value={'episode'}>Episode</MenuItem>
                            </Select>
                        </Tooltip>
                    </FormControl>
                    <Button type="submit" id="button" variant="contained" size="large">Search Movie</Button>
                </form>
        </div>
    )
}