import useLocalStorage from "./hooks/useLocalStorage";
import Config from "./Config";
import Counter from "./Counter";
import "./App.css";

import { ReactComponent as ListIcon } from "./icons/list.svg";
import { ReactComponent as FullScreenIcon } from "./icons/full-screen.svg";

import workouts from "./workouts.js";
import configOpenSoundUrl from "./sounds/general/Pause Sounds/sfx_sounds_pause7_out.wav";
import configCloseSoundUrl from "./sounds/general/Pause Sounds/sfx_sounds_pause7_in.wav";
import fullscreenSoundUrl from "./sounds/general/Interactions/sfx_sounds_interaction24.wav";
import { useCallback, useEffect, useState } from "react";

const configOpenSound = new Audio(configOpenSoundUrl);
const configCloseSound = new Audio(configCloseSoundUrl);
const fullscreenSound = new Audio(fullscreenSoundUrl);

function App() {
  const [hideConfig, setHideConfig] = useLocalStorage("hideConfig", false);
  const [sets, setSets] = useLocalStorage("sets", 5);
  const [rest, setRest] = useLocalStorage("rest", 60);
  const [exercises, setExercises] = useLocalStorage("exercises", []);
  const [selectedWorkout, setSelectedWorkout] = useLocalStorage("workout", 0);
  const [soundEnabled, setSoundEnabled] = useLocalStorage("souneEnabled", true);
  const [speechEnabled, setSpeechEnabled] = useLocalStorage(
    "speechEnabled",
    true
  );
  const [voiceName, setVoiceName] = useLocalStorage("voice");
  const [voice, setVoice] = useState(null);

  const [wakeLock, setWakeLock] = useState(null);

  useEffect(() => {
    if (!exercises.length) {
      setHideConfig(false);
    }
  }, []); // eslint-disable-line

  const play = useCallback(
    (sound, force = false) => {
      if (soundEnabled || force) {
        sound.play();
      }
    },
    [soundEnabled]
  );

  const say = useCallback(
    (text, delay = 500) => {
      if (soundEnabled && speechEnabled) {
        setTimeout(() => {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.voice = voice;
          speechSynthesis.speak(utterance);
        }, delay);
      }
    },
    [soundEnabled, speechEnabled, voice]
  );

  useEffect(() => {
    if (voice) {
      setVoiceName(voice.name);
    }
  }, [voice, setVoiceName]);

  const toggleFullScreen = async () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setWakeLock(await navigator.wakeLock.request("screen"));
    } else if (document.exitFullscreen) {
      wakeLock.release();
      setWakeLock(null);
      document.exitFullscreen();
    }
    play(fullscreenSound);
  };

  return (
    <div className="App">
      <Config
        hideConfig={hideConfig}
        setHideConfig={setHideConfig}
        sets={sets}
        setSets={setSets}
        rest={rest}
        setRest={setRest}
        exercises={exercises}
        setExercises={setExercises}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        speechEnabled={speechEnabled}
        setSpeechEnabled={setSpeechEnabled}
        voiceName={voiceName}
        voice={voice}
        setVoice={setVoice}
        play={play}
        workouts={workouts}
        selectedWorkout={selectedWorkout}
        setSelectedWorkout={setSelectedWorkout}
      />
      <menu className="utility">
        <button
          title="Configuration"
          className={`pixel-icon toggle-config ${hideConfig ? "show" : "hide"}`}
          onClick={() => {
            if (hideConfig) {
              play(configOpenSound);
            } else {
              play(configCloseSound);
            }
            setHideConfig(!hideConfig);
          }}
        >
          <ListIcon alt={`${hideConfig ? "Show" : "Hide"} config`} />
        </button>
        <button
          title="Full Screen"
          className="pixel-icon toggle-full-screen"
          onClick={toggleFullScreen}
        >
          <FullScreenIcon alt="Toggle Full Screen" />
        </button>
      </menu>
      <Counter
        sets={sets}
        rest={rest}
        exercises={exercises}
        say={say}
        play={play}
        setHideConfig={setHideConfig}
      />
    </div>
  );
}

export default App;
