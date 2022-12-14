import React, { useState } from "react";
import Modal from "./modal";
import { TwicAbstract } from "../../components/demo-wrapper/twicAbstract";
import { TwicWrapper } from "../../components/demo-wrapper/twicWrapper";
import { TwicImg } from "@twicpics/components/react";
import styles from "./index.module.scss";

const images = [
  {
    url: `components/modal/seagull.jpg`,
    caption: `seagulls`,
  },
  {
    url: `components/modal/shell.jpg`,
    caption: `shell`,
  },
  {
    url: `components/modal/jelly-fish.jpg`,
    caption: `jelly fish`,
  },
  {
    url: `components/modal/turtle.jpg`,
    caption: `turtle`,
  },
];

const TwicModal = () => {
  const [idModalToOpen, setIdModalToOpen] = useState(null);

  const openModal = (_idModalToOpen) => {
    setIdModalToOpen(_idModalToOpen);
  };

  const closeModal = () => {
    setIdModalToOpen(null);
  };

  return (
    <div id={styles["twic-modal-container"]}>
      <TwicWrapper gitHubUrl="src/lib/twicModal/index.jsx">
        <TwicAbstract title="A modal revealer">
          <p>Click on the image of your choice to reveal a modal.</p>
        </TwicAbstract>
        <div className="twic-grid">
          {images.map((image, i) => (
            <div key={i}>
              <figure
                className={`twic-item ${styles["poster-wrapper"]}`}
                onClick={() => openModal(i)}>
                <TwicImg src={image.url} focus="auto" ratio="0.95"></TwicImg>
                <figcaption>
                  <p>Click</p>
                </figcaption>
              </figure>
              <Modal
                show={i === idModalToOpen}
                onClose={closeModal}
                image={image}></Modal>
            </div>
          ))}
        </div>
      </TwicWrapper>
    </div>
  );
};

export default TwicModal;
