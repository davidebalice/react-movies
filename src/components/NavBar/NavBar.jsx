import {
  Brightness4,
  Brightness7,
  GitHub,
  GridView,
  Info,
  Menu,
} from "@mui/icons-material";
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_white.png";
import { setUser } from "../../features/auth";
import { createSessionId, moviesApi } from "../../utils";
import { ColorModeContext } from "../../utils/ToggleColorMode";
import InfoModal from "../Info/InfoModal";
import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";
import useStyles from "./navstyles";

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //const { isAuthenticated, user } = useSelector(userSelector);

  const [mobileOpen, setMobileOpen] = useState(false);

  const dispatch = useDispatch();
  const token = localStorage.getItem("request_token");
  const sessionIdFromLocalStorage = localStorage.getItem("session_id");
  const colorMode = useContext(ColorModeContext);

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );
          dispatch(setUser(userData));
        }
      }
    };
    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <InfoModal open={open} handleClose={handleClose}/>
          <img src={logo} alt="davide balice logo" className={classes.logo} />
          <div className={classes.buttons}>
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              component={Link}
              to={`/`}
              className={classes.homeButton}
            >
              <GridView />
            </IconButton>
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu style={{ fontSize: "34px", maxWidth: "30px" }} />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={colorMode.toggleColorMode}
              className={classes.homeButton}
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => {
                handleOpen();
              }}
              className={classes.homeButton}
            >
              <Info />
            </IconButton>
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              href="https://github.com/davidebalice/react-movies"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.homeButton}
            >
              <GitHub />
            </IconButton>
          </div>

          {!isMobile && <Search />}

          {/*
           <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <> {user.username} &nbsp; </>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile Image"
                  src={`https://www.themoviedb.org/t/p/w64_and_h64_face${user?.avatar?.tmdb?.avatar_path}`}
                />
              </Button>
            )}
          </div>
          */}

          {isMobile && <Search />}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{ keepMounted: true }}
      >
        <Sidebar setMobileOpen={setMobileOpen} />
      </Drawer>
    </>
  );
};

export default NavBar;
