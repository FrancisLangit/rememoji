import { useState, useEffect } from 'react';

import { Emoji } from '../Emoji/Emoji';

import { getEmojis } from './helpers/getEmojis';

const Emojis = () => {
  const [emojis, setEmojis] = useState([]);
  const [clickedEmojis, setClickedEmojis] = useState([]);

  useEffect(() => {
    setEmojis(getEmojis(12));
  }, []);

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
