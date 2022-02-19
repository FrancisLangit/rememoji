import { useEffect, useState } from 'react';

import { EndScreen } from './components/EndScreen/EndScreen';
import { Game } from './components/Game/Game';

const App = () => {
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
      <Game
        count={6}
        score={score}
        setScore={setScore}
        gamestate={gamestate}
        setGamestate={setGamestate}
      />
    );
  }
};

export default App;
