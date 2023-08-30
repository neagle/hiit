import { useState } from "react";
import { AnimatePresence, Reorder } from "framer-motion";
import useLocalStorage from "./hooks/useLocalStorage";
import Select from "react-select";
import VoiceList from "./VoiceList.js";
import Incrementer from "./Incrementer.js";
import Checkbox from "./Checkbox.js";
import DifficultyMeter from "./DifficultyMeter.js";
import { numberize, uuid } from "./utils.js";
import exerciseDemonstrations from "./exercise-demonstrations.js";
import Star from "./Star.js";

import deleteSoundUrl from "./sounds/general/Negative Sounds/sfx_sounds_damage1.wav";
import addSoundUrl from "./sounds/general/Menu Sounds/sfx_menu_move4.wav";
import resetSoundUrl from "./sounds/general/Neutral Sounds/sfx_sound_neutral4.wav";
import clickSoundUrl from "./sounds/general/Menu Sounds/sfx_menu_move3.wav";
import selectWorkoutSoundUrl from "./sounds/general/Positive Sounds/sfx_sounds_powerup4.wav";
import favoriteSoundUrl from "./sounds/general/Positive Sounds/sfx_sounds_powerup2.wav";
import unfavoriteSoundUrl from "./sounds/general/Neutral Sounds/sfx_sound_neutral7.wav";
import infoToggleSoundUrl from "./sounds/general/Neutral Sounds/sfx_sound_neutral5.wav";

const deleteSound = new Audio(deleteSoundUrl);
const addSound = new Audio(addSoundUrl);
const resetSound = new Audio(resetSoundUrl);
const clickSound = new Audio(clickSoundUrl);
const selectWorkoutSound = new Audio(selectWorkoutSoundUrl);
const favoriteSound = new Audio(favoriteSoundUrl);
const unfavoriteSound = new Audio(unfavoriteSoundUrl);
const infoToggleSound = new Audio(infoToggleSoundUrl);

const Config = ({
  hideConfig,
  setHideConfig,
  sets,
  setSets,
  levels,
  setLevels,
  rest,
  setRest,
  exercises,
  setExercises,
  soundEnabled,
  setSoundEnabled,
  speechEnabled,
  setSpeechEnabled,
  voiceName,
  setVoiceName,
  setVoiceObject,
  play,
  workouts,
  selectedWorkout,
  setSelectedWorkout,
  favorites,
  setFavorites,
}) => {
  const [onlyShowFavorites, setOnlyShowFavorites] = useLocalStorage(
    "onlyShowFavorites",
    false
  );
  const [showInfo, _setShowInfo] = useLocalStorage("showInfo", true);
  const setShowInfo = (state) => {
    _setShowInfo(state);
    play(infoToggleSound);
  };
  const [newExerciseName, setNewExerciseName] = useState("");
  const [newExerciseDuration, setNewExerciseDuration] = useState(20);

  const toggleOnlyShowFavorites = () => {
    setOnlyShowFavorites(!onlyShowFavorites);
  };

  const addNewExercise = () => {
    play(addSound);

    setExercises([
      ...exercises,
      // Add a unique ID to each exercise for the sake of animation / reordering
      { name: newExerciseName, duration: newExerciseDuration, id: uuid() },
    ]);

    setNewExerciseName("");
  };

  const removeExercise = (i) => {
    play(deleteSound);
    setExercises(exercises.filter((item, index) => i !== index));
  };

  const clearExercises = (prompt = true) => {
    const goAhead = !prompt ? true : window.confirm("Clear all exercises?");
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

  const onWorkoutSelect = (option) => {
    const selectedWorkout = workouts.find(
      (workout) => workout.name === option.name
    );

    if (selectedWorkout) {
      setSelectedWorkout(selectedWorkout);
      setSets(selectedWorkout.levels[0]);
      setLevels(selectedWorkout.levels);
      setRest(selectedWorkout.rest);
      setExercises(
        // Assign a unique ID to each exercise
        selectedWorkout.exercises.map((e) => ({ ...e, id: uuid() }))
      );
      play(selectWorkoutSound);
    } else {
      setSelectedWorkout(null);
      setSets(0);
      setRest(0);
      clearExercises(false);
    }
  };

  const exerciseDisplayName = (name) => {
    const exerciseDemonstrationURL = exerciseDemonstrations[name];
    return exerciseDemonstrationURL ? (
      <a href={exerciseDemonstrationURL} target="_blank" rel="noreferrer">
        {name}
      </a>
    ) : (
      name
    );
  };

  let workoutOptions = workouts
    .sort((a, b) => a.difficulty - b.difficulty)
    .map((workout) => {
      return {
        name: workout.name,
        difficulty: workout.difficulty,
        favorite: favorites.includes(workout.name),
      };
    });

  if (onlyShowFavorites) {
    workoutOptions = workoutOptions.filter((workout) => workout.favorite);
  }

  const CustomOption = ({ data, innerRef, innerProps }) => {
    return (
      <div
        className={`workout-option ${
          selectedWorkout.name === data.name ? "active" : "inactive"
        }`}
        ref={innerRef}
        {...innerProps}
      >
        <span className="workout-option-name">
          {data.favorite && (
            <span className="workout-option-favorite">
              <Star />
            </span>
          )}
          {data.name}
        </span>
        <span className="workout-option-difficulty">
          <DifficultyMeter difficulty={data.difficulty} />
        </span>
      </div>
    );
  };

  const isFavorite = (workout) => {
    return favorites.includes(workout.name);
  };

  const toggleFavorite = () => {
    if (isFavorite(selectedWorkout)) {
      const newFavorites = favorites.filter(
        (favorite) => favorite !== selectedWorkout.name
      );
      setFavorites(newFavorites);
      play(unfavoriteSound);
      if (!newFavorites.length) {
        setOnlyShowFavorites(false);
      }
    } else {
      setFavorites([...favorites, selectedWorkout.name]);
      play(favoriteSound);
    }
  };

  return (
    <div className={`config ${hideConfig ? "hide" : ""}`}>
      <header>
        <h1>
          Retro HIIT
          {!showInfo && (
            <button className="show-info" onClick={() => setShowInfo(true)}>
              Show Info
            </button>
          )}
        </h1>
        <button
          className="close-config"
          onClick={() => {
            setHideConfig(true);
          }}
        >
          &times;
        </button>
      </header>
      <div>
        <fieldset className="workout">
          {showInfo && (
            <div className="app-info">
              <p>
                Retro HIIT is a guided workout tool for timed high-intensity
                interval training workouts. It lets you forget about managing
                the clock and focus on your fitness!
              </p>
              <p>
                You can select from one of the pre-configured workouts, modify
                it if you like, or build your own from scratch.
              </p>
              {/* Saved for later! }
              {/* <iframe
                title="Kosmischer Läufer: The Secret Cosmic Music of the East German Olympic Program 1972 – 83"
                style={{ border: 0, borderRadius: 12, marginBottom: "1em" }}
                src="https://open.spotify.com/embed/playlist/24P6FdnvH9uZ9yxwRAkeZY?utm_source=generator&theme=0"
                width="100%"
                height="352"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media *; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe> */}
              <button className="hide-info" onClick={() => setShowInfo(false)}>
                Hide Info
              </button>
            </div>
          )}
          {favorites.length > 0 && (
            <label>
              <Checkbox
                checked={onlyShowFavorites}
                onChange={toggleOnlyShowFavorites}
              />{" "}
              Only show favorites
            </label>
          )}
          <label>
            Workouts:
            <Select
              className="workout-select"
              components={{
                Option: CustomOption,
              }}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.name}
              isSearchable={true}
              onChange={onWorkoutSelect}
              defaultValue={workoutOptions.find(
                (option) => selectedWorkout?.name === option.name
              )}
              options={workoutOptions}
            ></Select>
            <button
              className="favorite"
              title={`${
                isFavorite(selectedWorkout)
                  ? "Remove Favorite"
                  : "Set as Favorite"
              }`}
              onClick={toggleFavorite}
            >
              {isFavorite(selectedWorkout) ? <Star /> : <Star active={false} />}
            </button>
          </label>
          <div className="meta">
            {selectedWorkout?.difficulty && (
              <div className="difficulty">
                <h2>Difficulty:</h2>
                <div className="display">
                  <DifficultyMeter difficulty={selectedWorkout.difficulty} />
                </div>
              </div>
            )}
            {selectedWorkout?.description && (
              <div className="description">
                <h2>Description:</h2>
                <p>{selectedWorkout?.description}</p>
              </div>
            )}
            {selectedWorkout?.extraCredit && (
              <div className="extra-credit">
                <h2>Extra Credit:</h2>
                <p>{selectedWorkout.extraCredit}</p>
              </div>
            )}
          </div>

          {levels?.length > 1 && (
            <label>
              Level:{" "}
              <div className="input-group">
                <Incrementer
                  value={levels.indexOf(sets) + 1}
                  min={1}
                  max={levels.length}
                  setter={(num) => {
                    setSets(levels[numberize(num) - 1]);
                  }}
                  play={play}
                >
                  <input
                    className="number"
                    type="text"
                    value={levels.indexOf(sets) + 1}
                    onChange={(event) =>
                      setSets(levels[numberize(event.target.value) - 1])
                    }
                  />
                </Incrementer>
              </div>
            </label>
          )}
          <label>
            Sets:{" "}
            <div className="input-group">
              <Incrementer
                value={sets}
                min={0}
                max={10}
                setter={(num) => {
                  setSets(numberize(num));
                }}
                play={play}
              >
                <input
                  className="number"
                  type="text"
                  value={sets}
                  onChange={(event) => setSets(numberize(event.target.value))}
                />
              </Incrementer>
            </div>
          </label>
          <label>
            Rest between sets:{" "}
            <div className="input-group">
              <Incrementer
                value={rest}
                setter={(num) => {
                  setRest(numberize(num));
                }}
                min={0}
                step={30}
                play={play}
                label="seconds"
              >
                <input
                  className="number"
                  type="text"
                  value={rest}
                  onChange={(event) => setRest(numberize(event.target.value))}
                />
              </Incrementer>
            </div>
          </label>
          <label>
            Exercise:{" "}
            <div className="input-group">
              <Incrementer
                setter={(num) => {
                  setNewExerciseDuration(numberize(num));
                }}
                value={newExerciseDuration}
                min={0}
                step={10}
                play={play}
                label="seconds"
              >
                <input
                  className="number"
                  onChange={(event) =>
                    setNewExerciseDuration(numberize(event.target.value))
                  }
                  value={newExerciseDuration}
                  type="text"
                  placeholder="0"
                />
              </Incrementer>
              <div className="input-group-control">
                <input
                  onChange={(event) => setNewExerciseName(event.target.value)}
                  value={newExerciseName}
                  placeholder="exercise"
                  onKeyUp={(event) => {
                    if (event.key === "Enter" && newExerciseName) {
                      addNewExercise();
                    }
                  }}
                />{" "}
                <button onClick={addNewExercise} disabled={!newExerciseName}>
                  +
                </button>
              </div>
            </div>
          </label>
          <Reorder.Group as="ol" values={exercises} onReorder={setExercises}>
            <AnimatePresence>
              {exercises.map((exercise, i) => (
                <Reorder.Item
                  key={exercise.id}
                  value={exercise}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="exercise">
                    <b className="handle"></b>
                    <div className="description">
                      <strong>{exercise.duration}</strong> seconds of{" "}
                      {exerciseDisplayName(exercise.name)}{" "}
                    </div>
                    <button
                      className="delete"
                      title="Remove this exercise"
                      onClick={() => removeExercise(i)}
                    >
                      &times;
                    </button>
                  </div>
                </Reorder.Item>
              ))}
            </AnimatePresence>
          </Reorder.Group>
          {!exercises?.length && "Add some exercises!"}
          {exercises.length > 0 && (
            <button className="clear" onClick={clearExercises}>
              Clear
            </button>
          )}

          <div>
            <button
              className="close-config-and-start"
              onClick={() => {
                setHideConfig(true);
              }}
            >
              Close Config and Get Ready to Go!
            </button>
          </div>
        </fieldset>
        <fieldset className="settings">
          <h2>Settings</h2>
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
              Voice:{" "}
              <VoiceList
                voiceName={voiceName}
                setVoiceObject={setVoiceObject}
              />
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Config;
