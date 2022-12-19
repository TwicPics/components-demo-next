/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

export const TwicWrapper = ({ gitHubUrl, children }) => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const WebFont = require(`webfontloader`);
    WebFont.load({
      google: {
        families: [`Montserrat:400,600,700`],
      },
    });
  }, []);
  const frameworkLogo = `https://assets.twicpics.com/demo/@twicpics-components/logos/next.png`;
  const documentationUrl = `https://www.twicpics.com/docs/components/react?utm_source=github&utm_medium=organic&utm_campaign=components`;
  const GITHUB = `https://github.com/TwicPics/components-demo-next`;
  const ONLINE_URL = `https://stackblitz.com/edit/github-wpprt7?file=`;
  const onlineUrl = `${ONLINE_URL}${gitHubUrl || "README.md"}`;
  const gitHubRedirect = gitHubUrl ? `${GITHUB}/blob/main/${gitHubUrl}` : GITHUB;
  return (
    <div>
      <header id={styles["twic-header"]}>
        <Link href="/">
          <h1 className={styles["heading-primary"]}>
            <img
              className={styles["twicpics-logo"]}
              src="https://assets.twicpics.com/demo/@twicpics-components/logos/twicpics.svg"
              alt="TwicPics logo"
            />
            <span>x</span>
            <img
              className={styles["framework-logo"]}
              src={frameworkLogo}
              alt="React Logo"
            />
          </h1>
        </Link>
        <div className={styles["ribbon"]}>
          <div>
            <a
              target="_blank"
              href={gitHubRedirect}
              rel="noreferrer"
              title="Open in Github">
              <img src="/assets/github-mark-white.svg" alt="Open in Github" />
            </a>
            <a
              target="_blank"
              href={onlineUrl}
              rel="noreferrer"
              title="Open in StackBlitz">
              <img src="/assets/stackblitz.svg" alt="Open in StackBlitz" />
            </a>
          </div>
        </div>
        <div className={styles["tags-container"]}>
          <div className={styles["tag"]}>@twicpics-components</div>
          <a
            href={documentationUrl}
            target="_blank"
            className={`${styles["tag"]} ${styles["documentation-link"]} ${styles["tag--bg-purple-rain"]}`}
            rel="noreferrer">
            Documentation
          </a>
        </div>
      </header>
      <main id={styles["twic-demo-container"]}>{children}</main>
    </div>
  );
};
