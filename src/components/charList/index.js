import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import MarvelService from "../../services/MarvelServices";
import ErrorMessage from "../errorMessage";
import Spinner from "../spinner";

const CharList = ({ onSelectedChar }) => {
  const [chars, setChars] = useState([]);
  const [offset, setOffset] = useState(210);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [charEnded, setCharEnded] = useState(false);
  const myRef = useRef(false);

  const marvelService = new MarvelService();

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  useEffect(() => {
    updateChars();
  }, [offset]);

  const onCharsLoaded = (chars) => {
    setChars((pers) => [...pers, ...chars]);
    setLoading(false);

    if (chars.length < 9) {
      setCharEnded(true);
    }
  };

  const updateChars = () => {
    setLoading(true);
    setError(false);

    marvelService.getAllCharacters(offset).then(onCharsLoaded).catch(onError);
  };

  const hendFocus = () => {
    myRef.current.focus();
  };

  const element =
    !chars.length && error ? (
      <ErrorMessage />
    ) : (
      <div className={styles.charList}>
        {chars.map((char) => {
          const { name, thumbnail, id } = char;
          return (
            <button
              ref={myRef}
              className={styles.personajCards}
              key={id}
              onClick={() => onSelectedChar(char)}
              tabIndex={() => hendFocus()}
            >
              <img
                src={thumbnail}
                alt={name}
                className={styles.personPicters}
              />
              <div className={styles.personName}>{name}</div>
            </button>
          );
        })}
      </div>
    );
  console.log(charEnded);

  return (
    <div className={styles.charListWrapper}>
      {element}
      <div className={styles.button}>
        {loading ? (
          <Spinner />
        ) : (
          <button
            className='button button__main button__long'
            onClick={() => setOffset((ofs) => ofs + 9)}
            style={{ display: charEnded ? "none" : "block" }}
          >
            <div className='inner'>LOAD MORE</div>
          </button>
        )}
      </div>
    </div>
  );
};

export default CharList;
