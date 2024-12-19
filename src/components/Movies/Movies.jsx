import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useGetMoviesQuery } from "../../services/TMDB";
import CategoriesMovie from "../CategoriesMovie/Categories";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";
import MovieList from "../MovieList/MovieList";
import MoviePagination from "../Pagination/Pagination";
import Trailers from "../Trailers/Trailers";

const Movies = () => {
  const [numberOfMovies, setNumberOfMovies] = useState(20);
  const [movieIds, setMovieIds] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [trailerLoading, setTrailerLoading] = useState(true);
  const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
  const { data: moviesData } = useGetMoviesQuery({ page: 1 });

  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  const getTrailers = async () => {
    const trailerPromises = movieIds.slice(0, 10).map((id) => {
      return axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${tmdbApiKey}`
        )
        .then((response) => {
          const firstTrailer = response.data.results[0];
          return firstTrailer
            ? {
                id: firstTrailer.id,
                key: firstTrailer.key,
                name: firstTrailer.name,
                site: firstTrailer.site,
              }
            : null;
        })
        .catch((error) => ({
          movieId: id,
          trailers: [],
        }));
    });

    try {
      const trailersData = await Promise.all(trailerPromises);
      setTrailers(trailersData);
    } catch (error) {
      console.error("Error fetching trailers:", error);
    } finally {
      setTrailerLoading(false);
    }
  };

  useEffect(() => {
    if (moviesData) {
      const ids = moviesData.results.map((movie) => movie.id);
      setMovieIds(ids);
    }
  }, [moviesData]);

  useEffect(() => {
    if (movieIds.length >= 1 && trailerLoading) {
      getTrailers();
    }
  }, [movieIds]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1556) {
        setNumberOfMovies(18);
      } else if (width >= 1200) {
        setNumberOfMovies(20);
      } else if (width >= 768) {
        setNumberOfMovies(18);
      } else {
        setNumberOfMovies(20);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" minHeight={"100vh"}>
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">Movies not found</Typography>
      </Box>
    );
  }

  console.log(trailers);

  if (error) return "An Error Has Occured.";

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide key="featured0">
          <FeaturedMovie movie={data.results[0]} />
        </SwiperSlide>
        <SwiperSlide key="featured1">
          <FeaturedMovie movie={data.results[1]} />
        </SwiperSlide>
        <SwiperSlide key="featured2">
          <FeaturedMovie movie={data.results[2]} />
        </SwiperSlide>
        <SwiperSlide key="featured3">
          <FeaturedMovie movie={data.results[3]} />
        </SwiperSlide>
        <SwiperSlide key="featured4">
          <FeaturedMovie movie={data.results[4]} />
        </SwiperSlide>
      </Swiper>
      <CategoriesMovie movies={data} />
      <MovieList movies={data} numberOfMovies={numberOfMovies} />
      <Trailers trailers={trailers} />
      
      <MoviePagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_page}
      />
    </div>
  );
};

export default Movies;