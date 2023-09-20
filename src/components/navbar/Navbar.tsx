import React from "react";
import Icon from "../icon/Icon";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <span className={styles.iconContainer}>
          <a className={styles.icon} href="#">
            <Icon name="chevron-left" />
            <Icon name="chevron-right" />
          </a>
        </span>
        <div className={styles.linkContainer}>
          <a className={styles.link} href="#about">
            About
          </a>
          <a className={styles.link} href="#projects">
            Projects
          </a>
          <a className={styles.link} href="#skills">
            Skills
          </a>
          <a className={styles.link} href="#experience">
            Experience
          </a>
          <a className={styles.link} href="#involvement">
            Involvement
          </a>
        </div>
      </div>
    </nav>
  );
}
