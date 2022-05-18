import React from "react";
import "./Hangman.css";
import HangmanCSS from "./Hangman.module.css";

// display parts - svg is a dynamic Hangman images
const Hangman = ({ wrongLetters }) => {
  const errors = wrongLetters.length;

  return (
    <>
      <svg height="250" width="200" className="hangman-container">
        {/* Rod   - is the pole or gallows */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        {/* Head          if errors > 0 draw head */}
        {errors > 0 && <circle cx="140" cy="70" r="20" />}
        {/* Body          if errors >1 draw body */}
        {errors > 1 && <line x1="140" y1="90" x2="140" y2="150" />}
        {/* Arms          if errors >2,3 draw 2 arms */}
        {errors > 2 && <line x1="140" y1="120" x2="120" y2="100" />}
        {errors > 3 && <line x1="140" y1="120" x2="160" y2="100" />}
        {/* Legs          if errors >4,5 draw 2 legs */}
        {errors > 4 && <line x1="140" y1="150" x2="120" y2="180" />}
        {errors > 5 && <line x1="140" y1="150" x2="160" y2="180" />}
        <button className={HangmanCSS.btn}>Hangman</button>
      </svg>
    </>
  );
};

export default Hangman;

// The image is NOT static, it will dynamically changed the more mistakes the person makes! We are not importing the image itself, as we add some height and other parts to it

// the Hangman, the mistakes and the gallows are columns and the word & where they located is the row!
