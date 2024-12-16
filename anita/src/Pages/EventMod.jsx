import React, { useState } from 'react';

export function ApplicantList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('ascending');
  const [filterType, setFilterType] = useState('newest');
  const [profileStatus, setProfileStatus] = useState('active');

  const applicants = [
    {
      username: "Tenra",
      age: "18",
      name: "Ralph Humprey Delantar",
      approved: "true",
      attended: "false",
      rewarded: "false"
    },
    {
      username: "Maxi",
      age: "18", 
      name: "John Michael Santos",
      approved: "false",
      attended: "false",
      rewarded: "false"
    }
  ];

  const filteredApplicants = applicants.filter(applicant =>
    applicant.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortOrderChange = () => {
    setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
  };

  const handleFilterTypeChange = () => {
    setFilterType(filterType === 'newest' ? 'oldest' : 'newest');
  };

  const handleProfileStatusChange = () => {
    setProfileStatus(profileStatus === 'active' ? 'inactive' : 'active');
  };

  const FilterBox = ({ text, icon, onClick }) => (
    <div className="filter-component">
      <button 
        className="filter-box" 
        onClick={onClick}
        aria-label={`Filter by ${text}`}
      >
        <span className="filter-text">{text}</span>
        <img loading="lazy" src={icon} alt="" className="filter-icon" />
      </button>
    </div>
  );

  const TableRow = ({ username, age, name, approved, attended, rewarded }) => (
    <div className="table-row" role="row">
      <div className="table-cell table-cell-username">{username}</div>
      <div className="table-cell table-cell-age">{age}</div>
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
        <div className="checkbox-wrapper">
        <input 
              type="checkbox" 
              checked={approved === "true"} 
              readOnly 
              aria-label={`Approved status for ${username}`} 
            />
        </div>
      </div>
      <div className="table-cell table-cell-status">
        <div className="checkbox-wrapper">
            <input 
              type="checkbox" 
              checked={attended === "true"} 
              readOnly 
              aria-label={`Attended status for ${username}`} 
            />
        </div>
      </div>
      <div className="table-cell table-cell-status">
        <div className="checkbox-wrapper">
        <input 
              type="checkbox" 
              checked={rewarded === "true"} 
              readOnly 
              aria-label={`Rewarded status for ${username}`} 
            />
        </div>
      </div>
    </div>
  );
  

  return (
    <>
      <main className="event-container">
        <section className="event-frame" aria-label="Event Details">
          <div className="event-header">
            <div className="event-title">
              <h1 className="title-text">&quot;Green Thumb Day&quot; Park Cleanup</h1>
              <div className="org-name">Org/User Name</div>
            </div>
            <div className="icon-wrapper">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4eef2b778a378c85b3e3ecf7aa1b63b4916aa733d3106545e32a9d915da29caa?placeholderIfAbsent=true&apiKey=2293eafdf370425385c2452d5e99005b" alt="Event icon" className="icon" />
            </div>
          </div>

          <div className="search-section">
            <h2 className="section-title">Applicant List</h2>
            <div className="search-container">
              <div className="search-input-wrapper">
                <div className="search-input-container">
                  <div className="search-bar" role="search">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a08a02fa586e637275770359c97dee3a16f63421625744d3505426ee9546b18e?placeholderIfAbsent=true&apiKey=2293eafdf370425385c2452d5e99005b" alt="" className="search-icon" />
                    <input 
                      type="text" 
                      className="search-text" 
                      placeholder="Search for a user" 
                      aria-label="Search for a user"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </div>
                </div>
              </div>
              <button 
                className="search-button" 
                aria-label="Search"
              >
                <span className="text">Search</span>
              </button>
            </div>

            <div className="filter-container">
              <FilterBox 
                text="Ascending Order" 
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/75044048b69be8c8dd972c1a98a63725b125ea44eac299188100b8a584dbfb01?placeholderIfAbsent=true&apiKey=2293eafdf370425385c2452d5e99005b" 
                onClick={handleSortOrderChange}
              />
              <FilterBox 
                text="Newest Applicant" 
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/75044048b69be8c8dd972c1a98a63725b125ea44eac299188100b8a584dbfb01?placeholderIfAbsent=true&apiKey=2293eafdf370425385c2452d5e99005b" 
                onClick={handleFilterTypeChange}
              />
              <FilterBox 
                text="Active Profile" 
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/75044048b69be8c8dd972c1a98a63725b125ea44eac299188100b8a584dbfb01?placeholderIfAbsent=true&apiKey=2293eafdf370425385c2452d5e99005b" 
                onClick={handleProfileStatusChange}
              />
            </div>
          </div>

          <div className="table-header" role="row">
            <div className="table-cell table-cell-username">Username</div>
            <div className="table-cell table-cell-age">Age</div>
            <div className="table-cell table-cell-name">Name</div>
            <div className="table-cell table-cell-profile">Profile Link</div>
            <div className="table-cell table-cell-status">Approved</div>
            <div className="table-cell table-cell-status">Attendance</div>
            <div className="table-cell table-cell-status">Rewarded</div>
          </div>

          {applicants.map((applicant, index) => (
            <TableRow key={index} {...applicant} />
          ))}
        </section>
      </main>
      <style jsx>{`
        .event-container {
          display: flex;
          background-color: rgba(57, 153, 218, 1);
          min-height: 100vh;
          width: 100%;
          flex-direction: column;
          justify-content: start;
          align-items: center;
          margin-right: 20px;
          box-sizing: border-box;
          padding: 20px;
          overflow: hidden;
        }

        .event-frame {
          border-radius: 15px;
          background-color: rgba(214, 220, 231, 1);
          display: flex;
          width: 100%;
          max-width: 1200px;
          flex-direction: column;
          overflow: hidden;
          justify-content: start;
          padding: 20px;
          box-sizing: border-box;
        }

        .event-header {
          display: flex;
          width: 100%;
          gap: 10px;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .event-title {
          display: flex;
          min-width: 240px;
          min-height: 100px;
          flex-direction: column;
          font-family: Alexandria, sans-serif;
          color: rgba(34, 51, 58, 1);
          justify-content: center;
          width: auto;
          flex: 1;
          margin: auto 0;
          padding: 0 6px;
        }

        .title-text {
          font-size: 28px;
          font-weight: 700;
        }

        .org-name {
          font-size: 14px;
          font-weight: 400;
          margin-top: 10px;
        }

        .icon-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 41px;
        }

        .icon {
          aspect-ratio: 1.08;
          object-fit: contain;
          object-position: center;
          width: 41px;
          border-radius: 0px;
        }

        .search-section {
          border-radius: 10px 10px 0px 0px;
          background-color: rgba(229, 231, 235, 1);
          display: flex;
          min-height: 200px;
          width: 100%;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          padding: 10px 0 0 10px;
        }

        .section-title {
          min-height: 29px;
          width: 251px;
          max-width: 100%;
          padding-left: 14px;
          color: rgba(34, 51, 58, 1);
          font: 700 24px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .search-container {
          align-self: stretch;
          display: flex;
          margin-top: 10px;
          min-height: 59px;
          width: 100%;
          max-width: 1240px;
          align-items: center;
          gap: 20px;
          justify-content: start;
          flex-wrap: nowrap;
          flex-direction: row;
        }

        .search-input-wrapper {
          align-self: stretch;
          display: flex;
          min-width: 240px;
          padding-left: 14px;
          align-items: start;
          gap: 30px;
          color: rgba(34, 51, 59, 0.68);
          justify-content: start;
          width: 100%;
          margin: auto 0;
          font: 400 32px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .search-input-container {
          display: flex;
          min-width: 400px;
          width: 100%;
          align-items: start;
          gap: 10px;
          justify-content: start;
        }

        .search-bar {
          border-radius: 10px;
          background-color: rgba(255, 255, 255, 1);
          display: flex;
          min-width: 400px;
          width: 100%;
          align-items: center;
          gap: 30px;
          justify-content: start;
          flex-wrap: wrap;
          padding: 10px;
        }

        .search-icon {
          aspect-ratio: 1.03;
          object-fit: contain;
          object-position: center;
          width: 32px;
          align-self: stretch;
          margin: auto 0;
        }

        .search-text {
          align-self: stretch;
          flex: 1;
          flex-basis: 0%;
          margin: auto 0;
          border: none;
          outline: none;
          font-size: inherit;
          background: transparent;
        }

        .search-button {
          justify-content: center;
          align-items: center;
          border-radius: 5px;
          background: var(--Secondary, #22333b);
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.45);
          align-self: stretch;
          display: flex;
          min-height: 59px;
          gap: 8px;
          color: var(--Primary-scale-100, #fffbff);
          width: 160px;
          margin: auto 20px auto 0;
          padding: 17px 8px 17px 9px;
          font: 700 20px PT Sans, sans-serif;
          border: none;
          cursor: pointer;
        }

        .filter-container {
          display: flex;
          padding-bottom: 10px;
          align-items: start;
          color: rgba(102, 102, 102, 1);
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 100%;
          flex-direction: row;
          gap: 10px;
          font: 400 16px Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .filter-component {
          display: flex;
          min-width: auto;
          flex-direction: column;
          justify-content: center;
          width: auto;
          flex: 0 1 auto;
          padding: 6px 14px;
        }

        .filter-box {
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 1);
          box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          padding: 20px 16px;
          border: none;
          cursor: pointer;
        }

        .filter-text {
          align-self: stretch;
          width: 184px;
          margin: auto 0;
        }

        .filter-icon {
          aspect-ratio: 2;
          object-fit: contain;
          object-position: center;
          width: 10px;
          align-self: stretch;
          margin: auto 0;
        }

        .table-header,
        .table-row {
          background-color: rgba(255, 255, 255, 1);
          display: flex;
          min-height: 56px;
          width: 100%;
          align-items: center;
          overflow: hidden;
          color: rgba(102, 102, 102, 1);
          justify-content: space-between;
          flex-wrap: nowrap;
          flex-direction: row;
          padding: 10px 10px 0 0;
          font: 400 16px Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .table-cell {
          align-self: stretch;
          padding: 0 20px;
          gap: 10px;
          white-space: nowrap;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .table-cell-username {
          flex: 1;
          min-width: 100px;
        }

        .table-cell-age {
          flex: 0 0 60px;
          min-width: 60px;
          width: 60px;
        }

        .table-cell-name {
          flex: 1;
          min-width: 250px;
          width: 250px;
          text-align: center;
          justify-content: center;
        }

        .table-cell-profile {
          flex: 0 0 180px;
          min-width: 180px;
          width: 180px;
          text-align: center;
          justify-content: center;
        }

        .table-cell-status {
          flex: 0 0 80px;
          min-width: 100px;
          justify-content: center;
        }

        .profile-button {
          justify-content: center;
          align-items: center;
          border-radius: 5px;
          background: var(--Secondary, #22333b);
          box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.45);
          align-self: stretch;
          display: flex;
          gap: 8px;
          margin: auto 0;
          padding: 6px 8px;
          color: var(--Primary-scale-100, #fffbff);
          font: 700 20px PT Sans, sans-serif;
          border: none;
          cursor: pointer;
        }

        .checkbox-wrapper {
          align-self: stretch;
          display: flex;
          min-height: 24px;
          width: 24px;
          align-items: center;
          gap: 8px;
          justify-content: center;
          margin: auto 0;
        }

        .checkbox {
          align-self: stretch;
          display: flex;
          min-height: 24px;
          width: 24px;
          align-items: center;
          gap: 10px;
          justify-content: center;
          margin: auto 0;
          padding: 2px;
        }

        .checkbox-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 20px;
          align-self: stretch;
          margin: auto 0;
        }

        @media (max-width: 991px) {
          .event-container {
            max-width: 100%;
            padding: 100px 20px 0;
          }

          .event-frame {
            max-width: 100%;
            padding: 0 20px;
          }

          .event-header {
            max-width: 100%;
            flex-direction: column;
          }

          .event-title {
            max-width: 100%;
          }

          .title-text {
            max-width: 100%;
          }

          .search-section {
            max-width: 100%;
          }

          .search-container {
            max-width: 100%;
            flex-direction: row;
            flex-wrap: nowrap;
          }

          .search-input-wrapper {
            max-width: 100%;
            width: 100%;
          }

          .search-input-container {
            max-width: 100%;
          }

          .filter-container {
            max-width: 100%;
            width: 100%;
            flex-direction: row;
          }

          .table-header,
          .table-row {
            max-width: 100%;
            padding-left: 20px;
            padding-right: 20px;
            flex-direction: row;
            flex-wrap: nowrap;
            overflow-x: auto;
          }

          .table-cell {
            white-space: initial;
          }
        }
      `}</style>
    </>
  );
}
export default ApplicantList;