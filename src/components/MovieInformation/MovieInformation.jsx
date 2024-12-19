import {
  ArrowBack,
  Language,
  Movie as MovieIcon,
  Theaters,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Modal,
  Rating,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import genreIcons from "../../assets/genres";
import { userSelector } from "../../features/auth";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import {
  useGetListQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
} from "../../services/TMDB";
import MovieList from "../MovieList/MovieList";
import useStyles from "./informationstyles";

const MovieInformation = () => {
  const { user } = useSelector(userSelector);
  // console.log(user);

  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);

  const classes = useStyles();
  const dispatch = useDispatch();

  const { data: recommendations, isFetching: isRecommendationsFetching } =
    useGetRecommendationsQuery({ list: "recommendations", movie_id: id });
  // console.log(recommendations);
  const [open, setOpen] = useState(false);

  const { data: favoriteMovies } = useGetListQuery({
    listName: "favorite/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });

  const { data: watchlistMovies } = useGetListQuery({
    listName: "watchlist/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });

  useEffect(() => {
    setIsMovieFavorited(
      !!favoriteMovies?.results?.find((movie) => movie?.id === data?.id)
    );
  }, [favoriteMovies, data]);

  useEffect(() => {
    setIsMovieWatchlisted(
      !!watchlistMovies?.results?.find((movie) => movie?.id === data?.id)
    );
  }, [watchlistMovies, data]);

  const [isMovieFavorited, setIsMovieFavorited] = useState(false);
  const [isMovieWatchlisted, setIsMovieWatchlisted] = useState(false);

  const addToFavorites = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/account/${user.id}/favorite?api_key=${
        process.env.REACT_APP_TMDB_KEY
      }&session_id=${localStorage.getItem("session_id")}`,
      {
        media_type: "movie",
        media_id: id,
        favorite: !isMovieFavorited,
      }
    );
    setIsMovieFavorited((prev) => !prev);
  };

  const addToWatchlist = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/account/${user.id}/watchlist?api_key=${
        process.env.REACT_APP_TMDB_KEY
      }&session_id=${localStorage.getItem("session_id")}`,
      {
        media_type: "movie",
        media_id: id,
        watchlist: !isMovieWatchlisted,
      }
    );
    setIsMovieWatchlisted((prev) => !prev);
  };

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    <Box display="flex" justifyContent="center" alignItems="center">
      <Link to="/">Something has gone wrong - Go Back</Link>
    </Box>;
  }

  return (
    <Grid container className={classes.container}>
      <Grid
        item
        sm={12}
        lg={4}
        style={{ display: "flex", marginBottom: "30px" }}
      >
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt="{ data?.title }"
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Grid item container style={{ marginTop: "2rem" }}>
          <div className={classes.buttonsContainer}>
            <Grid item xs={12} sm={6} className={classes.buttonsContainer}>
              <ButtonGroup size="small" variant="outlined">
                <Button startIcon={<ArrowBack />} className={classes.button}>
                  <Typography
                    style={{ textDecoration: "none" }}
                    component={Link}
                    to="/"
                    color="inherit"
                    variant="subtitle2"
                    style={{marginTop:"4px"}}
                    className={classes.font}
                  >
                    Back
                  </Typography>
                </Button>

                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data?.homepage}
                  className={classes.button}
                  startIcon={<Language />}
                >
                  <Typography
                    color="inherit"
                    variant="subtitle2"
                    className={classes.font}
                    style={{marginTop:"4px"}}
                  >
                    Website
                  </Typography>
                </Button>

                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.button}
                  href={`https://www.imdb.com/title/${data?.imdb_id}`}
                  startIcon={<MovieIcon />}
                >
                  <Typography
                    color="inherit"
                    variant="subtitle2"
                    style={{marginTop:"4px"}}
                    className={classes.font}
                  >
                    IMDB
                  </Typography>
                </Button>

                <Button
                  onClick={() => setOpen(true)}
                  href="#"
                  className={classes.button}
                  startIcon={<Theaters />}
                >
                  <Typography
                    color="inherit"
                    variant="subtitle2"
                    style={{marginTop:"4px"}}
                    className={classes.font}
                  >
                    Trailer{" "}
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
          </div>
        </Grid>

        <Typography
          variant="h4"
          align="left"
          gutterBottom
          className={classes.font}
          mt={2}
        >
          {data?.title} ({data.release_date.split("-")[0]})
        </Typography>
        <Typography
          variant="h5"
          align="left"
          gutterBottom
          className={classes.font}
        >
          {data?.tagline}
        </Typography>

        <Grid item className={classes.containerData}>
          <Box display="flex" align="center">
            <Rating readOnly value={data.vote_average / 2} />
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.font}
              style={{ marginLeft: "10px" }}
            >
              {data?.vote_average} / 10
            </Typography>
          </Box>
          <Typography
            align="left"
            gutterBottom
            style={{ fontSize: "16px" }}
            className={classes.font}
          >
            {data?.runtime}min - Language: {data?.spoken_languages[0].name}
          </Typography>
        </Grid>

        <Grid item className={classes.genresContainer}>
          {data?.genres?.map((genre) => (
            <Link
              key={genre.name}
              className={classes.links}
              to="/"
              onClick={() => dispatch(selectGenreOrCategory(genre.id))}
            >
              <img
                src={genreIcons[genre.name.toLowerCase()]}
                className={classes.genreImage}
                height={20}
                alt={genreIcons[genre.name.toLowerCase()]}
              />
              <Typography
                color="textPrimary"
                variant="subtitle1"
                className={classes.font}
              >
                {genre?.name}
              </Typography>
            </Link>
          ))}
        </Grid>

        <Typography
          variant="h5"
          gutterBottom
          style={{ marginTop: "10px" }}
          className={classes.font}
        >
          OverView
        </Typography>
        <Typography
          style={{ marginBottom: "2rem", fontSize: "19px" }}
          className={classes.font}
        >
          {data?.overview}
        </Typography>

        <div className={classes.castContainer}>
          <Typography
            variant="h5"
            gutterBottom
            className={classes.castContainerTitle}
          >
            Top Cast
          </Typography>
          <Grid
            item
            container
            spacing={2}
            className={classes.castContainerBody}
          >
            {data &&
              data.credits.cast
                .map(
                  (character, i) =>
                    character.profile_path && (
                      <Grid
                        item
                        key={i}
                        xs={4}
                        md={2}
                        component={Link}
                        to={`/actors/${character.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div className={classes.actor}>
                          <img
                            className={classes.castImage}
                            src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                            alt={character.className}
                          />
                          <Typography
                            color="textPrimary"
                            className={classes.font2}
                          >
                            {character.name}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            className={classes.font2}
                          >
                            {character.character.split("/")[0]}
                          </Typography>
                        </div>
                      </Grid>
                    )
                )
                .slice(0, 6)}
          </Grid>
        </div>
      </Grid>

      <Box marginTop="5rem" width="100%">
        <Typography variant="h4" gutterBottom align="center">
          You might also like
        </Typography>
        {recommendations ? (
          <MovieList movies={recommendations} numberOfMovies={12} />
        ) : (
          <Box>Sorry Nothing was found</Box>
        )}
      </Box>

      <Modal
        closeAfterTransition
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
      >
        {data?.videos?.results?.length > 0 && (
          <iframe
            autoPlay
            className={classes.video}
            title="Trailer"
            src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
            allow="autoPlay"
          ></iframe>
        )}
      </Modal>
    </Grid>
  );
};

export default MovieInformation;
