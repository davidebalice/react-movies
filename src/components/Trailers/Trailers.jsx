import { Box, Grid, Grow, Modal } from "@mui/material";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import play from "../../assets/images/play.png";
import useStyles from "./trailersstyles";

const Trailers = ({ trailers }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [videoKey, setVideoKey] = useState("");
  const handleOpen = (key) => {
    setVideoKey(key);
    setOpen(true);
  };
  //const handleClose = () => setOpen(false);

  return (
    <>
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
          {trailers.map((trailer, i) => (
            <SwiperSlide key={trailer.id}>
              {/*
              <iframe
                  key={trailer.id}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title={trailer.name}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                ></iframe>
            */}

              <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Grow in key={i} timeout={(i + 1) * 250}>
                  <div
                    className={classes.container}
                    style={{
                      backgroundImage: `url('https://i.ytimg.com/vi/${trailer.key}/hqdefault.jpg')`,
                    }}
                    onClick={() => {
                      handleOpen(trailer.key);
                    }}
                  >
                    <div className={classes.overlay}>
                      <div className={classes.name}></div>
                      <img
                        src={play}
                        className={classes.play}
                        alt="play button"
                      />
                       <div className={classes.name}>{trailer.name}</div>
                    </div>
                  </div>
                </Grow>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Modal
        closeAfterTransition
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {videoKey ? (
          <iframe
            autoPlay
            className={classes.video}
            title="Trailer"
            src={`https://www.youtube.com/embed/${videoKey}`}
            allow="autoPlay"
          ></iframe>
        ) : (<>no trailer loaded</>)}
      </Modal>
    </>
  );
};

export default Trailers;
