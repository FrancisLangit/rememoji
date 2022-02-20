import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>rememoji</div>
      <div className={styles.links}>
        <a
          href="http://github.com/FrancisLangit/rememoji"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
        <span> • </span>
        <a
          href="http://github.com/FrancisLangit/rememoji#how-to-play"
          target="_blank"
          rel="noopener noreferrer"
        >
          How to Play
        </a>
        <span> • </span>
        <a
          href="http://github.com/FrancisLangit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Author
        </a>
      </div>
    </div>
  );
};

export { Header };
