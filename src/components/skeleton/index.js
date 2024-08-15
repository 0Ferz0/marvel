import React from "react";
import styles from "./styles.module.scss";

const Skeleton = () => {
  return (
    <div className={styles.info}>
      <div className={styles.plugMessage}>
        Please select a character to see information
      </div>

      <div className={styles.plugPict}>
        <div className={styles.plugTop}>
          <div className={`${styles.plugPhoto} pulse`}></div>
          <div className={`${styles.plugThin} pulse`}></div>
        </div>

        <div className={`${styles.plugWide} pulse`}></div>
        <div className={`${styles.plugWide} pulse`}></div>
        <div className={`${styles.plugWide} pulse`}></div>
      </div>
    </div>
  );
};

export default Skeleton;
