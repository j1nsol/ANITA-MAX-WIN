import React, { useState, useEffect } from "react";

const choices = [
  "Absolutely Maybe",
  "No, but also Yes",
  "Why Not?",
  "42",
  "Ask Again Later",
  "Loading...",
  "Try Turning It Off",
  "The Void Agrees",
  "🤷",
  "Confirmed by Quantum Dust"
];

const NonsenseComponentFive = () => {
  const [selected, setSelected] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [angle, setAngle] = useState(0);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const fullRotations = 5;
    const finalIndex = Math.floor(Math.random() * choices.length);
    const anglePerChoice = 360 / choices.length;
    const finalAngle = 360 * fullRotations + finalIndex * anglePerChoice;

    let currentAngle = 0;
    const duration = 3000;
    const start = performance.now();

    const animate = now => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      currentAngle = ease * finalAngle;
      setAngle(currentAngle);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        setSelected(choices[finalIndex]);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div
      style={{
        backgroundColor: "#0b0b0b",
        color: "#fff",
        fontFamily: "'Courier New', monospace",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem"
      }}
    >
      <h1 style={{ marginBottom: "1rem", fontSize: "2rem" }}>
        🔮 Quantum Decision Spinner
      </h1>
      <div
        style={{
          position: "relative",
          width: 300,
          height: 300,
          borderRadius: "50%",
          border: "10px solid #444",
          boxShadow: "0 0 20px #0ff8",
          transform: `rotate(${angle}deg)`,
          transition: isSpinning ? "none" : "transform 0.2s ease-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "conic-gradient(from 0deg, #222 0% 10%, #444 10% 20%, #666 20% 30%, #888 30% 40%, #aaa 40% 50%, #ccc 50% 60%, #eee 60% 70%, #ccc 70% 80%, #aaa 80% 90%, #888 90% 100%)"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20px",
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderBottom: "20px solid #ff0"
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            color: "#000",
            fontWeight: "bold",
            fontSize: "1.5rem",
            textShadow: "0 0 2px #fff"
          }}
        >
          🎲
        </div>
      </div>

      <button
        onClick={spinWheel}
        disabled={isSpinning}
        style={{
          marginTop: "2rem",
          padding: "1rem 2rem",
          fontSize: "1.1rem",
          backgroundColor: "#222",
          color: "#0ff",
          border: "2px solid #0ff",
          borderRadius: "10px",
          cursor: isSpinning ? "not-allowed" : "pointer"
        }}
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel of Destiny"}
      </button>

      {selected && !isSpinning && (
        <p style={{ marginTop: "2rem", fontSize: "1.3rem", opacity: 0.9 }}>
          🎉 Your Quantum Result: <strong>{selected}</strong>
        </p>
      )}
    </div>
  );
};

export default NonsenseComponentFive;
