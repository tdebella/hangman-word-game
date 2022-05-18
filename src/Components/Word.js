import React from "react";
import "./Word.css";

// in order to get the displayed word, we need selectedWord & correctLetters
// show hidden word
//split() b/n characters. it returns an array of characters
const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
