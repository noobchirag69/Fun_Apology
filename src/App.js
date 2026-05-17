import React, { useState } from "react";
import "./App.css";

const App = () => {
  const apologies = [
    {
      message: "I'm really sorry for hurting you. 😔",
      emoji: "🙏",
      sticker: "💔",
      yesText: "I forgive you",
      noText: "Nah, try harder",
    },
    {
      message: "I apologize sincerely for my mistakes. 😞",
      emoji: "😭",
      sticker: "🌹",
      yesText: "I believe you",
      noText: "Convince me more",
    },
    {
      message: "Please forgive me, I truly regret what happened. 🥺",
      emoji: "💜",
      sticker: "🦋",
      yesText: "All is forgiven",
      noText: "Keep trying",
    },
    {
      message: "I'm deeply sorry for interrupting you. I didn't mean to. 😢",
      emoji: "💔",
      sticker: "⭐",
      yesText: "Okay, I forgive you",
      noText: "Maybe later",
    },
    {
      message: "You deserve better, and I'm sorry I let you down. 😔",
      emoji: "🙏",
      sticker: "🌟",
      yesText: "I hear you",
      noText: "Say it again",
    },
    {
      message: "Please accept my sincere apologies. I promise to do better. 💔",
      emoji: "😭",
      sticker: "✨",
      yesText: "I trust you",
      noText: "Not convinced",
    },
    {
      message: "I'm truly sorry. Can we please move past this? 🥺",
      emoji: "💜",
      sticker: "🌈",
      yesText: "Yes, let's move on",
      noText: "One more time",
    },
    {
      message: "Forgive me? I can't apologize enough for what I've done. 😢",
      emoji: "🙏",
      sticker: "💕",
      yesText: "You're forgiven!",
      noText: "No way out now 😉",
    },
  ];

  const [currentApology, setCurrentApology] = useState(0);

  const handleNo = () => {
    if (currentApology < apologies.length - 1) {
      setCurrentApology(currentApology + 1);
    }
  };

  const handleYes = () => {
    // Final acceptance screen
    setCurrentApology(apologies.length);
  };

  const reset = () => {
    setCurrentApology(0);
  };

  // Check if we should show the No button
  const showNoButton = currentApology < apologies.length - 1;

  // Final acceptance screen
  if (currentApology === apologies.length) {
    return (
      <div className="container">
        <div className="final-screen">
          <div className="final-emoji">🎉✨💕</div>
          <h1>Thank You! 💖</h1>
          <p className="final-message">
            Your forgiveness means the world to me. I know I can be a pain in
            the ass sometimes but nothing is more important to me than your
            happiness!
          </p>
          <button onClick={reset} className="reset-btn">
            Wanna hear my apologies again? Start Over!
          </button>
        </div>
      </div>
    );
  }

  // Main apology screen
  const current = apologies[currentApology];

  return (
    <div className="container">
      <div className="card">
        <div className="stickers">
          <span className="sticker left">{current.sticker}</span>
          <span className="sticker right">{current.sticker}</span>
        </div>

        <div className="emoji-large">{current.emoji}</div>

        <h1 className="apology-message">{current.message}</h1>

        <div className="button-group">
          <button onClick={handleYes} className="btn btn-yes">
            {current.yesText}
          </button>
          {showNoButton && (
            <button onClick={handleNo} className="btn btn-no">
              {current.noText}
            </button>
          )}
        </div>

        <p className="hint">{!showNoButton && "You know you want to! 😊"}</p>
      </div>
    </div>
  );
};

export default App;
