import React, { useState, useEffect, useRef } from "react";

const NonsenseComponentTwo = () => {
  const [mystery, setMystery] = useState("🔮");
  const [patterns, setPatterns] = useState([]);
  const [entropy, setEntropy] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMystery(m => (m === "🔮" ? "👁️" : "🔮"));
      setEntropy(e => (e + Math.floor(Math.random() * 10)) % 10000);
    }, 777);
    return () => clearTimeout(timer);
  }, [mystery, entropy]);

  useEffect(() => {
    const nonsenseArray = new Array(99).fill(null).map((_, i) => ({
      id: i,
      glyph: Math.random() > 0.5 ? "☯️" : "🧿",
      rotation: Math.random() * 360,
      size: 10 + Math.random() * 40
    }));
    setPatterns(nonsenseArray);
  }, [entropy]);

  const swirl = () => {
    const swirlData = patterns.map(p => ({
      ...p,
      glyph: p.glyph === "🧿" ? "☯️" : "🧿",
      rotation: (p.rotation + Math.random() * 45) % 360
    }));
    setPatterns(swirlData);
  };

  return (
    <div
      ref={containerRef}
      style={{
        background: "linear-gradient(to right, #1a1a1a, #0f0f0f)",
        color: "#f0f0f0",
        padding: "2rem",
        fontFamily: "Courier New, monospace",
        minHeight: "100vh"
      }}
    >
      <h2>
        Second Dose of Nonsense <span style={{ fontSize: "2rem" }}>{mystery}</span>
      </h2>
      <p>
        Entropy Level: <strong>{entropy}</strong>. Swirling deeper into the abyss.
      </p>
      <button
        onClick={swirl}
        style={{
          margin: "1rem 0",
          padding: "0.75rem 1.25rem",
          borderRadius: "8px",
          border: "1px dashed #444",
          backgroundColor: "#222",
          color: "#ccc",
          fontWeight: "bold",
          cursor: "crosshair"
        }}
      >
        Initiate Swirl
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(40px, 1fr))",
          gap: "5px",
          marginTop: "1rem"
        }}
      >
        {patterns.map(p => (
          <div
            key={p.id}
            style={{
              fontSize: `${p.size}px`,
              transform: `rotate(${p.rotation}deg)`,
              transition: "all 0.3s ease-in-out",
              textAlign: "center"
            }}
          >
            {p.glyph}
          </div>
        ))}
      </div>
      <marquee behavior="scroll" direction="left" style={{ marginTop: "2rem", opacity: 0.4 }}>
        {new Array(200).fill("👽🚀🛸👾").join(" ")}
      </marquee>
    </div>
  );
};

export default NonsenseComponentTwo;
