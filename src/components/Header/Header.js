import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Rememoji</div>
      <div className={styles.links}>
        <a href="">About</a>
        <span> • </span>
        <a href="">How to Play</a>
        <span> • </span>
        <a href="">Author</a>
      </div>
    </div>
  );
};

export { Header };
