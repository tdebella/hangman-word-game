import React, { useEffect } from "react";
import { checkWin } from "../helpers/Helpers";
import "./Popup.css";

// the popup enable us to check see if we win or lost & display d/t messages accordingly!
const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable, //setPlayable is a useEffect
  playAgain,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  // now let's import checkWin from the helper function
  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You won! 😃";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Unfortunately you lost. 😕";
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  // useEffect
  useEffect(() => setPlayable(playable));

  return (
    <div
      className="popup-container"
      style={finalMessage !== " " ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
