import { useEffect, useState } from 'react';

import { EndScreen } from './components/EndScreen/EndScreen';
import { Game } from './components/Game/Game';
import { SettingsForm } from './components/SettingsForm/SettingsForm';

const App = () => {
  const [emojiCount, setEmojiCount] = useState(6);
  const [gamestate, setGamestate] = useState(0);
  const [score, setScore] = useState(-1);

  useEffect(() => {
    console.log(`Gamestate: ${gamestate}`);
  }, [gamestate]);

  if (gamestate === -1) {
    return <EndScreen text="You lose!" setGamestate={setGamestate} />;
  } else if (gamestate === 1) {
    return <EndScreen text="You win!" setGamestate={setGamestate} />;
  } else {
    return (
      <div>
        <SettingsForm emojiCount={emojiCount} />
        <Game
          emojiCount={emojiCount}
          score={score}
          setScore={setScore}
          gamestate={gamestate}
          setGamestate={setGamestate}
        />
      </div>
    );
  }
};

export default App;
