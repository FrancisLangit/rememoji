import { useState } from 'react';

const SettingsForm = ({ emojiCount, setEmojiCount, setGamestate }) => {
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
      <input type="number" value={value} onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export { SettingsForm };
