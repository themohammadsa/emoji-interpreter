import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🚣": "Person Rowing Boat",
  "⛹️": "Person Bouncing Ball",
  "🤸": "Person Cartwheeling",
  "🎪": "Circus Tent",
  "🎭": "Performing Arts",
  "🏹": "Bow and Arrow",
  "🧗": "Person Climbing",
  "🏇": "Horse Racing"
};

var emojiDB = Object.keys(emojiDictionary);

export default function App() {
  const [typo, setTypo] = useState("");

  function inputChange(event) {
    var input = event.target.value;
    var meaning = emojiDictionary[input];

    if (meaning === undefined) {
      meaning = "Sorry, This is not available in our database.";
    }
    setTypo(meaning);
  }

  function clickItemHandler(item) {
    var meaning = emojiDictionary[item];
    setTypo(meaning);
  }

  return (
    <div className="App">
      <h2> Welcome to the Emoji Interpreter! </h2>

      <input placeholder="Enter your Emoji" onChange={inputChange} />

      <h3 className="color"> {typo} </h3>

      <h3>Emojis in our Database are:</h3>
      {emojiDB.map(function (item) {
        return (
          <span
            onClick={() => clickItemHandler(item)}
            style={{ fontSize: "1.8rem", padding: "0.5rem", cursor: "pointer" }}
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
