import React from "react";
import Icon from "../icon/Icon";
import styles from "./club.module.css";

interface ClubProps {
  name: string;
  description: string;
  role: string;
  imageURL?: string;
  start: string;
  end?: string;
}

export default function Club({
  name,
  description,
  role,
  imageURL,
  start,
  end,
}: ClubProps) {
  return (
    <div className={styles.club}>
      <div className={styles.content}>
        <h3 className={styles.header}>{name}</h3>
        <h5 className={styles.subheader}>
          {role} <Icon name="dash-lg" /> {start} <Icon name="dash" />{" "}
          {end ? end : "Present"}
        </h5>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.image}>
        <img src={imageURL} alt={`${name} Logo`} />
      </div>
    </div>
  );
}
