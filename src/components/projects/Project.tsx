import React from "react";
import Icon from "../icon/Icon";
import styles from "./project.module.css";

interface ProjectProps {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}

export default function Project({
  name,
  description,
  technologies,
  url = "",
}: ProjectProps) {
  return (
    <div className={styles.project}>
      <div className={styles.name}>
        <h3 className={styles.header}>
          <Icon name="dash-lg" />{" "}
          {url ? (
            <a className={styles.name} href={url} target="_blank">
              {name}
            </a>
          ) : (
            <span className={styles.name}>{name}</span>
          )}
        </h3>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
        <h5 className={styles.subheader}>Technologies Used:</h5>
        <ul className={styles.techList}>
          {technologies.map((tech: string) => {
            return (
              <li className={styles.tech} key={tech}>
                {tech}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
