import { useEffect, useState } from "react";
import { adwaith, anand, anirudh, ayush, mudit } from "../assets";

const images = [
  { src: adwaith, alt: "TransfiNITTe archive image", label: "sector 04 - team signal, active" },
  { src: anand, alt: "TransfiNITTe archive image", label: "sector 11 - strategy node, verified" },
  { src: anirudh, alt: "TransfiNITTe archive image", label: "sector 22 - systems cluster, indexed" },
  { src: ayush, alt: "TransfiNITTe archive image", label: "sector 07 - creative node, active" },
  { src: mudit, alt: "TransfiNITTe archive image", label: "sector 15 - signal archive, dense" },
];

const ImageGlider = () => {
  const [activeIndex, setActiveIndex] = useState(images.length);
  const [isResetting, setIsResetting] = useState(false);
  const slides = [...images, ...images, ...images];

  useEffect(() => {
    const timer = setInterval(() => setActiveIndex((index) => index + 1), 4200);
    return () => clearInterval(timer);
  }, []);

  const resetLoop = () => {
    if (activeIndex < images.length || activeIndex >= images.length * 2) {
      return (
        <div className="mx-auto max-w-[92%] md:max-w-[95%] xl:max-w-[93.194%] bg-[#FFFFFF] dark:bg-black border-l border-r border-l-edge border-r-edge transition-colors duration-300">
          <section className="image-glider" aria-label="TransfiNITTe visual archive">
            <div className="image-glider-header">
              <span>ARCHIVE / VISUAL</span>
              <span className="image-glider-index">{String(activeIndex % images.length + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
            </div>
            <div className="image-glider-frame">
              <div
                className={`image-glider-track${isResetting ? " is-resetting" : ""}`}
                style={{ transform: `translateX(-${activeIndex * (100 / slides.length)}%)` }}
                onTransitionEnd={resetLoop}
              >
                {slides.map((image, index) => (
                  <img key={`${image.src}-${index}`} src={image.src} alt={image.alt} className="image-glider-slide" />
                ))}
              </div>
            </div>
          </section>
        </div>
      );
        <span>AUTO-CYCLE <strong>{autoState}</strong></span>
        <span>CLICK TICK TO JUMP</span>
      </div>
    </section>
    </div>
  );
};

export default ImageGlider;
