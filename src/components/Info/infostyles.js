import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  info: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "80%",
    border: "2px solid #333",
    padding: "40px",
    background: "#000",
    fontFamily: "EmberCondensed",
    zIndex: 1000,
    margin: "0 auto",
    marginTop: "40px",
  },
  link: {
    color: "#fff",
    textDecoration: "underline",
    fontFamily: "EmberCondensed",
    "&:hover": {
      color: "#f1f1f1",
    },
  },
  close: {
    borderRadius: "20px",
    float: "right",
  },
  closeButton: {
    color: "white",
  },
  font: {
    fontFamily: "EmberCondensed !important",
  },
}));
