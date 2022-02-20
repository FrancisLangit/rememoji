import { useState } from 'react';

import styles from './Form.module.scss';

const Form = ({ emojiCount, setEmojiCount, setGamestate }) => {
  const [value, setValue] = useState(emojiCount);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmojiCount(parseInt(value));
    setGamestate(-2);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={value}
            min={2}
            max={30}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export { Form };
