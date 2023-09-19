import React from "react";
import Icon from "../icon/Icon";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroText}>
        <h1 className={styles.name}>Keg Avakian</h1>
        <h3 className={styles.description}>Software Engineer</h3>
        <span className={styles.linkGroup}>
          <a
            className={styles.contact}
            href="https://linkedin.com/in/keg-jr"
            target="_blank"
          >
            <Icon name="linkedin" />
          </a>
          <a
            className={styles.contact}
            href="https://github.com/kegdotcom"
            target="_blank"
          >
            <Icon name="github" />
          </a>
          <a
            className={styles.contact}
            href="mailto:kavakian@wisc.edu"
            target="_blank"
          >
            <Icon name="envelope" />
          </a>
          <a className={styles.contact} href="sms:+17088008468" target="_blank">
            <Icon name="chat" />
          </a>
        </span>
      </div>
    </div>
  );
}
