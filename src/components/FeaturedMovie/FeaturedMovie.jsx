import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./featuredstyles";

const FeaturedMovie = ({ movie }) => {
  const classes = useStyles();

  if (!movie) return null;

  return (
    <Box className={classes.featuredCardContainer}>
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        <CardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
          className={classes.cardMedia}
        >
          <Box padding="20px">
            <CardContent
              className={classes.cardContent}
              classes={{ root: classes.cardContentRoot }}
            >
              <Typography variant="h5" gutterBottom className={classes.title}>
                {movie.title}
              </Typography>
              <Typography gutterBottom className={classes.overview}>
                {movie.overview}
              </Typography>

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

              <Box
                component={Link}
                to={`/movie/${movie.id}`}
              >
                <Button className={classes.button}>Details</Button>
              </Box>
            </CardContent>
          </Box>
        </CardMedia>
      </Card>
    </Box>
  );
};

export default FeaturedMovie;
