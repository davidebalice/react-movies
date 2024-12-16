import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

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
  },

  image: {
    borderRadius: "20px",
    width: "100%",
    height: "auto",
  },

  /*
  "&:hover": {
      transform: "scale(1.05)",
    },
*/

  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    fontSize: "0.845rem",
    width: "230px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: 0,
    textAlign: "center",
  },
}));
