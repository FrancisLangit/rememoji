import { useState, useEffect } from 'react';

import { Emoji } from '../Emoji/Emoji';

import { getEmojis } from './helpers/getEmojis';

const Emojis = () => {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    setEmojis(getEmojis(12));
  }, []);

  return (
    <div>
      {emojis.map((emoji) => (
        <Emoji emoji={emoji} />
      ))}
    </div>
  );
};

export { Emojis };
