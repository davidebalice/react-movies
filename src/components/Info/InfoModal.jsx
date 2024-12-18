import { Close } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import useStyles from "./infostyles";

const InfoModal = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <>
      <Modal open={open} onClose={handleClose} className={classes.info}>
        <Box>
          <Button
            className={classes.close}
            onClick={handleClose}
            sx={{ mt: 2 }}
          >
            <Close className={classes.closeButton} />
          </Button>
          <Typography variant="h5" component="h2" className={classes.font}>
            Movies archive
          </Typography>{" "}
          <Typography
            variant="h6"
            component="h3"
            mt={2}
            fontSize={18}
            className={classes.font}
          >
            Movies archive developed in React.
            <br />
            Design similar to modern video streaming apps.
            <br />
            Search movies by category and genre.
            <br />
            Movies detail, actors detail.
            <br />
            This app uses{" "}
            <a
              href="https://themoviedb.org"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              themoviedb.org
            </a>{" "}
            api
            <br />
            <br />
            Github
            <br />
            <a
              href="https://github.com/davidebalice/react-movies"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              github.com/davidebalice/react-movies
            </a>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default InfoModal;
