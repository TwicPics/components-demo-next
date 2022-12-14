import React, { useEffect, useState } from "react";
import { TwicImg } from "@twicpics/components/react";
import styles from "./index.module.scss";

const timerDuration = 3000;
const Slideshow = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageReady, setImageReady] = useState(false);
  const [paused, setPaused] = useState(false);

  const onStateChange = (event) => {
    const { state } = event;
    setImageReady(state === `error` || state === `done`);
  };

  const updateIndex = (newIndex) => {
    let _newIndex = newIndex;
    if (newIndex < 0) {
      _newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      _newIndex = 0;
    }
    setActiveIndex(_newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused && imageReady) {
        updateIndex(activeIndex + 1);
      }
    }, timerDuration);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex, imageReady, paused]);

  return (
    <div
      className={styles["slideshow"]}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      <button
        className={`${styles[`slick-prev`]} ${styles[`slick-arrow`]}`}
        onClick={() => updateIndex(activeIndex - 1)}
        disabled={!imageReady}>
        &#8249;
      </button>
      <div className="twic-item">
        <div className={styles[`inner-container`]}>
          <div>
            <div
              className={styles["inner"]}
              style={{
                // eslint-disable-next-line no-magic-numbers
                transform: `translateX(-${activeIndex * 100}%)`,
              }}>
              {images.map((image, i) => (
                <div className={styles["item"]} key={i}>
                  <TwicImg
                    className={styles["responsive"]}
                    onStateChange={onStateChange}
                    src={image.url}
                    focus={image.focus}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ul className={styles["slick-dots"]}>
        {images.map((image, i) => (
          <li className={`${i === activeIndex ? `slick-active` : ``}`} key={i}>
            <button
              onClick={() => {
                updateIndex(i);
              }}
              disabled={!imageReady}></button>
          </li>
        ))}
      </ul>
      <button
        className={`${styles[`slick-next`]} ${styles[`slick-arrow`]}`}
        onClick={() => updateIndex(activeIndex + 1)}
        disabled={!imageReady}>
        &#8250;
      </button>
    </div>
  );
};

export default Slideshow;
