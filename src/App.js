import { useEffect, useState } from 'react';

import './App.module.scss';

import { EndScreen } from './components/EndScreen/EndScreen';
import { Footer } from './components/Footer/Footer';
import { Game } from './components/Game/Game';
import { Header } from './components/Header/Header';
import { SettingsForm } from './components/SettingsForm/SettingsForm';

const App = () => {
  const [emojiCount, setEmojiCount] = useState(2);
  const [gamestate, setGamestate] = useState(0);
  const [score, setScore] = useState(-1);

  if (gamestate === -1) {
    return <EndScreen text="u lawst 🙃" setGamestate={setGamestate} />;
  } else if (gamestate === 1) {
    return <EndScreen text="u 1!!! 🏆" setGamestate={setGamestate} />;
  } else {
    return (
      <div>
        {/* <SettingsForm
          emojiCount={emojiCount}
          setEmojiCount={setEmojiCount}
          setGamestate={setGamestate}
        /> */}
        <Header />
        <Game
          emojiCount={emojiCount}
          score={score}
          setScore={setScore}
          gamestate={gamestate}
          setGamestate={setGamestate}
        />
        <Footer />
      </div>
    );
  }
};

export default App;
