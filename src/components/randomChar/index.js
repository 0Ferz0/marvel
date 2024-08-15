import React from "react";
import mjolnirImg from "../../resourse/mjolnir.png";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import MarvelService from "../../services/MarvelServices";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

const RandomChar = () => {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [homepage, setHomepage] = useState(null);
  const [wiki, setWiki] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const marvelService = new MarvelService();

  const onCharLoaded = (char) => {
    setName(char.name);
    setDescription(char.description);
    setThumbnail(char.thumbnail);
    setHomepage(char.homepage);
    setWiki(char.wiki);
    setLoading(false);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    setLoading(true);
    setError(false);

    marvelService.getCharacter(id).then(onCharLoaded).catch(onError);
  };

  useEffect(() => {
    updateChar();
  }, []);

  const errorMessage = error ? (
    <div className={styles.center}>
      <ErrorMessage />
    </div>
  ) : null;

  const spinner = loading ? (
    <div className={styles.center}>
      <Spinner />
    </div>
  ) : null;

  const content = !(error || loading) ? (
    <View
      name={name}
      description={description}
      thumbnail={thumbnail}
      homepage={homepage}
      wiki={wiki}
    />
  ) : null;

  return (
    <div className={styles.randomChar}>
      <div className={styles.charWrapper}>
        {errorMessage}
        {spinner}
        {content}
      </div>
      <div className={`${styles.charWrapper} ${styles.bgBlack}`}>
        <img className={styles.molot} src={mjolnirImg} alt={"molot"} />
        <div className={styles.about}>
          <div className={styles.text}>
            Random character for today! <br />
            Do you want to get to know him better?
          </div>
          <div className={styles.choose}>Or choose another one</div>
          <div className={styles.buttons}>
            <button
              className='button button__main'
              onClick={updateChar}
              disabled={loading}
            >
              <div className='inner'>TRY IT</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const View = ({ name, description, homepage, thumbnail, wiki }) => {
  return (
    <>
      <img src={thumbnail} alt={name} className={styles.img} />
      <div className={styles.about}>
        <div>
          <div className={styles.title}>{name}</div>
          <div className={styles.description}>{description}</div>
        </div>

        <div className={styles.buttons}>
          <a href={homepage} target='_blank' className='button button__main'>
            <div className='inner'>homepage</div>
          </a>
          <a href={wiki} className='button button__secondary' target='_blank'>
            <div className='inner'>wiki</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default RandomChar;
