import styles from './SettingsButton.module.scss';

const SettingsButton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>⚙️ Settings</div>
    </div>
  );
};

export { SettingsButton };
