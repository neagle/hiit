import { numberize } from "./utils.js";
import tickSoundUrl from "./sounds/general/Menu Sounds/sfx_menu_move1.wav";

const tickSound = new Audio(tickSoundUrl);

const Incrementer = ({
  value,
  setter,
  step = 1,
  min,
  max,
  play,
  label,
  children,
}) => {
  const up = () => {
    const newValue = numberize(value) + step;
    setter(typeof max !== "undefined" ? Math.min(value + step, max) : newValue);
    play(tickSound);
  };

  const down = () => {
    const newValue = numberize(value) - step;
    setter(typeof min !== "undefined" ? Math.max(newValue, min) : newValue);
    play(tickSound);
  };

  return (
    <div className="incrementer">
      {children}
      <div className="incrementer-controls">
        <button onClick={up}>▲</button>
        <button onClick={down}>▼</button>
      </div>
      {label && <b className="incrementer-label">{label}</b>}
    </div>
  );
};

export default Incrementer;
