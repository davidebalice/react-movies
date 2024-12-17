import { Box, CircularProgress } from "@mui/material";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetGenresQuery } from "../../services/TMDB";
import CategoryCard from "../CategoriesMovie/CategoryCard";

const categories = [
  { name: "Popular", value: "popular" },
  { name: "Top Rated", value: "top_rated" },
  { name: "Upcoming", value: "upcoming" },
];

const Categories = () => {
  const { data, isFetching } = useGetGenresQuery();

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
        spaceBetween={40}
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
        {categories.map(({ value, name, i }) => (
          <SwiperSlide key={value.id}>
            <CategoryCard key={i} value={value} name={name} i={i} type="category" id={null}/>
          </SwiperSlide>
        ))}

        {data &&
          data.genres.map(({ name, i, id }) => (
            <SwiperSlide key={i}>
              <CategoryCard key={i} value={name} i={i} type="genre" id={id}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};

export default Categories;
