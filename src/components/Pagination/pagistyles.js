import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },
  button: {
    margin: "30px 2px",
    background: "rgba(0,0,0,0.7) !important",
    color: "#fff !important",
    fontFamily: "EmberCondensed !important",
    fontSize: "1rem !important",
    "&:hover": {
      background: "rgba(255,255,255,0.5) !important",
    },
  },
  pageNumber: {
    margin: "0 20px !important",
    color: "theme.palette.text.primary",
    fontFamily: "EmberCondensed !important",
  },
}));
