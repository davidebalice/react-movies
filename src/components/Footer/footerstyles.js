import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "40px",
    marginTop: "40px",
    background: "#000",
  },
  link: {
    color: "#fff",
    fontFamily: "EmberCondensed",
    "&:hover": {
      color: "#f1f1f1",
    },
  },
}));
