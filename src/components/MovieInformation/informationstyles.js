import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  font: {
    fontFamily: "EmberCondensed !important",
    textAlign: "left",
  },
  container: {
    display: "flex",
    justifyContent: "start",
    margin: "10px 0 !important",
    marginTop: "100px !important",
    fontFamily: "EmberCondensed !important",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexWrap: "wrap",
    },
  },
  containerData: {
    display: "flex",
    flexDirection:"column !important",
    justifyContent: "start",
    alignItems: "start",
    margin: "10px 0 !important",
    marginTop: "10px !important",
    fontFamily: "EmberCondensed !important",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexWrap: "wrap",
    },
  },
  poster: {
    borderRadius: "20px",
    boxShadow: "0.5em 1em 1em rgb(64,64,70)",
    width: "90%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "250px",
      marginBottom: "30px",
    },
  },
  genresContainer: {
    margin: "10px 0 !important",
    display: "flex",
    fontFamily: "EmberCondensed !important",
    justifyContent: "start",
    gap:"20px",
    flexWrap: "wrap",
  },
  genreImage: {
    filter: theme.palette.mode === "dark" && "invert(1)",
    marginRight: "10px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 1rem",
    },
  },
  castImage: {
    width: "100%",
    maxWidth: "7em",
    height: "6em",
    objectFit: "cover",
    borderRadius: "1Opx",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "50%",
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "90%",
    },
  },
}));
