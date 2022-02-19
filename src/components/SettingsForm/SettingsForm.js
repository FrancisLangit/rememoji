import { useState } from 'react';

const SettingsForm = ({ emojiCount }) => {
  const [value, setValue] = useState(emojiCount);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <input type="number" value={value} onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export { SettingsForm };
