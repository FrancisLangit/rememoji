import styles from './LoseScreen.module.scss';

import { RestartButton } from '../RestartButton/RestartButton';

const LoseScreen = ({ setGamestate }) => {
  return (
    <div className={styles.container}>
      <div>You lose!</div>
      <RestartButton setGamestate={setGamestate} />
    </div>
  );
};

export { LoseScreen };
