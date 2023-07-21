import { useRef, useState } from "react";
import { useGranularEffect } from "granular-hooks";
import useLocalStorage from "./hooks/useLocalStorage";

import configOpenSoundUrl from "./sounds/general/Pause Sounds/sfx_sounds_pause7_out.wav";
import pauseInSoundUrl from "./sounds/general/Pause Sounds/sfx_sounds_pause1_in.wav";
import pauseOutSoundUrl from "./sounds/general/Pause Sounds/sfx_sounds_pause1_out.wav";
import resetSoundUrl from "./sounds/general/Neutral Sounds/sfx_sound_neutral4.wav";
import completeSetSoundUrl from "./sounds/general/Positive Sounds/sfx_sounds_powerup16.wav";
import doneSoundUrl from "./sounds/general/Fanfares/sfx_sounds_fanfare2.wav";
import completeExerciseSoundUrl from "./sounds/general/Positive Sounds/sfx_sounds_powerup10.wav";
import tickSoundUrl from "./sounds/general/Simple Bleeps/sfx_sounds_Blip4.wav";

const configOpenSound = new Audio(configOpenSoundUrl);
const pauseInSound = new Audio(pauseInSoundUrl);
const pauseOutSound = new Audio(pauseOutSoundUrl);
const resetSound = new Audio(resetSoundUrl);
const completeSetSound = new Audio(completeSetSoundUrl);
const doneSound = new Audio(doneSoundUrl);
const completeExerciseSound = new Audio(completeExerciseSoundUrl);
const tickSound = new Audio(tickSoundUrl);

const Counter = ({ sets, rest, exercises, say, play, setHideConfig }) => {
  const [currentSet, setCurrentSet] = useLocalStorage("currentSet", 1);
  const currentSetRef = useRef(currentSet);
  currentSetRef.current = currentSet;

  const [done, setDone] = useLocalStorage("done", false);
  const [paused, setPaused] = useState("paused", true);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  const [currentExercise, _setCurrentExercise] =
    useLocalStorage("currentExercise");
  const setCurrentExercise = (currentExercise) => {
    const exercise = exercises[currentExercise];

    if (!pausedRef.current) {
      exercise?.name && say(exercise.name);
    }

    _setCurrentExercise(currentExercise);
  };
  const currentExerciseRef = useRef(currentExercise);
  currentExerciseRef.current = currentExercise;

  const [secondsLeft, setSecondsLeft] = useLocalStorage("secondsLeft");
  const secondsLeftRef = useRef(secondsLeft);
  secondsLeftRef.current = secondsLeft;

  const resting = typeof currentExercise === "undefined";

  const timer = useRef();
  const tick = () => {
    const exercise = exercises[currentExerciseRef.current];

    let newSecondsLeft;
    if (typeof secondsLeftRef.current === "undefined") {
      newSecondsLeft = exercise?.duration;
      setSecondsLeft(newSecondsLeft);
    } else {
      // tick
      newSecondsLeft = secondsLeftRef.current - 1;
      if (newSecondsLeft <= 3 && newSecondsLeft > 0) {
        play(tickSound);
      }
      setSecondsLeft(newSecondsLeft);
    }

    if (newSecondsLeft <= 0) {
      if (typeof currentExerciseRef.current === "undefined") {
        // Done resting
        if (newSecondsLeft <= 0) {
          setCurrentExercise(0);
          setSecondsLeft(exercises[0]?.duration);
          play(completeExerciseSound);
        }

        timer.current = setTimeout(tick, 1000);
      } else if (currentExerciseRef.current === exercises.length - 1) {
        if (currentSetRef.current === sets) {
          // Done!
          play(doneSound);
          setDone(true);
          say("Mission complete!");
          setSecondsLeft();
        } else {
          // Go to the next set
          say(`Set ${currentSetRef.current} complete!`);
          play(completeSetSound);
          setCurrentSet(currentSetRef.current + 1);
          setCurrentExercise();
          setSecondsLeft(rest);
          timer.current = setTimeout(tick, 1000);
        }
      } else {
        // Next exercise
        play(completeExerciseSound);
        const nextExerciseIndex = currentExerciseRef.current + 1;
        setCurrentExercise(nextExerciseIndex);
        const newExercise = exercises[nextExerciseIndex];
        setSecondsLeft(newExercise?.duration);
        timer.current = setTimeout(tick, 1000);
      }
    } else {
      // Tick
      timer.current = setTimeout(tick, 1000);
    }
  };

  useGranularEffect(
    () => {
      if (typeof currentExercise === "undefined") {
        setCurrentExercise(0);
      }

      if (currentExercise === 0 && secondsLeft !== exercises[0]?.duration) {
        setSecondsLeft(exercises[0]?.duration || "-");
      }
    },
    [exercises],
    [currentExercise, setCurrentExercise, secondsLeft, setSecondsLeft]
  );

  const [count, setCount] = useState(0);
  const countdown = (startAt = 3) => {
    return new Promise((resolve) => {
      const tick = (n) => {
        setCount(n);
        if (n > 0) {
          say(n, 0);
          setTimeout(() => tick(n - 1), 1000);
        } else {
          resolve();
        }
      };
      tick(startAt);
    });
  };

  const togglePause = async () => {
    if (!exercises?.length) {
      setHideConfig(false);
      play(configOpenSound);
    } else {
      if (pausedRef.current) {
        play(pauseOutSound);
        setPaused(false);
        if (!resting) {
          await countdown();
          if (secondsLeft === exercises[currentExercise].duration) {
            say(exercises[currentExercise].name);
          }
        }
        timer.current = setTimeout(tick, 1000);
      } else {
        play(pauseInSound);
        clearTimeout(timer.current);
        setPaused(true);
      }
    }
  };

  const reset = () => {
    play(resetSound);
    clearTimeout(timer.current);
    setCurrentSet(1);
    setCurrentExercise(0);
    setSecondsLeft(exercises[0]?.duration);
    setDone(false);
    setPaused(true);
  };

  const resettable =
    (currentSet !== 1 ||
      currentExercise !== 0 ||
      secondsLeft !== exercises[0]?.duration) &&
    (paused || done);

  return (
    <div className="counter-container">
      <p className="info">
        <strong>Set:</strong> {currentSet}{" "}
        <b className="total-sets">(of {sets})</b>
      </p>
      <div
        className={`countdown ${
          count >= 1 && count <= 3 ? "active" : "inactive"
        }`}
      >
        {count === 3 && <b className="3">3</b>}
        {count === 2 && <b className="2">2</b>}
        {count === 1 && <b className="1">1</b>}
      </div>
      <h1
        className={`counter ${
          pausedRef.current || count ? "inactive" : "active"
        }`}
      >
        {secondsLeft}
      </h1>
      <h2
        className={`exercise ${
          pausedRef.current || count ? "inactive" : "active"
        } ${resting ? "rest" : "exercise"}`}
      >
        {typeof currentExercise === "undefined" && !exercises.length && "-"}
        {typeof currentExercise === "undefined" && exercises.length
          ? "Rest"
          : exercises[currentExercise]?.name}
      </h2>
      {done && <h1 className="done">DONE!</h1>}
      <div className="controls">
        {typeof currentExercise === "undefined" && secondsLeft > 3 && (
          <button
            onClick={() => {
              clearTimeout(timer.current);
              setSecondsLeft(3);
              timer.current = setTimeout(tick, 1000);
            }}
          >
            I’m done resting!
          </button>
        )}
        {!done && (
          <button onClick={togglePause}>
            {pausedRef.current ? "Start" : "Pause"}
          </button>
        )}
        {resettable && (
          <button onClick={reset} disabled={!exercises?.length}>
            Reset
          </button>
        )}
      </div>
      {/* <pre>{JSON.stringify(exercises, null, 2)}</pre> */}
    </div>
  );
};

export default Counter;
