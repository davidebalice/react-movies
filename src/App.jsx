import { CssBaseline } from "@mui/material";
import React, { useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseAlan from "./Alan";
import Actors from "./components/Actors/Actors";
import MovieInformation from "./components/MovieInformation/MovieInformation";
import Movies from "./components/Movies/Movies";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  const [navBar, setNavBar] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <div
        onClick={() => setNavBar(!navBar)}
        style={{ position: "absolute", zIndex: "20000" }}
      >
        sdfsdfsdfsdf
      </div>

      <BrowserRouter>
        <NavBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes>
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/" element={<Movies />} />
            <Route path="/approved" element={<Movies />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </main>
        <div ref={alanBtnContainer} />
        <UseAlan />
      </BrowserRouter>
    </div>
  );
};

export default App;
