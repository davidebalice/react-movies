import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  imageLink: {
    display: "flex",
    justifyContent: "center",
    padding: "10% 0",
  },
  image: {
    width: "40%",
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  font: {
    fontFamily: "EmberCondensed !important",
    fontSize:"14px !important",
  },
  genreImage: {
    filter: theme.palette.mode === "dark" && "invert(1)",
  },
}));
