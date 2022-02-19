import { useState, useEffect } from 'react';

import { Emoji } from '../Emoji/Emoji';

import { getEmojis } from './helpers/getEmojis';
import { getShuffledArray } from './helpers/getShuffledArray';
import { hasDuplicates } from './helpers/hasDuplicates';
import styles from './Game.module.scss';

const Game = ({ count, score, setScore, gamestate, setGamestate }) => {
  const [emojis, setEmojis] = useState(getEmojis(count));
  const [clickedEmojis, setClickedEmojis] = useState([]);

  // If the user clicks on an emoji previously clicked on, the game is lost.
  // Else, increment score and shuffle gameboard when a user clicks on an emoji.
  useEffect(() => {
    console.log(`Clicked: ${clickedEmojis}`);
    if (hasDuplicates(clickedEmojis)) {
      setGamestate(-1);
    } else {
      setEmojis((emojis) => getShuffledArray([...emojis]));
      setScore((score) => score + 1);
    }
  }, [clickedEmojis, setGamestate, setScore]);

  // Restart the game if and when passed prop "gamestate" is -2.
  useEffect(() => {
    if (gamestate === -2) {
      setEmojis(getEmojis(count));
      setGamestate(0);
      setScore(0);
    }
  }, [count, gamestate, setGamestate, setScore]);

  // Detect if the game has been won.
  useEffect(() => {
    if (clickedEmojis.length === count && !hasDuplicates(clickedEmojis)) {
      setGamestate(1);
    }
  }, [clickedEmojis, count, setGamestate]);

  return (
    <div>
      <div className={styles.score}>Score: {score}</div>
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
    </div>
  );
};

export { Game };
