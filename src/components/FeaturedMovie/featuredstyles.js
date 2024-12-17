import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  featuredCardContainer: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    height: "690px",
    textDecoration: "none",
  },
  card: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  cardRoot: {
    position: "relative",
  },
  cardMedia: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.575)",
    backgroundBlendMode: "darken",
  },
  cardContent: {
    color: "#fff",
    width: "90%",
    marginLeft:"26px",
    marginRight:"26px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  cardContentRoot: {
    position: "relative",
    backgroundColor: "transparent",
  },
  title: {
    fontFamily: "EmberCondensed !important",
    fontSize: "3.0rem !important",
    marginTop: "70px !important",
  },
  overview: {
    fontFamily: "EmberCondensed !important",
    fontSize: "1.0rem !important",
    maxWidth:"350px",
  },
  button: {
    fontFamily: "EmberCondensed !important",
    fontSize: "1.0rem !important",
    color: "white !important",
    marginTop:"30px !important",
    width:"120px",
    fontWeight: "bold !important",
    background: "rgba(255,255,255,0.2) !important",
    "&:hover": {
      background: "rgba(255,255,255,0.7) !important",
      color: "black !important",
    },
  },
}));
