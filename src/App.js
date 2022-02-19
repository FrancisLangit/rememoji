import { useEffect, useState } from 'react';

import { Game } from './components/Game/Game';
import { EndScreen } from './components/EndScreen/EndScreen';

const App = () => {
  const [gamestate, setGamestate] = useState(0);

  useEffect(() => {
    console.log(`Gamestate: ${gamestate}`);
  }, [gamestate]);

  if (gamestate === -1) {
    return <EndScreen text="You lose!" setGamestate={setGamestate} />;
  } else if (gamestate === 1) {
    return <EndScreen text="You win!" setGamestate={setGamestate} />;
  } else {
    return <Game count={6} gamestate={gamestate} setGamestate={setGamestate} />;
  }
};

export default App;
