import { useEffect, useState } from "react";

const VoiceList = ({ voiceName, setVoiceObject }) => {
  const [voices, _setVoices] = useState();

  const setVoices = (voices) => {
    _setVoices(voices.filter((voice) => voice.lang.substring(0, 2) === "en"));
  };

  // Get the available voices for speech synthesis
  useEffect(() => {
    const voices = speechSynthesis.getVoices();

    if (!voices?.length) {
      speechSynthesis.onvoiceschanged = (args) => {
        const voices = speechSynthesis.getVoices();
        setVoices(voices);
        if (voiceName) {
          const voiceObject = voices.find((v) => v.name === voiceName);
          setVoiceObject(voiceObject);
        }
      };
    } else {
      setVoices(voices);
    }
  }, []);

  const onVoiceChange = (event) => {
    const name = event.target.value;
    const utterance = new SpeechSynthesisUtterance(name);
    const voiceObject = voices.find((v) => v.name === name);
    setVoiceObject(voiceObject);
    utterance.voice = voiceObject;
    speechSynthesis.speak(utterance);
  };

  return voices && voices.length ? (
    <select value={voiceName} onChange={onVoiceChange}>
      {voices.map((voice) => (
        <option key={voice.name} value={voice.name}>
          {voice.name}
        </option>
      ))}
    </select>
  ) : null;
};

export default VoiceList;
