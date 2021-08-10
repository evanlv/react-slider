import { useState } from "react";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

import "./Slider.css";

const Slider = () => {
  const [slideAnimation, setSlideAnimation] = useState({
    index: 1,
    inProgress: false,
  });

  const nextSlide = () => {
    if (
      slideAnimation.index !== dataSlider.length &&
      !slideAnimation.inProgress
    ) {
      setSlideAnimation({ index: slideAnimation.index + 1, inProgress: true });

      setTimeout(() => {
        setSlideAnimation({
          index: slideAnimation.index + 1,
          inProgress: false,
        });
      }, 400);
    } else if (
      slideAnimation.index === dataSlider.length &&
      !slideAnimation.inProgress
    ) {
      setSlideAnimation({ index: 1, inProgress: true });
      setTimeout(() => {
        setSlideAnimation({
          index: 1,
          inProgress: false,
        });
      }, 400);
    }
  };

  const previousSlide = () => {
    if (slideAnimation.index !== 1 && !slideAnimation.inProgress) {
      setSlideAnimation({ index: slideAnimation.index - 1, inProgress: true });

      setTimeout(() => {
        setSlideAnimation({
          index: slideAnimation.index - 1,
          inProgress: false,
        });
      }, 400);
    } else if (slideAnimation.index === 1 && !slideAnimation.inProgress) {
      setSlideAnimation({ index: 5, inProgress: true });
      setTimeout(() => {
        setSlideAnimation({
          index: 5,
          inProgress: false,
        });
      }, 400);
    }
  };
  const moveDot = (index) => {
    setSlideAnimation({ index: index, inProgress: false });
  };
  return (
    <div className="container-slider">
      {dataSlider.map((item, index) => {
        return (
          <div
            key={item.id}
            className={
              slideAnimation.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img src={`/Imgs/img${index + 1}.jpg`} alt="" />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={previousSlide} direction={"previous"} />

      <div className="container-dots">
        {dataSlider.map((item, index) => {
          return (
            <button
              key={item.id}
              className={
                slideAnimation.index === index + 1 ? " dot active" : "dot"
              }
              onClick={() => moveDot(index + 1)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
