"use client"


import Sidebar from "../components/Sidebar/Sidebar";
import { UserTopBar } from "../components/Topbar/UserTopBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // or 'next/navigation' for Next.js
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { setDoc } from "firebase/firestore";
import { increment } from "firebase/firestore"; // at the top

const EventDashboard = () => {
  const { useruid, eventuid } = useParams();
  const [attendees, setAttendees] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedAttendee, setSelectedAttendee] = useState(null);
  const [tokenReward, setTokenReward] = useState(0);
  const [eventTitle, setEventTitle] = useState("Event");
  const [userTokens, setUserTokens] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ attendance: "", remarks: "" });

  const itemsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventRef = doc(db, "Events", useruid, "HandledEvents", eventuid);
        const eventDoc = await getDoc(eventRef);
        if (eventDoc.exists()) setEventTitle(eventDoc.data().EventTitle || "Event");

        const volunteersRef = collection(eventRef, "Volunteers");
        const volunteerSnapshots = await getDocs(volunteersRef);

        const volunteerData = await Promise.all(
          volunteerSnapshots.docs.map(async (docSnap) => {
            const volunteerUID = docSnap.id;
            const userDoc = await getDoc(doc(db, "User", volunteerUID));
            const userData = userDoc.data();
            return {
              id: volunteerUID,
              username: userData.username || "N/A",
              name: userData.firstName || "N/A",
              email: userData.email || "N/A",
              phone: userData.phone || "N/A",
              attendance: docSnap.data().attendance || "False",
              remarks: docSnap.data().remarks || "",
              paid: docSnap.data().paid || false,
            };
          })
        );

        setAttendees(volunteerData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (useruid && eventuid) fetchData();
  }, [useruid, eventuid]);

  const paidCount = attendees.filter(a => a.paid).length.toString().padStart(2, "0");
  const volunteersCount = attendees.length.toString().padStart(2, "0");

  const filteredAttendees = attendees.filter(
    ({ username, name, email }) =>
      username.toLowerCase().includes(searchValue.toLowerCase()) ||
      name.toLowerCase().includes(searchValue.toLowerCase()) ||
      email.toLowerCase().includes(searchValue.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const currentAttendees = filteredAttendees.slice(indexOfLastItem - itemsPerPage, indexOfLastItem);
  const totalPages = Math.ceil(filteredAttendees.length / itemsPerPage);

  const handleClearSearch = () => setSearchValue("");
  const goToPage = (page) => page > 0 && page <= totalPages && setCurrentPage(page);

  const startEditing = (attendee) => {
    setEditingId(attendee.id);
    setEditForm({ attendance: attendee.attendance, remarks: attendee.remarks });
  };

  const cancelEdit = () => setEditingId(null);
  const handleEditChange = ({ target: { name, value } }) => setEditForm(prev => ({ ...prev, [name]: value }));

  const saveEdit = async (id) => {
    try {
      const updated = { attendance: editForm.attendance, remarks: editForm.remarks };
      await setDoc(doc(db, "Events", useruid, "HandledEvents", eventuid, "Volunteers", id), updated, { merge: true });
      setAttendees(prev => prev.map(a => a.id === id ? { ...a, ...updated } : a));
      cancelEdit();
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  const handlePayClick = async (attendee) => {
    setSelectedAttendee(attendee);
    setShowModal(true);
    try {
      const eventDoc = await getDoc(doc(db, "Events", useruid, "HandledEvents", eventuid));
      const rewardValue = eventDoc.data()?.TokenReward || 0;
      setTokenReward(rewardValue);
      const userDoc = await getDoc(doc(db, "User", useruid));
      setUserTokens(userDoc.data()?.token || 0);
    } catch (err) {
      console.error("Error fetching tokens:", err);
    }
  };

  const confirmPayment = async () => {
    if (!selectedAttendee) return;
  
    const newTokenBalance = userTokens - tokenReward;
  
    if (newTokenBalance < 0) {
      alert("Insufficient tokens!");
      return;
    }
  
    try {
      // Deduct tokens from organizer
      await setDoc(doc(db, "User", useruid), { token: newTokenBalance }, { merge: true });
  
      // Credit tokens to volunteer
      await setDoc(
        doc(db, "User", selectedAttendee.id),
        { token: increment(tokenReward) },
        { merge: true }
      );
  
      // Mark volunteer as paid
      await setDoc(
        doc(db, "Events", useruid, "HandledEvents", eventuid, "Volunteers", selectedAttendee.id),
        { paid: true },
        { merge: true }
      );
  
      // Update local state
      setAttendees((prev) =>
        prev.map((a) => (a.id === selectedAttendee.id ? { ...a, paid: true } : a))
      );
  
      setShowModal(false);
      setSelectedAttendee(null);
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };
  {showModal && (
    <div style={styles.modalOverlay}>
      <div style={styles.modal}>
        <h3>Confirm Payment</h3>
        <p>Current Tokens: {userTokens}</p>
        <p>Reward: {tokenReward}</p>
        <p>Remaining After Payment: {userTokens - tokenReward}</p>
        <button onClick={confirmPayment} style={styles.confirmButton}>Confirm</button>
        <button onClick={() => setShowModal(false)} style={styles.cancelButtonmodal}>Cancel</button>
      </div>
    </div>
  )}

  return (
    <>
    <UserTopBar/>
    <Sidebar/>  
    <div style={styles.container}>
      <h1 style={styles.title}>{eventTitle}</h1>

      <div style={styles.searchAndCounters}>
        <div style={styles.searchContainer}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Value"
            style={styles.searchInput}
          />
          {searchValue && (
            <button onClick={handleClearSearch} style={styles.clearButton}>
              ×
            </button>
          )}
        </div>

        <div style={styles.countersContainer}>
          <div style={styles.counterBox}>
            <div style={styles.counterLabel}>PAID</div>
            <div style={styles.counterValue}>{paidCount}</div>
          </div>
          <div style={styles.counterBox}>
            <div style={styles.counterLabel}>VOLUNTEERS</div>
            <div style={styles.counterValue}>{volunteersCount}</div>
          </div>
        </div>
      </div>

      <div style={styles.tableContainer}>
        <div style={styles.tableHeader}>
          <div style={styles.headerCell}>Username</div>
          <div style={styles.headerCell}>Name</div>
          <div style={styles.headerCell}>Email</div>
          <div style={styles.headerCell}>Attendance</div>
          <div style={styles.headerCell}>Phone number</div>
          <div style={styles.headerCell}>Remarks/</div>
          <div style={styles.headerCell}>Payout</div>
          <div style={styles.headerCell}>Actions</div>
        </div>

        {currentAttendees.map((attendee) => (
          <div key={attendee.id} style={styles.tableRow}>
            <div style={styles.cell}>{attendee.username}</div>
            <div style={styles.cell}>{attendee.name}</div>
            <div style={styles.cell}>{attendee.email}</div>
            <div style={styles.cell}>
              {editingId === attendee.id ? (
                <select
                  name="attendance"
                  value={editForm.attendance}
                  onChange={handleEditChange}
                  style={styles.editInput}
                >
                  <option value="">Select</option>
                  <option value="True">True</option>
                  <option value="False">False</option>
                </select>
              ) : (
                attendee.attendance
              )}
            </div>
            <div style={styles.cell}>{attendee.phone}</div>
            <div style={styles.cell}>
              {editingId === attendee.id ? (
                <input
                  type="text"
                  name="remarks"
                  value={editForm.remarks}
                  onChange={handleEditChange}
                  style={styles.editInput}
                />
              ) : (
                attendee.remarks
              )}
            </div>
            <div style={styles.cell}>
            <button size="sm"
      variant="outline"
      className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
      onClick={() => handlePayClick(attendee)}
    >
  Pay
</button>
            </div>
            <div style={styles.cell}>
              {editingId === attendee.id ? (
                <div style={styles.editActions}>
                  <button style={styles.saveButton} onClick={() => saveEdit(attendee.id)}>
                    Save
                  </button>
                  <button style={styles.cancelButton} onClick={cancelEdit}>
                    Cancel
                  </button>
                </div>
              ) : (
                <button style={styles.editButton} onClick={() => startEditing(attendee)}>
                  Edit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div style={styles.pagination}>
        <button
          style={currentPage === 1 ? { ...styles.pageButton, ...styles.disabledButton } : styles.pageButton}
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <div style={styles.pageNumbers}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              style={number === currentPage ? { ...styles.pageButton, ...styles.activePageButton } : styles.pageButton}
              onClick={() => goToPage(number)}
            >
              {number}
            </button>
          ))}
        </div>
        {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3>Confirm Payment</h3>
            <p>Current Tokens: {userTokens}</p>
            <p>Reward: {tokenReward}</p>
            <p>Remaining After Payment: {userTokens - tokenReward}</p>
            <button onClick={confirmPayment} style={styles.confirmButton}>Confirm</button>
            <button onClick={() => setShowModal(false)} style={styles.cancelButtonmodal}>Cancel</button>
          </div>
        </div>
      )}

        <button
          style={currentPage === totalPages ? { ...styles.pageButton, ...styles.disabledButton } : styles.pageButton}
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
    </>
  )
}

const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10000000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    textAlign: "center",
  },
  confirmButton: {
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    marginRight: "10px",
    cursor: "pointer",
  },
  cancelButtonmodal: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
  },
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "1200px",
    margin: "160px 160px 160px 160px",
    padding: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "40px",
  },
  searchAndCounters: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  searchContainer: {
    position: "relative",
    width: "300px",
  },
  searchInput: {
    width: "100%",
    padding: "10px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  clearButton: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    color: "#999",
  },
  countersContainer: {
    display: "flex",
    gap: "20px",
  },
  counterBox: {
    textAlign: "center",
  },
  counterLabel: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  counterValue: {
    fontSize: "48px",
    fontWeight: "bold",
  },
  tableContainer: {
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
    marginBottom: "20px",
  },
  tableHeader: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    backgroundColor: "#f5f5f5",
    padding: "15px 10px",
    fontWeight: "bold",
  },
  headerCell: {
    padding: "0 10px",
  },
  tableRow: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    padding: "15px 10px",
    backgroundColor: "#e9e9e9",
    borderBottom: "1px solid #f5f5f5",
  },
  cell: {
    padding: "0 10px",
    display: "flex",
    alignItems: "center",
  },
  payButton: {
    backgroundColor: "#2c3e50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
  },
  editButton: {
    backgroundColor: "#2c3e50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
  },
  editInput: {
    padding: "6px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
  },
  editActions: {
    display: "flex",
    gap: "5px",
  },
  saveButton: {
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "6px 12px",
    cursor: "pointer",
    fontSize: "14px",
  },
  cancelButton: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "6px 12px",
    cursor: "pointer",
    fontSize: "14px",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginTop: "20px",
  },
  pageNumbers: {
    display: "flex",
    gap: "5px",
  },
  pageButton: {
    padding: "8px 12px",
    border: "1px solid #ddd",
    backgroundColor: "white",
    cursor: "pointer",
    borderRadius: "4px",
  },
  activePageButton: {
    backgroundColor: "#2c3e50",
    color: "white",
    borderColor: "#2c3e50",
  },
  disabledButton: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
}

export default EventDashboard
