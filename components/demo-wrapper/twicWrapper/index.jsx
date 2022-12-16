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
  const logoSrc = `https://assets.twicpics.com/demo/@twicpics-components/logos/next.png`;
  const redirect = `https://www.twicpics.com/docs/components/react?utm_source=github&utm_medium=organic&utm_campaign=components`;
  const GITHUB = `https://github.com/TwicPics/components-demo-next`;
  const CODESANDBOX = `https://stackblitz.com/edit/github-wpprt7?file=`;
  const _codeSandBoxUrl = `${CODESANDBOX}${gitHubUrl || "README.md"}`;
  const _gitHubUrl = gitHubUrl ? `${GITHUB}/blob/main/${gitHubUrl}` : GITHUB;
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
              src={logoSrc}
              alt="React Logo"
            />
          </h1>
        </Link>
        <div className={styles["ribbon"]}>
          <div>
            <a
              target="_blank"
              href={_gitHubUrl}
              rel="noreferrer"
              title="Open in Github">
              <img src="/assets/github-mark-white.svg" alt="Open in Github" />
            </a>
            <a
              target="_blank"
              href={_codeSandBoxUrl}
              rel="noreferrer"
              title="Open in StackBlitz">
              <img src="/assets/stackblitz.svg" alt="Open in StackBlitz" />
            </a>
          </div>
        </div>
        <div className={styles["tags-container"]}>
          <div className={styles["tag"]}>@twicpics-components</div>
          <a
            href={redirect}
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
