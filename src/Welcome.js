const Welcome = ({ setHideConfig }) => {
  return (
    <div className="welcome">
      <h1>Welcome to Retro&nbsp;HIIT!</h1>
      <div className="controls">
        <button onClick={() => setHideConfig(false)}>Get Started</button>
      </div>
    </div>
  );
};

export default Welcome;
