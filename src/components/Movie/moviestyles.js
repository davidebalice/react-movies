import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
    paddingLeft: "0px",
  },
  links: {
    alignItems: "center",
    fontWeight: "bolder",
    textDecoration: "none",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  data: {
    borderRadius: "20px",
    width: "100%",
    zIndex: "100",
    position: "absolute",
    background: "rgba(0,0,0,0.7)",
    bottom: "-300px",
    height: "300px",
    color: "white",
    textAlign: "left",
    padding: "30px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    transition: "bottom 0.3s ease-in-out",
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: "20px",
    position: "relative",
    fontSize: "1px",
    margin: "0 auto",
    width: "96%",
    "&:hover $data": {
      bottom: "0px",
    },
    "&:hover $image": {
      filter: "brightness(0.8)",
      transform: "scale(1.05)",
    },
  },
  image: {
    borderRadius: "20px",
    width: "100%",
    height: "auto",
    transition: "filter 0.3s ease-in-out, transform 0.3s ease-in-out",
  },
  title: {
    fontFamily: "EmberCondensed !important",
    fontSize: "1.4rem !important",
    marginTop: "10px",
    marginBottom: "10px",
    fontWeight: "bold !important ",
  },
  overview: {
    fontFamily: "EmberCondensed !important",
    fontSize: "1.0rem !important",
    marginTop: "10px",
    marginBottom: "10px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    maxHeight: "4.5em",
    lineHeight: "1.5em",
  },
  rating: {
    display: "flex",
  },
  button: {
    fontFamily: "EmberCondensed !important",
    fontSize: "1.0rem !important",
    color: "white !important",
    fontWeight: "bold !important",
    background: "rgba(255,255,255,0.2) !important",
    "&:hover": {
      background: "rgba(255,255,255,0.7) !important",
      color: "black !important",
    },
  },
}));
