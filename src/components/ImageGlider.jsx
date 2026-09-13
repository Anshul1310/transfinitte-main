import { useEffect, useRef, useState } from "react";
import { adwaith, anand, anirudh, ayush, mudit } from "../assets";

const images = [
  { src: adwaith, alt: "TransfiNITTe archive image", label: "sector 04 - team signal, active" },
  { src: anand, alt: "TransfiNITTe archive image", label: "sector 11 - strategy node, verified" },
  { src: anirudh, alt: "TransfiNITTe archive image", label: "sector 22 - systems cluster, indexed" },
  { src: ayush, alt: "TransfiNITTe archive image", label: "sector 07 - creative node, active" },
  { src: mudit, alt: "TransfiNITTe archive image", label: "sector 15 - signal archive, dense" },
];

const ImageGlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [caption, setCaption] = useState("");
  const [isWiping, setIsWiping] = useState(false);
  const [autoState, setAutoState] = useState("ON");
  const pauseTimer = useRef(null);

  const goTo = (nextIndex) => {
    if (nextIndex === activeIndex) return;
    setIsWiping(false);
    requestAnimationFrame(() => {
      setIsWiping(true);
      setActiveIndex(nextIndex);
    });
  };

  const changeSlide = (direction) => {
    goTo((activeIndex + direction + images.length) % images.length);
  };

  useEffect(() => {
    setCaption("");
    let characterIndex = 0;
    const typeTimer = setInterval(() => {
      characterIndex += 1;
      setCaption(images[activeIndex].label.slice(0, characterIndex));
      if (characterIndex >= images[activeIndex].label.length) clearInterval(typeTimer);
    }, 16);

    return () => clearInterval(typeTimer);
  }, [activeIndex]);

  useEffect(() => {
    const timer = setInterval(() => changeSlide(1), 4200);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const pauseAuto = () => {
    setAutoState("PAUSED");
    clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setAutoState("ON"), 6000);
  };

  return (
    <div className="mx-auto max-w-[92%] md:max-w-[95%] xl:max-w-[93.194%] bg-[#FFFFFF] dark:bg-black border-l border-r border-l-edge border-r-edge transition-colors duration-300">
      <section className="image-glider" aria-label="TransfiNITTe visual archive">
        <div className="image-glider-header">
          <span>ARCHIVE / VISUAL</span>
          <span className="image-glider-index">{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
        </div>
      <div className={`image-glider-frame ${isWiping ? "is-wiping" : ""}`}>
        <div className="image-glider-scanbar" aria-hidden="true" />
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`image-glider-slide ${index === activeIndex ? "is-active" : ""}`}
            aria-hidden={index !== activeIndex}
          />
        ))}
        <div className="image-glider-scanlines" aria-hidden="true" />
        <div className="image-glider-vignette" aria-hidden="true" />
        <span className="image-glider-bracket tl" aria-hidden="true" />
        <span className="image-glider-bracket tr" aria-hidden="true" />
        <span className="image-glider-bracket bl" aria-hidden="true" />
        <span className="image-glider-bracket br" aria-hidden="true" />
        <button type="button" className="image-glider-nav prev" onClick={() => { changeSlide(-1); pauseAuto(); }} aria-label="Previous archive image">&lsaquo;</button>
        <button type="button" className="image-glider-nav next" onClick={() => { changeSlide(1); pauseAuto(); }} aria-label="Next archive image">&rsaquo;</button>
      </div>
      <div className="image-glider-caption" aria-live="polite">
        {caption}<span className="image-glider-cursor" aria-hidden="true" />
      </div>
      <div className="image-glider-ticks">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`image-glider-tick ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => { goTo(index); pauseAuto(); }}
              aria-label={`Show archive image ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            ><span /></button>
          ))}
      </div>
      <div className="image-glider-footer">
        <span>AUTO-CYCLE <strong>{autoState}</strong></span>
        <span>CLICK TICK TO JUMP</span>
      </div>
    </section>
    </div>
  );
};

export default ImageGlider;
