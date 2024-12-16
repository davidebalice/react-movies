import { Grid, Grow } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import useStyles from "./categoriesstyles";

const CategoryCard = ({ value, i, type, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link
          className={classes.links}
          to={`/`}
          onClick={() => {
            if (type === "genre") {
              dispatch(selectGenreOrCategory(id));
            } else if (type === "category") {
              dispatch(selectGenreOrCategory(value));
            }
          }}
        >
          <div
            className={classes.container}
            style={{
              backgroundImage: `url('${
                process.env.PUBLIC_URL
              }/categories/${value.toLowerCase().replace(/\s+/g, "-")}.jpg')`,
            }}
          >
            <div className={classes.title}>{value}</div>
          </div>
        </Link>
      </Grow>
    </Grid>
  );
};

export default CategoryCard;
