import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  links: {
    alignItems: "center",
    fontWeight: "bolder",
    textDecoration: "none",
    cursor: "pointer",
  },

  container: {
    width: "100%",
    height: "220px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    backgroundSize: "cover",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
    [theme.breakpoints.up("xs")]: {
      height: "180px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "240px",
    },
    [theme.breakpoints.up("md")]: {
      height: "200px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "220px",
    },
  },
  title: {
    color: "white",
    textOverflow: "ellipsis",
    borderRadius: "20px",
    position: "absolute",
    fontFamily: "EmberCondensed",
    fontSize: "2.0rem",
    pointerEvents: "none",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textAlign: "center",
  },
}));
