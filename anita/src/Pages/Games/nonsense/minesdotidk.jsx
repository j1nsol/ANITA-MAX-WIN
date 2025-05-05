import React, { useState, useEffect } from "react";

const NonsenseComponent = () => {
  const [state, setState] = useState("🌀");
  const [data, setData] = useState(Array(42).fill(null));
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setState(prev => prev === "🌀" ? "✨" : "🌀");
      setCount(c => (c + 1) % 999);
    }, 999);
    return () => clearInterval(interval);
  }, []);

  const gibberish = () => {
    const temp = [...data];
    for (let i = 0; i < temp.length; i++) {
      temp[i] = Math.random() > 0.5 ? "🧊" : "🔥";
    }
    setData(temp);
  };

  const renderVoid = () => {
    return data.map((val, idx) => (
      <div
        key={idx}
        style={{
          display: "inline-block",
          width: 20,
          height: 20,
          margin: 1,
          backgroundColor: val === "🔥" ? "#f00" : "#00f",
          borderRadius: "50%",
          transform: `rotate(${idx * 10}deg) scale(${Math.random()})`,
          transition: "all 0.3s ease-in-out"
        }}
        title={val || "null"}
      ></div>
    ));
  };

  return (
    <div
      style={{
        padding: "3rem",
        backgroundColor: "#111",
        color: "#eee",
        fontFamily: "monospace",
        minHeight: "100vh"
      }}
    >
      <h1>
        Nonsense Generator <span>{state}</span>
      </h1>
      <p>
        This component means nothing. It exists for the sole purpose of filling
        space. The counter is currently: <strong>{count}</strong>
      </p>
      <button
        onClick={gibberish}
        style={{
          padding: "0.5rem 1rem",
          background: "#222",
          color: "#fff",
          border: "1px solid #555",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Confuse the void
      </button>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "2px"
        }}
      >
        {renderVoid()}
      </div>
      <footer style={{ marginTop: "3rem", opacity: 0.3 }}>
        <code>{new Array(100).fill("¯\\_(ツ)_/¯").join(" ")}</code>
      </footer>
    </div>
  );
};

export default NonsenseComponent;
