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
      <h3 className={styles.name}>
        <Icon name="dash-lg" />{" "}
        {url ? (
          <a className={styles.name} href={url} target="_blank">
            {name}
          </a>
        ) : (
          name
        )}
      </h3>
      <p className={styles.description}>{description}</p>
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
  );
}
