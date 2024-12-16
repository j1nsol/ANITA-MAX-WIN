import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // For URL parameters
import { db } from '../firebase'; // Ensure Firebase is configured correctly
import { doc, getDoc } from 'firebase/firestore';

export function ApplicantList() {
  const { useruid, eventuid } = useParams(); // Retrieve URL parameters
  const [searchTerm, setSearchTerm] = useState('');
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        setLoading(true);

        // Reference to Firestore document
        const eventDocRef = doc(db, 'Events', useruid, 'HandledEvents', eventuid);
        const eventDocSnap = await getDoc(eventDocRef);

        if (eventDocSnap.exists()) {
          const data = eventDocSnap.data()?.Volunteers || {}; // Retrieve Volunteers field
          const applicantsList = Object.entries(data).map(([key, value]) => ({
            userid: key,
            username: value.username || 'Unknown',
            name: value.name || 'Unknown',
            approved: value.approved || false,
            attended: value.attended || false,
            rewarded: value.rewarded || false,
          }));
          setApplicants(applicantsList);
        } else {
          setApplicants([]); // No data found
        }
      } catch (err) {
        setError(`Failed to fetch applicants: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, [useruid, eventuid]);

  // Handle search input change
  const handleSearch = (event) => setSearchTerm(event.target.value);

  const TableRow = ({ applicant }) => (
    <div key={applicant.userid} className="table-row">
      <div className="table-cell">{applicant.username}</div>
      <div className="table-cell">{applicant.name}</div>
      <div className="table-cell">
        <button className="profile-button">Check Profile</button>
      </div>
      <div className="table-cell">
        <input type="checkbox" checked={applicant.approved}  />
      </div>
      <div className="table-cell">
        <input type="checkbox" checked={applicant.attended}  />
      </div>
      <div className="table-cell">
        <input type="checkbox" checked={applicant.rewarded}  />
      </div>
    </div>
  );

  return (
    <main className="event-container">
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <>
          <section className="search-section">
            <input
              type="text"
              placeholder="Search for a user"
              value={searchTerm}
              onChange={handleSearch}
              className="search-bar"
            />
          </section>

          <div className="table-header">
            <div className="table-cell">Username</div>
            <div className="table-cell">Name</div>
            <div className="table-cell">Profile Link</div>
            <div className="table-cell">Approved</div>
            <div className="table-cell">Attended</div>
            <div className="table-cell">Rewarded</div>
          </div>

          {applicants.length > 0 ? (
            applicants.map((applicant) => <TableRow key={applicant.userid} applicant={applicant} />)
          ) : (
            <p>No applicants found.</p>
          )}

          <style jsx>{`
            .event-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 20px;
              background-color: #f0f4f8;
              min-height: 100vh;
            }

            .search-section {
              margin-bottom: 20px;
              width: 100%;
              max-width: 600px;
            }

            .search-bar {
              width: 100%;
              padding: 10px;
              font-size: 16px;
              border: 1px solid #ccc;
              border-radius: 5px;
            }

            .table-header,
            .table-row {
              display: flex;
              justify-content: space-between;
              width: 100%;
              max-width: 800px;
              padding: 10px;
              background-color: #fff;
              margin-bottom: 5px;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            .table-cell {
              flex: 1;
              text-align: center;
            }

            .profile-button {
              padding: 5px 10px;
              border: none;
              border-radius: 5px;
              background-color: #007bff;
              color: white;
              cursor: pointer;
            }

            .profile-button:hover {
              background-color: #0056b3;
            }

            .error {
              color: red;
            }
          `}</style>
        </>
      )}
    </main>
  );
}

export default ApplicantList;
