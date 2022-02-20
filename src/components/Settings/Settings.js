import { useState } from 'react';

import styles from './Settings.module.scss';

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
  );
};

const Button = () => {
  return <div className={styles.button}>⚙️ Settings</div>;
};

const Settings = () => {
  return (
    <div className={styles.container}>
      <Button />
    </div>
  );
};

export { Settings };
