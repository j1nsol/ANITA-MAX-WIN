import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';

export function ApplicantList({ useruid, eventuid }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        setLoading(true);
        const db = getDatabase();
        const applicantsRef = ref(db, `Events/${useruid}/HandledEvents/${eventuid}/Volunteers`);
        const snapshot = await get(applicantsRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const applicantsList = Object.keys(data).map((key) => ({
            userid: key,
            username: data[key]?.username || '',
            name: data[key]?.name || '',
            approved: data[key]?.approved || false,
            attended: data[key]?.attended || false,
            rewarded: data[key]?.rewarded || false,
          }));
          setApplicants(applicantsList);
        } else {
          setApplicants([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, [useruid, eventuid]);

  const filteredApplicants = applicants.filter(applicant =>
    applicant.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const TableRow = ({ username, name, approved, attended, rewarded }) => (
    <div className="table-row" role="row">
      <div className="table-cell table-cell-username">{username}</div>
      <div className="table-cell table-cell-name">{name}</div>
      <div className="table-cell table-cell-profile">
        <button 
          className="profile-button"
          aria-label={`Check ${username}'s profile`}
        >
          <span className="text">Check Profile</span>
        </button>
      </div>
      <div className="table-cell table-cell-status">
        <input 
          type="checkbox" 
          checked={approved} 
          readOnly 
          aria-label={`Approved status for ${username}`} 
        />
      </div>
      <div className="table-cell table-cell-status">
        <input 
          type="checkbox" 
          checked={attended} 
          readOnly 
          aria-label={`Attended status for ${username}`} 
        />
      </div>
      <div className="table-cell table-cell-status">
        <input 
          type="checkbox" 
          checked={rewarded} 
          readOnly 
          aria-label={`Rewarded status for ${username}`} 
        />
      </div>
    </div>
  );

  return (
    <>
      <main className="event-container">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <>
            <section className="search-section">
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Search for a user" 
                  value={searchTerm}
                  onChange={handleSearch}
                  className="search-bar"
                />
              </div>
            </section>

            <div className="table-header" role="row">
              <div className="table-cell table-cell-username">Username</div>
              <div className="table-cell table-cell-name">Name</div>
              <div className="table-cell table-cell-profile">Profile Link</div>
              <div className="table-cell table-cell-status">Approved</div>
              <div className="table-cell table-cell-status">Attendance</div>
              <div className="table-cell table-cell-status">Rewarded</div>
            </div>

            {filteredApplicants.map((applicant, index) => (
              <TableRow key={index} {...applicant} />
            ))}
          </>
        )}
      </main>
    </>
  );
}

export default ApplicantList;
