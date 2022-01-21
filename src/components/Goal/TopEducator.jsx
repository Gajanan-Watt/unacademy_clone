import "./TopEducator.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { useDispatch } from "react-redux";
import { tutorData } from "../../store/action";
import { useNavigate } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const TopEducator = ({ name, topTut }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendTutorData = (tutor) => {
    dispatch(tutorData(tutor));
    navigate(`/goal/tutor/${tutor.name}`);
  };

  return (
    <div className="headDivtop">
      <h3 className="topheadedu">Prepare with Top Educators</h3>
      <p className="topheadedup">
        {" "}
        Access to India's best {name} educators is just a subscription away
      </p>
      <p className="See">See all</p>
      <Swiper
        slidesPerView={2.3}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <div className="tophead">
          {topTut.map((el) => (
            <SwiperSlide>
              <div onClick={() => sendTutorData(el)} className="sidebarflex">
                <div>
                  <img id="sideimg" src={el.img} alt="" />
                </div>
                <div>
                  <div className="dataname">
                    <h3>{el.name}</h3>
                    <p>{el.desc}</p>
                    <p>{el.teach}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
