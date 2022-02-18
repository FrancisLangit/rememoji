import { emojis } from './emojis.js';

const getEmojis = (count) => {
  let emojisSubset = [];
  for (let i = 0; i < count; i++) {
    emojisSubset.push(emojis[Math.floor(Math.random() * emojis.length)]);
  }
  return emojisSubset;
};

export { getEmojis };
