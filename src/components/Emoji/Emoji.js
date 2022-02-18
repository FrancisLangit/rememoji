const Emoji = ({ emoji, clickedEmojis, setClickedEmojis }) => {
  const handleClick = () => {
    setClickedEmojis([...clickedEmojis, emoji]);
  };

  return <div onClick={handleClick}>{emoji}</div>;
};

export { Emoji };
