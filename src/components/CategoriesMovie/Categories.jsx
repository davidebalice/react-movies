import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetMoviesQuery } from "../../services/TMDB";
import Movie from "../Movie/Movie";
import CategoryCard from "../Movie/Movie";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const Categories = () => {
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

 

  return (
    <Box sx={{ maxWidth: "100%", padding: 2 }}>
      <Swiper
        slidesPerView={6}
        spaceBetween={16}
        navigation={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          978: {
            slidesPerView: 4,
          },
          1523: {
            slidesPerView: 5,
          },
          1524: {
            slidesPerView: 6,
          },
        }}
      >
        
        
        
        
        
        {categories.map(({ label, i }) => (
           <SwiperSlide key={label.id}>
           <CategoryCard key={i} movie={label} i={i} />
         </SwiperSlide>
        ))}
        
        
        
        
        
        
        
        
        
        
        
        
        
        {data &&
          data.results.map((movie, i) => (
            <SwiperSlide key={movie.id}>
              <Movie key={i} movie={movie} i={i} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};

export default Categories;
