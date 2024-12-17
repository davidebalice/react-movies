import { Button, Grid, Grow, Rating, Tooltip, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./moviestyles";

const CategoryCard = ({ movie, i }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          <div className={classes.imageContainer}>
            <div className={classes.data}>
              <div className={classes.dataInt}>
                <Typography className={classes.title}>{movie.title}</Typography>

                <Typography variant="h5" align="center" gutterBottom>
                  {movie.tagline}
                </Typography>

                <Tooltip
                  disableTouchListener
                  title={`${movie.vote_average} / 10`}
                  className={classes.rating}
                >
                  <div>
                    <Rating
                      readOnly
                      value={movie.vote_average / 2}
                      precision={0.1}
                    />
                  </div>

                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ marginLeft: "10px" }}
                  >
                    {movie?.vote_average} / 10
                  </Typography>
                </Tooltip>

                <Typography className={classes.overview}>
                  {movie?.overview}
                </Typography>
              </div>
              <Button className={classes.button}>Details</Button>
            </div>
            <img
              className={classes.image}
              src={
                movie.poster_path &&
                `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              }
              alt={movie.title}
            />
          </div>
        </Link>
      </Grow>
    </Grid>
  );
};

export default CategoryCard;
