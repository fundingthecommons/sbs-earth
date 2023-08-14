import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Section } from "../section";
import { FaIcon } from "../icons/fa-icon";

const Pin = ({
  top = 0,
  left = 0,
  city = "",
  onMouseEnter,
  onMouseLeave,
  onClick,
  isHovered,
}) => {
  const styles = {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-50%, -50%)`,
  };
  return (
    <div
      className="absolute w-6 h-8 cursor-pointer"
      style={styles}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <img
        src="./sbs-earth/pin-shadow.png"
        className="absolute -bottom-1 w-full"
      />
      {isHovered && (
        <>
          <p className="absolute z-40 -top-6 left-1/2 transform -translate-x-1/2 mg-card-title text-center w-80">
            {city}
          </p>
          <img src="./sbs-earth/pin-white.svg" width="24" height="32" />
        </>
      )}
      {!isHovered && (
        <img src="./sbs-earth/pin-blue.svg" width="24" height="32" />
      )}
    </div>
  );
};

const Card = ({ data, onMouseEnter, onMouseLeave, onClick, isHovered }) => {
  return (
    <div
      className={`relative flex-none flex-col w-1/5 mx-px h-full cursor-pointer`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {isHovered && (
        <>
          <div className="absolute inset-0 z-20 border border-white" />
          <div className="absolute inset-0 bg-white opacity-20" />
        </>
      )}
      {data.image?.src && (
        <div className={`relative z-10 h-30`}>
          <img
            className={`w-full h-full object-cover`}
            alt={data.image.alt || data.headline}
            src={data.image.src}
          />
        </div>
      )}
      <div className={`flex-1 h-full bg-accent4 text-white mg-card-title p-3`}>
        <h3 className="mg-copy-small leading-snug mb-0">{data.title}</h3>
        <h4 className="mg-copy-small leading-snug mb-0">{data.city}</h4>
        <p>{data.description}</p>
        <div>
          {data.link && (
            <a href={data.link} className="">
              <span>Link</span>
            </a>
          )}
        </div>
        <p className="mg-copy-footer">{data.time}</p>
      </div>
    </div>
  );
};

export const VideoPlayer = ({ data }) => {
  const [hovered, setHovered] = useState(null);
  const [video, setVideo] = useState(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    loop: true,
  });

  useEffect(() => {
    if (emblaApi) emblaApi.reInit({});
  }, [emblaApi]);

  const pinHover = (index) => {
    if (index !== null) {
      setHovered(index);
      scrollTo(index);
    } else {
      setHovered(null);
    }
  };

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={`relative max-w-site-full mx-auto py-10 px-10`}>
        <div className="relative">
          <img src="./sbs-earth/map.svg" alt="map" className="w-full" />
          {data.items &&
            data.items.map(function (block, index) {
              return (
                <Pin
                  key={index}
                  top={block.top}
                  left={block.left}
                  city={block.city}
                  isHovered={hovered === index}
                  onMouseEnter={() => {
                    pinHover(index);
                  }}
                  onMouseLeave={() => {
                    pinHover(null);
                  }}
                  onClick={() => {
                    setVideo(block.video);
                  }}
                />
              );
            })}
        </div>
        <div className="relative">
          <div className={`embla overflow-hidden`} ref={emblaRef}>
            <div className="embla__container flex">
              {data.items &&
                data.items.map(function (block, index) {
                  return (
                    <Card
                      key={index}
                      data={block}
                      isHovered={hovered === index}
                      onMouseEnter={() => {
                        setHovered(index);
                      }}
                      onMouseLeave={() => {
                        setHovered(null);
                      }}
                      onClick={() => {
                        setVideo(block.video);
                      }}
                    />
                  );
                })}
            </div>
          </div>
          <div className="embla__buttons">
            <button
              className="w-10 absolute top-0 -left-10 bottom-0 text-white z-50"
              onClick={scrollPrev}
            >
              <div className="absolute inset-0 bg-white opacity-20 hover:opacity-40 transition-all" />
              <div className="w-4 mx-auto relative z-10 text-white">
                <svg
                  width="12"
                  height="15"
                  viewBox="0 0 12 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-3.51448e-07 7.96004L12 0.997024L12 14.9231L-3.51448e-07 7.96004Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
            <button
              className="w-10 absolute top-0 -right-10 bottom-0 text-white z-50"
              onClick={scrollNext}
            >
              <div className="absolute inset-0 bg-white opacity-20 hover:opacity-40 transition-all" />
              <div className="w-4 mx-auto relative z-10 text-white">
                <svg
                  width="12"
                  height="15"
                  viewBox="0 0 12 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 7.03996L-6.55812e-07 14.003L-4.70852e-08 0.0769381L12 7.03996Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      {video && (
        <div className="absolute z-50 inset-0">
          <div
            className="fixed inset-0 bg-black opacity-80"
            onClick={() => {
              setVideo(null);
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ width: "1000px", height: "563px" }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video}`}
              title="YouTube video player"
              frame-border="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allow-fullscreen
            ></iframe>
          </div>
        </div>
      )}
    </Section>
  );
};
