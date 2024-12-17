import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  appbar: {
    backgroundColor: "rgba(0,0,0,0.5) !important",
    position: "fixed !important",
    height: "70px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      flexWrap: "wrap",
    },
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      flexWrap: "wrap",
    },
  },
  homeButton: {
    marginRight: "10px !important",
    borderRadius: "0 !important",
  },
  menuButton: {
    
    overflow: "hidden !important",
    borderRadius: "0 !important",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkButton: {
    "&:hover": {
      color: "white !important",
      textDecoration: "none",
    },
  },
  logo: {
    height: "32px",
    marginRight: "22px",
  },
}));
