import { useEffect, useState } from 'react';

import { Emojis } from './components/Emojis/Emojis';
import { LoseScreen } from './components/LoseScreen/LoseScreen';

const App = () => {
  const [gamestate, setGamestate] = useState(0);

  useEffect(() => {
    console.log(gamestate);
  }, [gamestate]);

  if (gamestate === -1) {
    return <LoseScreen setGamestate={setGamestate} />;
  } else {
    return (
      <Emojis count={10} gamestate={gamestate} setGamestate={setGamestate} />
    );
  }
};

export default App;
