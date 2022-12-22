import React, { useState } from "react";
import { Code } from "../../components/code";
import { TwicAbstract } from "../../components/demo-wrapper/twicAbstract";
import { TwicWrapper } from "../../components/demo-wrapper/twicWrapper";
import { TwicImg, TwicView } from "@twicpics/components/react";
import styles from "./index.module.scss";

const images = [
  {
    url: `components/bulk-loading/pool-1.jpg`,
  },
  {
    url: `components/bulk-loading/pool-2.jpg`,
  },
  {
    url: `components/bulk-loading/pool-3.jpg`,
  },
  {
    url: `components/bulk-loading/pool-4.jpg`,
  },
  {
    url: `components/bulk-loading/pool-5.jpg`,
  },
];

const TwicBulkLoading = () => {
  const [current, setCurrent] = useState(2);
  const [last, setLast] = useState(1);
  const [penultimate, setPenultimate] = useState(0);

  const changeImage = () => {
    setCurrent((current + 1) % images.length);
    setLast((last + 1) % images.length);
    setPenultimate((penultimate + 1) % images.length);
  };

  return (
    <>
      <TwicWrapper filename="pages/bulk-loading/index.jsx">
        <TwicAbstract title="Bulk loading">
          <p>
            With<Code>TwicImg</Code>and<Code>TwicVideo</Code>your medias will
            only start loading when they come into the viewport.
          </p>
          <p>
            But sometimes you may want to load multiple assets in bulk instead
            of lazy loading them.
          </p>
          <p>
            This is where<Code>TwicView</Code>comes into play.
          </p>
          <p>
            The<Code>TwicView</Code>components eager loads all of his
            <Code>TwicImg</Code>and&nbsp;
            <Code>TwicVideo</Code>children as soon as<Code>TwicView</Code>comes
            into the viewport (depending on your anticipation settings).
          </p>
          <p>
            See also the&nbsp;
            <a href="/eager" target="_blank" rel="noreferrer">
              eager property
            </a>
            &nbsp; that disables lazy loading for a given media.
          </p>
        </TwicAbstract>
        <TwicView>
          <div className={styles["polaroids"]} onClick={changeImage}>
            <div
              className={`${styles["polaroid"]} ${styles["bottom"]} ${
                current % 2 === 0 && styles["left"]
              }`}>
              <TwicImg src={images[penultimate].url} />
            </div>
            <div
              className={`${styles["polaroid"]} ${styles["bottom"]} ${
                styles["previous"]
              } ${(current - 1) % 2 === 0 && styles["left"]}`}>
              <TwicImg src={images[last].url} />
            </div>
            {images.map((image, i) => (
              <div
                className={`${styles["polaroid"]} ${
                  i === current && styles["top"]
                } ${i % 2 == 0 && styles["left"]}`}
                key={i}>
                <TwicImg src={image.url} />
              </div>
            ))}
          </div>
        </TwicView>
      </TwicWrapper>
    </>
  );
};

export default TwicBulkLoading;
