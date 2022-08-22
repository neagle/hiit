import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import VoiceList from "./VoiceList.js";
import Incrementer from "./Incrementer.js";
import Checkbox from "./Checkbox.js";
import { numberize } from "./utils.js";

import deleteSoundUrl from "./sounds/general/Negative Sounds/sfx_sounds_damage1.wav";
import addSoundUrl from "./sounds/general/Menu Sounds/sfx_menu_move4.wav";
import resetSoundUrl from "./sounds/general/Neutral Sounds/sfx_sound_neutral4.wav";
import clickSoundUrl from "./sounds/general/Menu Sounds/sfx_menu_move3.wav";
import configCloseSoundUrl from "./sounds/general/Pause Sounds/sfx_sounds_pause7_in.wav";

const deleteSound = new Audio(deleteSoundUrl);
const addSound = new Audio(addSoundUrl);
const resetSound = new Audio(resetSoundUrl);
const clickSound = new Audio(clickSoundUrl);
const configCloseSound = new Audio(configCloseSoundUrl);

const Config = ({
  hideConfig,
  setHideConfig,
  sets,
  setSets,
  rest,
  setRest,
  exercises,
  setExercises,
  soundEnabled,
  setSoundEnabled,
  speechEnabled,
  setSpeechEnabled,
  voice,
  setVoice,
  play,
}) => {
  const [newExerciseName, setNewExerciseName] = useState("");
  const [newExerciseDuration, setNewExerciseDuration] = useState(0);

  const [configHue, setConfigHue] = useState();
  useEffect(() => {
    setConfigHue(Math.floor(Math.random() * 360));
  }, []);

  const addNewExercise = () => {
    play(addSound);

    setExercises([
      ...exercises,
      { name: newExerciseName, duration: newExerciseDuration },
    ]);

    setNewExerciseName("");
  };

  const removeExercise = (i) => {
    play(deleteSound);
    setExercises(exercises.filter((item, index) => i !== index));
  };

  const clearExercises = () => {
    const goAhead = window.confirm("Clear all exercises?");
    if (goAhead) {
      play(resetSound);
      setExercises([]);
    }
  };

  const toggleSound = async (event) => {
    setSoundEnabled(event.target.checked);
    if (event.target.checked) {
      play(clickSound, true);
    }
  };

  const toggleSpeech = (event) => {
    setSpeechEnabled(event.target.checked);
    play(clickSound, true);
  };

  return (
    <div
      className={`config ${hideConfig ? "hide" : ""}`}
      style={{ backgroundColor: `hsl(${configHue}, 100%, 40%)` }}
    >
      <fieldset className="workout">
        <label>
          Sets:{" "}
          <input
            className="number"
            type="text"
            value={sets}
            onChange={(event) => setSets(numberize(event.target.value))}
          />
          <Incrementer
            value={sets}
            min={0}
            max={10}
            setter={(num) => {
              setSets(numberize(num));
            }}
            play={play}
          />
        </label>
        <label>
          Rest between sets:{" "}
          <input
            className="number"
            type="text"
            value={rest}
            onChange={(event) => setRest(numberize(event.target.value))}
          />
          <Incrementer
            value={rest}
            setter={(num) => {
              setRest(numberize(num));
            }}
            min={0}
            step={30}
            play={play}
          />
          seconds
        </label>
        <label>
          Exercise:{" "}
          <input
            className="number"
            onChange={(event) =>
              setNewExerciseDuration(numberize(event.target.value))
            }
            value={newExerciseDuration}
            type="text"
            placeholder="0"
          />
          <Incrementer
            setter={(num) => {
              setNewExerciseDuration(numberize(num));
            }}
            value={newExerciseDuration}
            min={0}
            step={10}
            play={play}
          />{" "}
          seconds{" "}
          <input
            onChange={(event) => setNewExerciseName(event.target.value)}
            value={newExerciseName}
            placeholder="exercise"
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                addNewExercise();
              }
            }}
          />{" "}
          <button onClick={addNewExercise}>+</button>
        </label>

        <ol>
          <ReactSortable list={exercises} setList={setExercises}>
            {exercises.map((exercise, i) => (
              <li key={i}>
                <div className="exercise">
                  <div className="description">
                    <strong>{exercise.duration}</strong> seconds of{" "}
                    {exercise.name}{" "}
                  </div>
                  <button onClick={() => removeExercise(i)}>&times;</button>
                </div>
              </li>
            ))}
          </ReactSortable>
        </ol>

        {!exercises?.length && "Add some exercises!"}
        {exercises.length > 0 && (
          <button className="clear" onClick={clearExercises}>
            Clear
          </button>
        )}
      </fieldset>
      <fieldset className="settings">
        <label>
          <Checkbox checked={soundEnabled} onChange={toggleSound} />
          Sound
        </label>
        <div className="speech">
          <label>
            <Checkbox
              checked={speechEnabled}
              onChange={toggleSpeech}
              disabled={!soundEnabled}
            />{" "}
            Speech
          </label>
          <label className="voice-list">
            Voice: <VoiceList voice={voice} setVoice={setVoice} />
          </label>
        </div>
      </fieldset>
      <button
        className="close-config"
        onClick={() => {
          setHideConfig(true);
          play(configCloseSound);
        }}
      >
        &times;
      </button>
    </div>
  );
};

export default Config;
