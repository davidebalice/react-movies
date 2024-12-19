import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  font: {
    fontFamily: "EmberCondensed !important",
    textAlign: "left",
  },
  font2: {
    fontFamily: "EmberCondensed !important",
    textAlign: "center",
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
    flexDirection: "column !important",
    justifyContent: "start",
    alignItems: "start",
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
    gap: "20px",
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
    borderRadius: "6px",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom:"20px",
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
    width: "60%",
    height: "50%",
    border: "none",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "90%",
    },
  },
  castContainer: {
    padding: "0 !important",
  },
  castContainerTitle: {
    fontFamily: "EmberCondensed !important",
  },
  castContainerBody: {
    padding: "12px",
    paddingBottom: "0",
  },
  actor: {
    background: theme.palette.mode === "dark" ? "#333" : "#e1e1e1",
    textAlign: "center",
    borderRadius: "6px",
    padding: "10px",
    paddingTop: "16px",
    transition: "transform 0.3s ease-in-out, background 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-10px)",
      background: theme.palette.mode === "dark" ? "#222" : "#d1d1d1",
    },
  },
  button: {
    background:
      theme.palette.mode === "dark" ? "#333 !important" : "#e1e1e1 !important",
    border: "none !important",
    color: theme.palette.mode === "dark" ? "#fff !important" : "#222 !important",
    padding:"10px 20px !important",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      background: theme.palette.mode === "dark" ? "#222 !important" : "#d1d1d1 !important",
    },
  },
}));
