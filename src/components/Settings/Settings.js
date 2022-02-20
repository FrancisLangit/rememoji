import { useState } from 'react';

import { Button } from './components/Button/Button';
import { Form } from './components/Form/Form';

const Settings = ({ emojiCount, setEmojiCount, setGamestate }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      {isShow ? (
        <Form
          emojiCount={emojiCount}
          setEmojiCount={setEmojiCount}
          setGamestate={setGamestate}
          setIsShow={setIsShow}
        />
      ) : null}
      <Button setIsShow={setIsShow} />
    </>
  );
};

export { Settings };
