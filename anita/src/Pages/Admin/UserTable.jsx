export default function UserTable() {
    return (
      <section className="table-section">
        <div className="table-container">
          <div className="table-header">
            <div className="header-row">
              <h3 className="header-cell">Username</h3>
              <h3 className="header-cell">Token</h3>
              <h3 className="header-cell">Verified</h3>
              <h3 className="header-cell">Email</h3>
              <h3 className="header-cell">Actions</h3>
            </div>
          </div>
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className={`table-row ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <div className="row-cell">sample username</div>
              <div className="row-cell">9999</div>
              <div className="row-cell">Yes</div>
              <div className="row-cell">sampleemail@gmail.com</div>
              <div className="row-cell">
                <button className="edit-button">edit</button>
              </div>
            </div>
          ))}
        </div>
  
        <style jsx>{`
          .table-section {
            margin-top: 10px;
            width: 100%;
            font-family: PT Sans, -apple-system, Roboto, Helvetica, sans-serif;
            font-size: 32px;
            color: rgba(0, 0, 0, 1);
            font-weight: 700;
          }
  
          .table-container {
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
            width: 100%;
            padding: 17px 28px;
          }
  
          .header-row {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: start;
            flex-wrap: wrap;
          }
  
          .header-cell {
            flex: 1;
            text-align: center;
            margin: auto 0;
            font-size: 32px;
            font-weight: 700;
          }
  
          .table-row {
            display: flex;
            min-height: 75px;
            width: 100%;
            padding: 6px 28px;
            align-items: center;
          }
  
          .row-cell {
            flex: 1;
            text-align: center;
            margin: auto 0;
          }
  
          .odd {
            background-color: rgba(229, 229, 230, 1);
          }
  
          .even {
            background-color: rgba(245, 245, 245, 1);
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
            .table-header,
            .table-row {
              padding-left: 20px;
              padding-right: 20px;
            }
          }
        `}</style>
      </section>
    );
  }