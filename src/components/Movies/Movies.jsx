import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "swiper/css";
import "swiper/css/navigation";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useGetMoviesQuery } from "../../services/TMDB";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";
import MovieList from "../MovieList/MovieList";
import MoviePagination from "../Pagination/Pagination";
import CategoriesMovie from "../CategoriesMovie/Categories";

const Movies = () => {
  const [numberOfMovies, setNumberOfMovies] = useState(20);
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

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
        <SwiperSlide key="featured1">
          <FeaturedMovie movie={data.results[0]} />
        </SwiperSlide>
        <SwiperSlide key="featured2">
          <FeaturedMovie movie={data.results[1]} />
        </SwiperSlide>
        <SwiperSlide key="featured3">
          <FeaturedMovie movie={data.results[2]} />
        </SwiperSlide>
        <SwiperSlide key="featured4">
          <FeaturedMovie movie={data.results[3]} />
        </SwiperSlide>
      </Swiper>
      <CategoriesMovie movies={data} />
      <MovieList movies={data} numberOfMovies={numberOfMovies} />
      <MoviePagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_page}
      />
    </div>
  );
};

export default Movies;
