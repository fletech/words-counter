import React, { useState } from "react";
import Warning from "./Warning";
import { checkWord } from "../lib/utils";
import constants from "../lib/constans";

export default function Textarea({ setStats }) {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState({
    show: false,
    type: "",
    message: "",
  });

  const inputHandler = (event) => {
    let newText = event.target.value;

    let [isNotAllowed, word, type, replacedText] = checkWord(
      newText,
      constants.prohibitedWords
    );

    setWarning({
      show: isNotAllowed,
      type: type,
      message: isNotAllowed ? `You are not allowed to use ${word} word` : "",
    });

    isNotAllowed ? setText(replacedText) : setText(newText);
    setStats({
      numberOfCharacters: newText.length,
      numberOfWords: newText.split(/\s/).filter((word) => word !== "").length,
      instagramCharactersLeft: 280 - newText.length,
      facebookCharactersLeft: 2200 - newText.length,
    });
  };
  return (
    <>
      <textarea
        value={text}
        className="textarea"
        onChange={inputHandler}
        placeholder="Enter your text"
        spellCheck={false}
      ></textarea>
      {warning ? <Warning warning={warning} /> : null}
    </>
  );
}
