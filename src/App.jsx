import { CssBaseline } from "@mui/material";
import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Actors from "./components/Actors/Actors";
import Footer from "./components/Footer/Footer";
import MovieInformation from "./components/MovieInformation/MovieInformation";
import Movies from "./components/Movies/Movies";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.container}>
            <Routes>
              <Route path="/movie/:id" element={<MovieInformation />} />
              <Route path="/" element={<Movies />} />
              <Route path="/approved" element={<Movies />} />
              <Route path="/actors/:id" element={<Actors />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
