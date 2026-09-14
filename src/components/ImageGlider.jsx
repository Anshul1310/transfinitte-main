import { useEffect, useState } from "react";
import archive01 from "../assets/images/archive-01.jpg";
import archive02 from "../assets/images/archive-02.jpg";
import archive03 from "../assets/images/archive-03.jpg";
import archive04 from "../assets/images/aboutus.jpeg";
import archive05 from "../assets/images/archive-05.jpg";
import archive06 from "../assets/images/archive-06.jpg";

const images = [
  {
    src: archive01,
    alt: "TransfiNITTe archive image",
    label: "sector 04 - team signal, active",
  },
  {
    src: archive02,
    alt: "TransfiNITTe archive image",
    label: "sector 11 - strategy node, verified",
  },
  {
    src: archive03,
    alt: "TransfiNITTe archive image",
    label: "sector 22 - systems cluster, indexed",
  },
  {
    src: archive04,
    alt: "TransfiNITTe archive image",
    label: "sector 07 - creative node, active",
  },
  {
    src: archive05,
    alt: "TransfiNITTe archive image",
    label: "sector 15 - signal archive, dense",
  },
  {
    src: archive06,
    alt: "TransfiNITTe archive image",
    label: "sector 19 - hall record, live",
  },
];

const ImageGlider = () => {
  const [activeIndex, setActiveIndex] = useState(images.length);
  const [isResetting, setIsResetting] = useState(false);

  const slides = [...images, ...images, ...images];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((index) => index + 1);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const resetLoop = () => {
    if (
      activeIndex < images.length ||
      activeIndex >= images.length * 2
    ) {
      setIsResetting(true);

      setActiveIndex(
        images.length + (activeIndex % images.length)
      );

      requestAnimationFrame(() => {
        setIsResetting(false);
      });
    }
  };

  const goNext = () => {
    setActiveIndex((index) => index + 1);
  };

  const goPrevious = () => {
    setActiveIndex((index) => index - 1);
  };

  const currentImage =
    images[activeIndex % images.length];

  return (
    <div className="mx-auto max-w-[92%] md:max-w-[95%] xl:max-w-[93.194%] bg-[#FFFFFF] dark:bg-black border-l border-r border-l-edge border-r-edge transition-colors duration-300">

      <section
        className="image-glider"
        aria-label="TransfiNITTe visual archive"
      >

        {/* HEADER */}
        <div className="image-glider-header">
          <span>ARCHIVE / VISUAL</span>

          <span className="image-glider-index">
            {String((activeIndex % images.length) + 1).padStart(2, "0")}
            {" / "}
            {String(images.length).padStart(2, "0")}
          </span>
        </div>

        {/* IMAGE AREA */}
        <div className="image-glider-frame">

          <div
            className={`image-glider-track${
              isResetting ? " is-resetting" : ""
            }`}
            style={{ "--slide-index": activeIndex }}
            onTransitionEnd={resetLoop}
          >
            {slides.map((image, index) => (
              <img
                key={`${image.src}-${index}`}
                src={image.src}
                alt={image.alt}
                className="image-glider-slide"
              />
            ))}
          </div>

          {/* MOBILE BUTTONS */}
          <div className="image-glider-mobile-controls">

            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous image"
              className="image-glider-button"
            >
              ←
            </button>

            <span className="image-glider-mobile-label">
              {currentImage.label}
            </span>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="image-glider-button"
            >
              →
            </button>

          </div>

        </div>

      </section>
    </div>
  );
};

export default ImageGlider;