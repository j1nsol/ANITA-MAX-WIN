import React from "react";
import "./Hilo.css"; // Optional if you'd like to maintain a separate CSS file

const HiloCardGame = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "url('images/back.png') no-repeat center center fixed",
        color: "#060607",
        textAlign: "center",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <div
          className="left-container"
          style={{
            width: "250px",
            backgroundColor: "#333333",
            padding: "20px",
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            marginRight: "20px",
            display: "flex",
            height: "70vh",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            className="bet-info-container"
            style={{
              backgroundColor: "#EAE0D5",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
              textAlign: "center",
              height: "40vh",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <h3>HISTORY</h3>
            <ul
              id="bet-history-list"
              style={{ listStyleType: "none", padding: 0, margin: 0 }}
            ></ul>
          </div>

          <div
            className="top-containers"
            style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}
          >
            <div
              className="balance-container"
              style={{
                backgroundColor: "#EAE0D5",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                width: "45%",
              }}
            >
              <h3>Balance</h3>
              <p id="balance">1000</p>
            </div>
            <div
              className="wins-container"
              style={{
                backgroundColor: "#EAE0D5",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                width: "45%",
              }}
            >
              <h3>Wins</h3>
              <p id="wins">0</p>
            </div>
          </div>

          <div
            className="betting-container"
            style={{
              backgroundColor: "#EAE0D5",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <p>Place Your Bet:</p>
            <select id="bet-amount" style={{ fontSize: "16px", padding: "5px", margin: "0 10px" }}>
              {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
            <button
              id="place-bet"
              style={{
                fontSize: "16px",
                padding: "5px 10px",
                backgroundColor: "#DAD4B5",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Place Bet
            </button>
            <p id="message" style={{ fontSize: "18px", margin: "20px 0", color: "#000" }}></p>
          </div>
        </div>

        <div className="game-container">
          <h1 style={{ fontSize: "30px", marginBottom: "25px" }}>Hi-Lo Card Game</h1>
          <div
            className="card-layout"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}
          >
            <button id="lower" style={{ padding: "10px", cursor: "pointer" }}>
              <img src="images/down.png" alt="Lower" style={{ width: "70px" }} />
            </button>
            <div className="card-container" style={{ perspective: "1000px", display: "inline-block" }}>
              <img id="current-card" src="images/red_joker.png" alt="Card" style={{ width: "250px" }} />
              <img
                id="previous-card"
                src="images/back.png"
                alt="Previous Card"
                style={{ position: "absolute", bottom: 0, right: -100, width: "100px", opacity: 0.8 }}
              />
            </div>
            <button id="higher" style={{ padding: "10px", cursor: "pointer" }}>
              <img src="images/Up.png" alt="Higher" style={{ width: "70px" }} />
            </button>
          </div>

          <button id="skip" style={{ position: "absolute", top: "10px", right: "330px" }}>Skip</button>
        </div>
      </div>
    </div>
  );
};

export default HiloCardGame;
