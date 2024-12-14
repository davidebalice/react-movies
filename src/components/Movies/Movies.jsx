import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import { useGetMoviesQuery } from "../../services/TMDB";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";
import MovieList from "../MovieList/MovieList";
import MoviePagination from "../Pagination/Pagination";
import CategoriesMovie from "../CategoriesMovie/Categories";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });
  console.log(data);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No Moveis That Match the name <br />
          Please search for somthing ele
        </Typography>
      </Box>
    );
  }

  if (error) return "An Error Has Occured.";

  return (
    <div>
      <FeaturedMovie movie={data.results[0]} />

      <CategoriesMovie movies={data} />
      <MovieList movies={data} />
      <MoviePagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_page}
      />
    </div>
  );
};

export default Movies;
