import { useEffect, useState } from 'react';

import { Emojis } from './components/Emojis/Emojis';

const App = () => {
  const [gamestate, setGamestate] = useState(0);

  useEffect(() => {
    console.log(gamestate);
  }, [gamestate]);

  return (
    <div>
      <Emojis setGamestate={setGamestate} />
    </div>
  );
};

export default App;
