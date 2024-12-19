import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    fontFamily: "EmberCondensed !important",
  },
  container: {
    minHeight: "calc(100vh - 100px)",
  },
  content: {
    flexGrow: 1,
    transition: "width 0.4s",
    width: `100%`,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: "100%",
    },
  },
}));
