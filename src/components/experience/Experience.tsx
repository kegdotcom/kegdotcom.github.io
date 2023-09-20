import React from "react";
import Icon from "../icon/Icon";
import styles from "./experience.module.css";

interface ExperienceProps {
  company: string;
  position: string;
  description: string;
  location?: string;
  start: string;
  end?: string;
}

export default function Experience({
  company,
  position,
  description,
  location,
  start,
  end,
}: ExperienceProps) {
  return (
    <div className={styles.experience}>
      <h5 className={styles.subheader}>
        {start} <Icon name="dash" /> {end ? end : "Present"}
      </h5>
      <h3 className={styles.header}>{position}</h3>
      <h5 className={styles.subheader}>
        {company}{" "}
        {location && (
          <>
            <Icon name="dash" /> <Icon name="geo-alt" /> {location}
          </>
        )}
      </h5>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
