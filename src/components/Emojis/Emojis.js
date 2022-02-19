import { useState, useEffect } from 'react';

import { Emoji } from '../Emoji/Emoji';

import { getEmojis } from './helpers/getEmojis';
import { getShuffledArray } from './helpers/getShuffledArray';
import { hasDuplicates } from './helpers/hasDuplicates';
import styles from './Emojis.module.scss';

const Emojis = ({ count, gamestate, setGamestate }) => {
  const [emojis, setEmojis] = useState(getEmojis(count));
  const [clickedEmojis, setClickedEmojis] = useState([]);

  // Shuffle emojis state array whenever a user clicks on an emoji.
  useEffect(() => {
    console.log(clickedEmojis);
    setEmojis((emojis) => getShuffledArray([...emojis]));
    hasDuplicates(clickedEmojis) && setGamestate(-1);
  }, [clickedEmojis, setGamestate]);

  // Restart the game if and when passed prop gamestate is -2.
  useEffect(() => {
    if (gamestate === -2) {
      setEmojis(getEmojis(count));
      setGamestate(0);
    }
  }, [count, gamestate, setGamestate]);

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
