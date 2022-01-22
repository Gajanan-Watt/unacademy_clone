import React from "react";
import "../payment/payment.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function ImageShow() {
  return (
    <>
      <div className="righthand--imgcontainer">
        <div className="right--img--container">
          <span className="right--slideImages">
            <AliceCarousel autoPlay={true} autoPlayInterval="1000">
              <img
                src={
                  "https://static.uacdn.net/web-cms/chat_with_educator_6cb3c64761.svg?q=75&amp;w=1000&amp;fm=webp"
                }
                className="slide--img"
                alt="img"
              />

              <img
                src={
                  "https://static.uacdn.net/web-cms/daily_live_classes_be8fa5af21.svg?q=75&w=1000&fm=webp"
                }
                className="sliderimg"
                alt="img"
              />
              <img
                src={
                  "https://static.uacdn.net/web-cms/chat_with_educator_6cb3c64761.svg?q=75&w=1000&fm=webp"
                }
                className="sliderimg"
                alt="img"
              />
            </AliceCarousel>
          </span>
        </div>
      </div>
    </>
  );
}

export default ImageShow;
