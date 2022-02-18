import { useState, useEffect } from 'react';

import { Emoji } from '../Emoji/Emoji';

import { getEmojis } from './helpers/getEmojis';
import { getShuffledArray } from './helpers/getShuffledArray';

const Emojis = () => {
  const [emojis, setEmojis] = useState(getEmojis(12));
  const [clickedEmojis, setClickedEmojis] = useState([]);

  useEffect(() => {
    setEmojis((emojis) => getShuffledArray([...emojis]));
  }, [clickedEmojis]);

  return (
    <div>
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
