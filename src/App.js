import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Header from "./Components/Header";
import Hangman from "./Components/Hangman";
import WrongLetters from "./Components/WrongLetters";
import Word from "./Components/Word";
import Notification from "./Components/Notification";
import Popup from "./Components/Popup";
import { showNotification as show, checkWin } from "./helpers/Helpers"; // showNotification as a State
import "./App.css";

const words = ["hangman", "fox", "wrestling", "subaru", "python"]; //words are predefined
let selectedWord = words[Math.floor(Math.random() * words.length)]; //we are selecting a random word

function App() {
  // useState
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [playable, setPlayable] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  // useEffect - event listener , useEffect is the side effect of my app
  //within useEffect i create a function called handleKeydown
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    // event listener
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]); //useEffect ends here! },

  // Restart
  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="row mt-4">
          <div className=" hm col-12 col-sm-8">
            <Hangman wrongLetters={wrongLetters} />
          </div>
          <div className="wl col-12 col-sm-4">
            <WrongLetters wrongLetters={wrongLetters} />
          </div>

          <Word selectedWord={selectedWord} correctLetters={correctLetters} />
          <Popup
            correctLetters={correctLetters}
            wrongLetters={wrongLetters}
            selectedWord={selectedWord}
            setPlayable={setPlayable}
            playAgain={playAgain}
          />
        </div>
      </div>
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;

{
  /* //notification shows when we enter the same letter twice */
}
