import { useEffect, useState } from 'react';

import { Emojis } from './components/Emojis/Emojis';

const App = () => {
  const [gamestate, setGamestate] = useState(0);

  useEffect(() => {
    console.log(gamestate);
  }, [gamestate]);

  if (gamestate === -1) {
    return <>You lose!</>;
  } else {
    return <Emojis setGamestate={setGamestate} />;
  }
};

export default App;
