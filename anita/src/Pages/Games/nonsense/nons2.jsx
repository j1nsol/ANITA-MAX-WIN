import React, { useState, useEffect } from "react";

const NonsenseComponentThree = () => {
  const [beepCount, setBeepCount] = useState(0);
  const [chaosLevel, setChaosLevel] = useState(0);
  const [emojiRain, setEmojiRain] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChaosLevel(c => (c + 1) % 360);
      const newEmoji = {
        id: Date.now() + Math.random(),
        symbol: ["💥", "🎉", "🪐", "🌪️", "🤖", "👻", "🎭", "🌀"][Math.floor(Math.random() * 8)],
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1
      };
      setEmojiRain(prev => [...prev.slice(-80), newEmoji]);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const pretendToBeep = () => {
    setBeepCount(b => b + 1);
    alert(`🔊 BEEP #${beepCount + 1} (Totally real)`);
  };

  return (
    <div
      style={{
        background: `conic-gradient(from ${chaosLevel}deg at center, #333, #111)`,
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "'Fira Code', monospace",
        position: "relative",
        overflow: "hidden",
        padding: "2rem"
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
        🎛️ Nonsense Synth Board 🎛️
      </h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Simulated Beeps: <strong>{beepCount}</strong> | Chaos Level: {chaosLevel}%
      </p>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={pretendToBeep}
          style={{
            backgroundColor: "#0ff",
            color: "#000",
            padding: "1rem 2rem",
            border: "none",
            borderRadius: "1rem",
            fontSize: "1.2rem",
            cursor: "pointer",
            boxShadow: "0 0 10px #0ff"
          }}
        >
          🔊 Beep (Totally Legit)
        </button>
      </div>

      {emojiRain.map(e => (
        <div
          key={e.id}
          style={{
            position: "absolute",
            top: `${e.top}%`,
            left: `${e.left}%`,
            fontSize: `${e.size}rem`,
            opacity: 0.6,
            animation: "floatDown 5s linear infinite"
          }}
        >
          {e.symbol}
        </div>
      ))}

      <style>{`
        @keyframes floatDown {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(50vh) rotate(180deg); opacity: 0.4; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default NonsenseComponentThree;
//neither this should be