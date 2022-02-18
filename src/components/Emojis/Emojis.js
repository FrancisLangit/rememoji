import { useState, useEffect } from 'react';

import { getEmojis } from './getEmojis';

const Emojis = () => {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    setEmojis(getEmojis(12));
  }, []);

  return <div>{emojis}</div>;
};

export { Emojis };
