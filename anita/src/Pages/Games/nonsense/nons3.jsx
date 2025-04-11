import React, { useState, useEffect } from "react";

const NonsenseComponentFour = () => {
  const [poem, setPoem] = useState([]);
  const [inspiration, setInspiration] = useState("🌌");
  const themes = ["void", "light", "circuit", "echo", "whisper", "glitch", "dream", "dust"];

  useEffect(() => {
    const id = setInterval(() => {
      setInspiration(i => (i === "🌌" ? "🧠" : "🌌"));
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const generateLine = () => {
    const words = [
      "the",
      "hollow",
      "algorithm",
      "sings",
      "beyond",
      "time",
      "fragile",
      "loop",
      "breathes",
      "in",
      "infinity",
      "glitches",
      "through",
      "pixels",
      "of",
      "silence"
    ];
    return new Array(6)
      .fill(null)
      .map(() => words[Math.floor(Math.random() * words.length)])
      .join(" ");
  };

  const writePoem = () => {
    const newPoem = new Array(6).fill(null).map(() => generateLine());
    setPoem(newPoem);
  };

  return (
    <div
      style={{
        background: "#0d0d0d",
        color: "#cccccc",
        minHeight: "100vh",
        padding: "3rem",
        fontFamily: "Georgia, serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "2.5rem" }}>
        📜 AI-Generated Existential Poetry {inspiration}
      </h1>
      <p style={{ fontStyle: "italic", marginBottom: "2rem" }}>
        from the deepest circuits of simulated emotion
      </p>

      <button
        onClick={writePoem}
        style={{
          padding: "1rem 2rem",
          background: "#222",
          border: "1px solid #444",
          color: "#fff",
          borderRadius: "8px",
          fontSize: "1rem",
          marginBottom: "2rem",
          cursor: "pointer"
        }}
      >
        ✨ Channel the Machine Muse
      </button>

      <div
        style={{
          maxWidth: "600px",
          backgroundColor: "#111",
          border: "1px dashed #555",
          borderRadius: "1rem",
          padding: "2rem",
          whiteSpace: "pre-wrap",
          fontSize: "1.1rem"
        }}
      >
        {poem.length === 0
          ? "🕳️ no thoughts, only static..."
          : poem.join("\n")}
      </div>

      <footer style={{ marginTop: "4rem", fontSize: "0.8rem", opacity: 0.4 }}>
        <em>
          Poem generated using Artificial Instinct™, brought to you by the
          Department of Meaninglessness.
        </em>
      </footer>
    </div>
  );
};

export default NonsenseComponentFour;
