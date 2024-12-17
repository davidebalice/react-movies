import { Box } from "@mui/material";
import React from "react";
import useStyles from "./footerstyles";

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.footer}><a href="https://www.davidebalice.dev" className={classes.link} target="_blank" rel="noreferrer">www.davidebalice.dev</a></Box>
    </>
  );
};

export default Footer;
