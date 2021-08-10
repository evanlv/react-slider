import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

const BtnSlider = (props) => {
  const { direction, moveSlide } = props;

  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide previous"}
    >
      <img
        src={direction === "next" ? rightArrow : leftArrow}
        alt="arrow icon"
      />
    </button>
  );
};
export default BtnSlider;
