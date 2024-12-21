import { ArrowBack, Movie as MovieIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetActorsDetailsQuery,
  useGetMoviesByActorIdQuery,
} from "../../services/TMDB";
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";
import useStyles from "./actorstyles";

const Actors = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const { data, isFetching, error } = useGetActorsDetailsQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          color="primary"
        >
          Go Back
        </Button>
      </Box>
    );
  }
  return (
    <>
      <Grid container spacing={3} className={classes.container}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt=""
          />
        </Grid>

        <Grid item lg={7} xl={8} className={classes.actor}>
          <Grid item xs={12} sm={6} className={classes.buttonsContainer}>
            <ButtonGroup size="small" variant="outlined">
              <Button
                startIcon={<ArrowBack />}
                onClick={() => navigate(-1)}
                color="primary"
                className={classes.button}
              >
                Go Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                target="_blank"
                className={classes.button}
                href={`https://www.imdb.com/name/${data?.imdb_id}`}
                startIcon={<MovieIcon />}
              >
                IMDB
              </Button>
            </ButtonGroup>
          </Grid>
          <Typography variant="h3" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography align="justify" className={classes.biography}>
            {data?.biography ? (
              <span dangerouslySetInnerHTML={{ __html: data.biography }} />
            ) : (
              "No Biography yet..."
            )}
          </Typography>
        </Grid>
      </Grid>

      <Box margin="2rem 0">
        <Typography variant="h4" gutterBottom align="center">
          {data?.name} Movies{" "}
        </Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={movies?.total_pages}
        />
      </Box>
    </>
  );
};

export default Actors;
