import React from "react";
import AppHeader from "../appHeader";
import styles from "./styles.module.scss";
import RandomChar from "../randomChar";
import CharList from "../charList";
import CharInfo from "../charInfo";
import visionImg from "../../resourse/img/vision.png";
import { useState } from "react";
import ErrorBondary from "../errorBoundary/ErrorBoundary";

const App = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  return (
    <div className={styles.app}>
      <img src={visionImg} alt={"vision"} className={styles.flyMen} />
      <ErrorBondary>
        <AppHeader />
      </ErrorBondary>
      <RandomChar />
      <ErrorBondary></ErrorBondary>
      <div className={styles.blog}>
        <ErrorBondary>
          <CharList onSelectedChar={setSelectedChar} />
        </ErrorBondary>
        <ErrorBondary>
          <CharInfo char={selectedChar} />
        </ErrorBondary>
      </div>
    </div>
  );
};

export default App;
