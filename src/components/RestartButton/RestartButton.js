import styles from './RestartButton.module.scss';

const RestartButton = ({ setGamestate }) => {
  return (
    <div className={styles.container} onClick={() => setGamestate(-2)}>
      Restart
    </div>
  );
};

export { RestartButton };
