import { useState } from 'react';

import styles from './Settings.module.scss';

const Button = ({ setIsShow }) => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.button} onClick={() => setIsShow(true)}>
        ⚙️ Settings
      </div>
    </div>
  );
};

const Settings = ({ emojiCount, setEmojiCount, setGamestate }) => {
  const [value, setValue] = useState(emojiCount);
  const [isShow, setIsShow] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmojiCount(parseInt(value));
    setGamestate(-2);
  };

  return (
    <div>
      {isShow ? (
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
      ) : null}
      <Button setIsShow={setIsShow} />
    </div>
  );
};

export { Settings };
