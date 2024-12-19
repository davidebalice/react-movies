import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  play: {
    width: "18%",
    transition: "transform 0.3s ease-in-out, brightness 0.3s ease-in-out",
  },
  container: {
    width: "100%",
    height: "260px",
    overflow: "hidden",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    transition: "transform 0.2s ease-in-out, background-size 0.3s ease-in-out",
    "&:hover": {
      backgroundSize: "105%",
    },
    "&:hover $play": {
      transform: "scale(1.08)",
      filter: "brightness(0.8)",
    },
    "&:hover $overlay": {
      transform: "scale(1.05)",
      background: "rgba(0,0,0,0.8)",
    },
    [theme.breakpoints.up("xs")]: {
      height: "220px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "280px",
    },
    [theme.breakpoints.up("md")]: {
      height: "240px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "260px",
    },
  },
  overlay: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "rgba(0,0,0,0.6)",
    transition: "background 0.2s ease-in-out",
  },
  video: {
    width: "50%",
    height: "50%",
    border: "none",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "90%",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: "14px",
    padding: "12px",
    height: "100px",
    overflow: "hidden",
    display: "flex",
    alignItems: "end",
  },
}));
