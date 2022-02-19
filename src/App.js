import { useEffect, useState } from 'react';

import { Emojis } from './components/Emojis/Emojis';
import { LoseScreen } from './components/LoseScreen/LoseScreen';

const App = () => {
  const [gamestate, setGamestate] = useState(0);

  useEffect(() => {
    console.log(`Gamestate: ${gamestate}`);
  }, [gamestate]);

  if (gamestate === -1) {
    return <LoseScreen setGamestate={setGamestate} />;
  } else {
    return (
      <Emojis count={2} gamestate={gamestate} setGamestate={setGamestate} />
    );
  }
};

export default App;
