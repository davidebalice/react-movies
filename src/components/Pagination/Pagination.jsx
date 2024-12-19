import { Button, Typography } from "@mui/material";
import React from "react";
import useStyles from "./pagistyles";

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const classes = useStyles();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
      scrollToTop();
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
      scrollToTop();
    }
  };

  if (totalPages === 0) return null;

  return (
    <div className={classes.container}>
      <Button
        onClick={handlePrev}
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
      >
        {" "}
        Prev{" "}
      </Button>

      <Typography variant="h4" className={classes.pageNumber}>
        {currentPage}
      </Typography>

      <Button
        onClick={handleNext}
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
      >
        {" "}
        Next{" "}
      </Button>
    </div>
  );
};

export default Pagination;
