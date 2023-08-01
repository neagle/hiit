const DifficultyMeter = (props) => {
  const meter = [];
  for (let i = 0; i < 5; i++) {
    meter.push(
      props.difficulty <= i ? (
        <b className="empty" key={i}></b>
      ) : (
        <b className="full" key={i}></b>
      )
    );
  }
  return (
    <div className="difficulty-meter" {...props}>
      {meter}
    </div>
  );
};

export default DifficultyMeter;
