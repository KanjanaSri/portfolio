import React, { useRef, useCallback } from "react";
import { FaReact } from "react-icons/fa";
import { PiFileCssLight } from "react-icons/pi";
import { SiTailwindcss, SiRedux, SiReactrouter } from "react-icons/si";
import { project1, project2, project3, project4, project5 } from "../images";
import ProjectCard from "./ProjectCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App.css";

// import required modules
import { Keyboard, EffectCoverflow, Pagination } from "swiper/modules";

export default function Projects() {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div id="projects" className="px-5">
      <h1 className="text-xl sm:text-3xl text-center py-8  dark:text-zinc-100 ">
        Portfolio Projects
      </h1>
      <Swiper
        ref={sliderRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={window.innerWidth < 840 ? 1 : "auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Keyboard, EffectCoverflow, Pagination]}
        className="swiper-container"
      >
        {/* PROJECT 1 */}
        <SwiperSlide>
          <ProjectCard
            image={project1}
            name={"Online Store"}
            icons={
              <div className="text-2xl md:text-3xl flex justify-center gap-3">
                <SiTailwindcss />
                <FaReact />
                <SiReactrouter />
                <SiRedux />
              </div>
            }
            descriotion='Products will be fetching from "fakeStoreApi", and can be sorted by category. Users can interact with the shoping cart and sidebar. They can also view product details on detail page. Please feel free to take a look at'
            netlifyUrl={"https://bzhive.netlify.app/"}
            githubUrl={"https://github.com/KanjanaSri/BzHive"}
          />
        </SwiperSlide>
        {/* PROJECT 2 */}
        <SwiperSlide>
          <ProjectCard
            image={project2}
            name={"Find Recipes"}
            icons={
              <div className="text-2xl md:text-3xl flex justify-center gap-3">
                <SiTailwindcss />
                <FaReact />
                <SiReactrouter />
                <SiRedux />
              </div>
            }
            descriotion='This application allows user to search for food recipes. User can click to see ingredients and instructions on detail page. Data will be fetching from "themealdbApi". Please feel free to take a look at'
            netlifyUrl={"https://cast-iron.netlify.app/"}
            githubUrl={"https://github.com/KanjanaSri/cast-iron"}
          />
        </SwiperSlide>
        {/* PROJECT 3 */}
        <SwiperSlide>
          <ProjectCard
            image={project3}
            name={"Movie Previews"}
            icons={
              <div className="text-2xl md:text-3xl flex justify-center gap-3">
                <FaReact />
                <SiReactrouter />
                <SiTailwindcss />
              </div>
            }
            descriotion="This is a movie previews app, where users can browse through the app to see all the latest movies. Users can click to see movie details, and they are able to save the movie to their save list. Please feel free to take a look at"
            netlifyUrl={"https://my-movie-box.netlify.app/"}
            githubUrl={"https://github.com/KanjanaSri/movie-box"}
          />
        </SwiperSlide>
        {/* PROJECT 4 */}
        <SwiperSlide>
          <ProjectCard
            image={project4}
            name={"Spotify Playlist"}
            icons={
              <div className="text-2xl md:text-3xl flex justify-center gap-3">
                <FaReact />
                <PiFileCssLight />
              </div>
            }
            descriotion="This application allows user to search and add songs to a new playlist. Then they can save the playlist to their spotify account. User will need to sign in to Spotify account through the app. Please feel free to take a look at"
            netlifyUrl={"https://my-spotify-list.netlify.app/"}
            githubUrl={"https://github.com/KanjanaSri/jamming-spotify"}
          />
        </SwiperSlide>
        {/* PROJECT 5 */}
        <SwiperSlide>
          <ProjectCard
            image={project5}
            name={"Furniture Shop"}
            icons={
              <div className="text-2xl md:text-3xl flex justify-center gap-3">
                <FaReact />
                <SiTailwindcss />
              </div>
            }
            descriotion="A static furniture website homepage with stunning designs. This website features a user-friendly visual interface and aims to satisfy the best user experience. Please feel free to take a look at"
            netlifyUrl={"https://le-confortable.netlify.app/"}
            githubUrl={"https://github.com/KanjanaSri/the-comfortable"}
          />
        </SwiperSlide>

        {/* CONTROLER */}
        <div className="flex justify-center items-center w-[200px] py-10 mx-auto relative">
          <div onClick={handlePrev} className="swiper-button-prev"></div>

          <div className="swiper-pagination -z-10 mb-4"></div>

          <div onClick={handleNext} className="swiper-button-next"></div>
        </div>
      </Swiper>
    </div>
  );
}
