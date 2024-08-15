import React from "react";
import styles from "./styles.module.scss";
import Skeleton from "../skeleton";

const CharInfo = ({ char }) => {
  if (!char) {
    return <Skeleton />;
  }

  const { name, thumbnail, homepage, wiki, description, comics } = char;
  return (
    <div className={styles.info}>
      <div className={styles.personWrapper}>
        <img src={thumbnail} alt={name} />

        <div className={styles.personCard}>
          <p className={styles.name}>{name}</p>
          <div className={styles.btn}>
            <a href={homepage} target='_blank' className='button button__main'>
              <div className='inner'>homepage</div>
            </a>
            <a href={wiki} className='button button__secondary' target='_blank'>
              <div className='inner'>wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.randomInfo}>{description}</div>
      <div className={styles.comics}>
        <p className={styles.comicsTitle}>Comics:</p>
        <div className={styles.scrollComics}>
          {comics.length ? (
            comics.map((items) => {
              const { resourceURI, name } = items;
              return (
                <a
                  className={styles.comicsName}
                  href={resourceURI}
                  target='_blank'
                  key={name}
                >
                  {name}
                </a>
              );
            })
          ) : (
            <div className={styles.comicsName}> No commics, sorry</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharInfo;
