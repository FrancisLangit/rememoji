import { useState, useEffect } from 'react';

import { Emoji } from '../Emoji/Emoji';

import { getEmojis } from './helpers/getEmojis';
import { getShuffledArray } from './helpers/getShuffledArray';
import styles from './Emojis.module.scss';

const Emojis = () => {
  const [emojis, setEmojis] = useState(getEmojis(9));
  const [clickedEmojis, setClickedEmojis] = useState([]);

  useEffect(() => {
    setEmojis((emojis) => getShuffledArray([...emojis]));
  }, [clickedEmojis]);

  return (
    <div className={styles.container}>
      {emojis.map((emoji) => (
        <Emoji
          key={`game-${emoji}`}
          emoji={emoji}
          clickedEmojis={clickedEmojis}
          setClickedEmojis={setClickedEmojis}
        />
      ))}
    </div>
  );
};

export { Emojis };
