import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  font: {
    fontFamily: "EmberCondensed !important",
  },
  container: {
    marginTop: "70px !important",
    fontFamily: "EmberCondensed !important",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexWrap: "wrap",
      padding: "10px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "10px",
    },
  },
  actor: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    flexDirection: "column !important",
  },
  image: {
    maxWidth: "90%",
    borderRadius: "20px",
    objectFit: "cover",
    boxShadow: "0.5em 0.5em 1em",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "0 auto",
      marginBottom: "30px",
      display: "flex",
    },
  },
  biography: {
    paddingRight: "40px",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "40px !important",
    flex: "0 0 auto !important",
  },
  button: {
    background:
      theme.palette.mode === "dark" ? "#333 !important" : "#e1e1e1 !important",
    border: "none !important",
    color:
      theme.palette.mode === "dark" ? "#fff !important" : "#222 !important",
    padding: "10px 20px !important",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      background:
        theme.palette.mode === "dark"
          ? "#222 !important"
          : "#d1d1d1 !important",
    },
  },
}));
