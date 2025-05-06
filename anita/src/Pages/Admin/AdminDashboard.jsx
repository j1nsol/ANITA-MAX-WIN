
"use client";
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';

export function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    volunteers: 0,
    events: 0,
    users: 0
  });
  const [showModal, setShowModal] = useState(false);
const [selectedUsername, setSelectedUsername] = useState('');
const [tokenAmount, setTokenAmount] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [message, setMessage] = useState('');


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'User'));
        const userList = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            username: data.username || 'N/A',
            token: (data.token ?? 0).toFixed(2),
            verified: data.verified ? 'Yes' : 'No',
            email: data.email || '',
          };
        });
        setUsers(userList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // 1. Count total users
        const userSnapshot = await getDocs(collection(db, 'User'));
        const totalUsers = userSnapshot.size;
  
        // 2. Count HandledEvents and total Volunteers
        const eventsSnapshot = await getDocs(collection(db, 'Events'));
        let totalHandledEvents = 0;
        let totalVolunteers = 0;
  
        for (const userDoc of eventsSnapshot.docs) {
          const handledEventsRef = collection(db, `Events/${userDoc.id}/HandledEvents`);
          const handledEventsSnapshot = await getDocs(handledEventsRef);
  
          totalHandledEvents += handledEventsSnapshot.size;
  
          for (const eventDoc of handledEventsSnapshot.docs) {
            const volunteersRef = collection(db, `Events/${userDoc.id}/HandledEvents/${eventDoc.id}/Volunteers`);
            const volunteersSnapshot = await getDocs(volunteersRef);
            totalVolunteers += volunteersSnapshot.size;
          }
        }
  
        // Set state to update the stats UI
        setStats({
          users: totalUsers,
          events: totalHandledEvents,
          volunteers: totalVolunteers
        });
  
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };
  
    fetchStats();
  }, []);
  const handleAddTokens = async () => {
    if (!selectedUsername || !tokenAmount) {
      setMessage("Please fill in both fields.");
      return;
    }
  
    setIsLoading(true);
    setMessage("");
  
    try {
      // Find user by username
      const usersRef = collection(db, 'User');
      const q = query(usersRef, where('username', '==', selectedUsername));
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        setMessage("User not found.");
        setIsLoading(false);
        return;
      }
  
      const userDoc = querySnapshot.docs[0];
      const currentToken = userDoc.data().token || 0;
      const newToken = parseFloat(currentToken) + parseFloat(tokenAmount);
  
      await updateDoc(doc(db, 'User', userDoc.id), { token: newToken });
  
      setMessage("Tokens successfully added!");
    } catch (error) {
      console.error("Error adding tokens:", error);
      setMessage("Failed to add tokens.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <main className="dashboard-container">
        {/* Header Section */}
        <header className="header">
          <div className="logo-container">
            <img src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/f64440cbb0958c6d932df3e1da7c5c6cf8fb477f?placeholderIfAbsent=true" className="logo-image" alt="Company logo" />
            <img src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/e107fcfc8d0d49120fbaf125896306df81950855?placeholderIfAbsent=true" className="logo-text" alt="Company name" />
          </div>
          <div className="profile-container">
            <h2 className="profile-name">JZXY</h2>
            <img src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/32a8807e747bcb5bb4f0eff76072054ef9ba097d?placeholderIfAbsent=true" className="profile-image" alt="User profile" />
          </div>
        </header>

        {/* Dashboard Content */}
        <section className="dashboard-content">
          <div className="title-container">
            <h1 className="dashboard-title">Dashboard</h1>
          </div>

          <div className="content-wrapper">
            {/* Action Bar */}
            <div class= "container" style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="action-bar">
              <div className="search-container">
                <label className="search-label">Search</label>
                <img src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/a8e7cb19cc7c2732a06cf2ee6587d53738521c66?placeholderIfAbsent=true" className="search-icon" alt="Search icon" />
              </div>
              <button className="add-tokens-button" onClick={() => setShowModal(true)}>
                <span className="button-text">Add tokens</span>
              </button>
            </div>

            {/* Stats Section */}
            <section className="stats-container">
              <div className="stat-box">
                <h3 className="stat-title">VOLUNTEERS</h3>
                <p className="stat-value">{stats.volunteers}</p>
              </div>
              <div className="stat-box">
                <h3 className="stat-title">EVENTS</h3>
                <p className="stat-value">{stats.events}</p>
              </div>
              <div className="stat-box">
                <h3 className="stat-title">ACTIVE USER</h3>
                <p className="stat-value">{stats.users}</p>
              </div>
            </section>
            </div>

            {/* User Table */}
            <div className="table-container">
        <table className="user-table">
          <thead>
            <tr className="table-header">
              <th className="header-cell">Username</th>
              <th className="header-cell">Token</th>
              <th className="header-cell">Verified</th>
              <th className="header-cell">Email</th>
              <th className="header-cell">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={index % 2 === 0 ? 'table-row-even' : 'table-row-odd'}>
                <td className="table-cell">{user.username}</td>
                <td className="table-cell">{user.token}</td>
                <td className="table-cell">{user.verified}</td>
                <td className="table-cell">{user.email}</td>
                <td className="table-cell">
                  <button className="edit-button">edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

          </div>
        </section>
        {showModal && (
  <div className="modal-overlay">
    <div className={`modal-content ${isLoading ? 'blurred' : ''}`}>
      <button className="close-button" onClick={() => setShowModal(false)} disabled={isLoading}>
        &times;
      </button>
      <h2 className = "modal-title">Add Tokens</h2>
      <input
        type="text"
        placeholder="Username"
        value={selectedUsername}
        onChange={(e) => setSelectedUsername(e.target.value)}
        disabled={isLoading}
      />
      <input
        type="number"
        placeholder="Token Amount"
        value={tokenAmount}
        onChange={(e) => setTokenAmount(e.target.value)}
        disabled={isLoading}
      />
      <button onClick={handleAddTokens} disabled={isLoading}>
        Confirm
      </button>
      {message && <p>{message}</p>}
    </div>
  </div>
)}

      </main>

      <style jsx>{`
      .close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
}

.close-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

      .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  
  z-index: 999;
}

.modal-content {
 align-items: center;
background-color: #ffffff;
border: 1px solid;
border-color: #000000;
display: flex;
flex-direction: column;
height: 598px;
width: 765px;
justify-content: space-between;
padding: 40px 0px;
position: relative;
}

.modal-content.blurred {
  filter: blur(3px);
  pointer-events: none;
}

.modal-title {
font-family: Alexandria;
font-weight: 700;
font-size: 80px;
line-height: 100%;
letter-spacing: 0%;

}

.modal-content input {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  font-size: 18px;
}

.modal-content button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  background-color: #22333b;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

        .dashboard-container {
          display: flex;
          padding: 20px 44px;
          flex-direction: column;
          align-items: center;
          justify-content: start;
        }

        .header {
          display: flex;
          width: 100%;
          max-width: 1832px;
          align-items: center;
          gap: 40px 100px;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .logo-container {
          display: flex;
          min-width: 240px;
          align-items: center;
          justify-content: start;
          width: 301px;
        }

        .logo-image {
          aspect-ratio: 1.16;
          object-fit: contain;
          object-position: center;
          width: 102px;
          align-self: stretch;
          margin: auto 0;
          flex-shrink: 0;
        }

        .logo-text {
          aspect-ratio: 2.84;
          object-fit: contain;
          object-position: center;
          width: 199px;
          align-self: stretch;
          margin: auto 0;
          flex-shrink: 0;
        }

        .profile-container {
          display: flex;
          align-items: center;
          gap: 13px;
          font-family: Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          color: rgba(0, 0, 0, 1);
          font-weight: 700;
        }

        .profile-name {
          margin: auto 0;
          width: 77px;
        }

        .profile-image {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 80px;
          border-radius: 50%;
          margin: auto 0;
          flex-shrink: 0;
        }

        .dashboard-content {
          margin-top: 20px;
          max-width: 100%;
          width: 1832px;
        }

        .title-container {
          width: 100%;
          max-width: 1832px;
        }

        .dashboard-title {
          font-family: Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 64px;
          color: rgba(0, 0, 0, 1);
          font-weight: 700;
        }

        .content-wrapper {
          margin-top: 100px;
          width: 100%;
        }

        .action-bar {
          display: flex;
          align-items: center;
          gap: 40px 30px;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .search-container {
          border-radius: 20px;
          background-color: rgba(255, 255, 255, 1);
          border: 1px solid rgba(0, 0, 0, 1);
          display: flex;
          padding: 18px 22px;
          align-items: center;
          gap: 15px;
          font-family: Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          color: rgba(0, 0, 0, 1);
          font-weight: 500;
          flex-grow: 1;
          width: 300px;
        }

        .search-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 30px;
          flex-shrink: 0;
        }

        .add-tokens-button {
          border-radius: 20px;
          background-color: rgba(10, 10, 10, 1);
          min-height: 65px;
          padding: 12px 28px;
          font-family: PT Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 32px;
          color: #fffbff;
          font-weight: 700;
          border: none;
          cursor: pointer;
        }

        .stats-container {
          display: flex;
          min-width: 240px;
          margin: auto 0;
          align-items: center;
          gap: 13px;
          font-family: Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
          color: rgba(0, 0, 0, 1);
          text-align: center;
          justify-content: start;
          flex-wrap: wrap;
        }

        .stat-box {
          display: flex;
          margin: auto 0;
          padding: 1px 14px;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
          width: 159px;
        }

        .stat-title {
          font-size: 18px;
          font-weight: 600;
        }

        .stat-value {
          font-size: 64px;
          font-weight: 700;
          margin-top: 10px;
        }

        .table-container {
          margin-top: 10px;
          width: 100%;
          font-family: PT Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 32px;
          color: rgba(0, 0, 0, 1);
          font-weight: 700;
        }

        .user-table {
          border-radius: 20px;
          background-color: rgba(201, 202, 203, 0.5);
          min-height: 601px;
          width: 100%;
          padding-bottom: 20px;
        }

        .table-header {
          border-radius: 20px 20px 0 0;
          background-color: rgba(245, 245, 245, 1);
          min-height: 75px;
          text-align: center;
        }

        .header-cell {
          padding: 17px 28px;
          font-weight: 700;
        }

        .table-row-even {
          background-color: rgba(229, 229, 230, 1);
        }

        .table-row-odd {
          background-color: rgba(245, 245, 245, 1);
        }

        .table-cell {
          padding: 6px 28px;
          text-align: center;
        }

        .edit-button {
          color: #fffbff;
          text-shadow: 0px 4px 14px rgba(0, 0, 0, 0.45);
          border-radius: 5px;
          min-height: 63px;
          padding: 16px 28px;
          background-color: #22333b;
          border: none;
          cursor: pointer;
          font-size: 24px;
          font-weight: 700;
        }

        @media (max-width: 991px) {
          .dashboard-container {
            padding: 20px;
          }

          .header {
            max-width: 100%;
          }

          .dashboard-title {
            font-size: 40px;
          }

          .content-wrapper {
            margin-top: 40px;
          }

          .search-container {
            padding: 20px;
          }

          .add-tokens-button {
            padding: 20px;
          }

          .stat-value {
            font-size: 40px;
          }

          .table-container {
            max-width: 100%;
          }

          .header-cell,
          .table-cell {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}