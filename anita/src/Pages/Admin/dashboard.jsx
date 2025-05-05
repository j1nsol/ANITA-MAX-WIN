"use client";
import * as React from "react";
import { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState(() => "");
  const [activeUsers, setActiveUsers] = useState(() => 124);
  const [totalEvents, setTotalEvents] = useState(() => 56);
  const [volunteers, setVolunteers] = useState(() => 89);
  const [users, setUsers] = useState(() => [
    {
      id: 1,
      name: "John Smith",
      tokens: 450,
      verified: true,
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      tokens: 890,
      verified: true,
      email: "sarah@example.com",
    },
    {
      id: 3,
      name: "Mike Johnson",
      tokens: 230,
      verified: false,
      email: "mike@example.com",
    },
  ]);

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  function addTokens() {
    // Token addition logic
  }

  const [editUser, setEditUser] = useState(() => null);

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <div className="dashboard-content">
          <div className="header">
            <div className="logo-container">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f64440cbb0958c6d932df3e1da7c5c6cf8fb477f?placeholderIfAbsent=true&apiKey=a38f3cba0a6b4fdbabbbee8891d4e212"
                className="logo-image"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e107fcfc8d0d49120fbaf125896306df81950855?placeholderIfAbsent=true&apiKey=a38f3cba0a6b4fdbabbbee8891d4e212"
                className="logo-text"
              />
            </div>
            <div className="user-profile">
              <div className="username">
                JZXY
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32a8807e747bcb5bb4f0eff76072054ef9ba097d?placeholderIfAbsent=true&apiKey=a38f3cba0a6b4fdbabbbee8891d4e212"
                className="profile-image"
              />
            </div>
          </div>
          <div className="main-section">
            <div className="main-content">
              <div className="title-search-section">
                <div className="dashboard-title">
                  Dashboard
                </div>
                <div className="search-actions">
                  <div className="search-wrapper">
                    <input
                      className="search-input"
                      type="search"
                      placeholder="Search users..."
                      value={searchQuery}
                      onInput={(event) => handleSearch(event)}
                    />
                    <div className="search-icon">🔍</div>
                  </div>
                  <div className="add-tokens-button">
                    <div className="button-text">
                      Add tokens
                    </div>
                  </div>
                </div>
              </div>
              <div className="stats-container">
                <div className="stat-box">
                  <div className="stat-label">
                    ACTIVE USER
                  </div>
                  <div className="stat-value">{activeUsers}</div>
                </div>
                <div className="stat-box">
                  <div className="stat-label">
                    EVENTS
                  </div>
                  <div className="stat-value">{totalEvents}</div>
                </div>
                <div className="stat-box">
                  <div className="stat-label">
                    VOLUNTEERS
                  </div>
                  <div className="stat-value">{volunteers}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table-container">
          <div className="table-wrapper">
            <div className="table-header">
              <div>Username</div>
              <div>Tokens</div>
              <div>Verified</div>
              <div>Email</div>
              <div>Actions</div>
            </div>
            {users?.map((user) => (
              <div
                className="table-row"
                key={user.id}
              >
                <div>{user.name}</div>
                <div>{user.tokens}</div>
                <div>
                  <>
                    {user.verified ? <span>✓</span> : null}
                    {!user.verified ? <span>✗</span> : null}
                  </>
                </div>
                <div>{user.email}</div>
                <div>
                  <button
                    className="edit-button"
                    onClick={(event) => editUser(user.id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;