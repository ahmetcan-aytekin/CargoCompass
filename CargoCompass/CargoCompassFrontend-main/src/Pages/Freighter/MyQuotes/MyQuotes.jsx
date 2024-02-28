import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import DashboardSidebar from '../../../Components/Dashboard/FreighterDashboard';
import Spinner from '../../../Components/Spinner/Spinner';
import { fetchActiveCargosList } from '../../../Api/ApiCalls';
import './MyQuotes.css';

const MyQuotes = (props) => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('AWAITING_PICKUP');
  const { id,username } = props; 
   const QUOTE_STATUS = {
    AWAITING_PICKUP: 'Awaiting Pickup',
    ASSIGNED_TO_CARRIER: 'Assigned to Carrier',
    IN_TRANSIT: 'In Transit',
    DELIVERED: 'Delivered',
    CANCELLED: 'Cancelled'
  };
  useEffect(() => {
    fetchQuotes(activeTab);
  }, [activeTab]);

  useEffect(() => {
    const quoteCards = document.querySelectorAll('.quote-card');
    quoteCards.forEach((card, index) => {
      card.style.animation = `slideIn 0.5s ease-out ${(index + 1) * 0.2}s forwards`;
    });
  }, [quotes]);

  const fetchQuotes = async (tabStatus) => {
    setLoading(true);
    try {
      const response = await fetchActiveCargosList(props.id);
      console.log(response.data)
      const filteredQuotes = response.data.filter(quote => quote.status === tabStatus);
      console.log(filteredQuotes)
      setQuotes(filteredQuotes);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabClick = (statusKey) => {
    if (!loading) {
      setActiveTab(statusKey);
    }
  };

  const handleShowDetails = (quoteId) => {
    console.log('Show details for quote:', quoteId);
  };

  return (
    <div className="quotes-dashboard-container body">
      <DashboardSidebar />
      <main className="quotes-main-content">
        <div className="quotes-header">
          <h1>My Quotes</h1>
          <div className="quotes-tabs">
            {Object.entries(QUOTE_STATUS).map(([statusKey, statusValue]) => (
              <button
                key={statusKey}
                className={`tab ${activeTab === statusKey ? 'active' : ''}`}
                onClick={() => handleTabClick(statusKey)}
              >
                {statusValue}
              </button>
            ))}
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="quotes-list">
            {quotes.map((quote, index) => (
              <div className="quote-card" key={quote.id} onClick={() => handleShowDetails(quote.id)}>
                <div className="quote-detail">
                  <div className="quote-info">
                    <h2>Quote id: {quote.id}</h2>
                    <div className="detail-row">
                        <p><strong>Route:</strong> {quote.origin} - {quote.destination}</p>
                        <p><strong>Pickup Date:</strong>{quote.estimatedDepartureDate}</p>
                        <p><strong>Dropoff Date:</strong>{quote.estimatedArrivalDate}</p>
                        <p><strong>Weight </strong> {quote.weight} Kg</p>
                        <p><strong>Yuk Turu</strong> {quote.transportType}</p>

                      </div>
                      <div className="detail-row">
                        <p><strong>Pickup Details:</strong> 1 unit of Semi Truck, Mega Tautliner</p>
                      </div>
                    <button className="details-button" onClick={() => handleShowDetails(quote.id)}>Details</button>
                    <div className="quote-status">
                      <span className={`status ${quote.status.replace(' ', '-').toLowerCase()}`}>{quote.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
const mapStateToProps = (store) => {
  console.log('Redux Store Data:', store);
  return {
    isLoggedIn: store.isLoggedIn,
    username: store.userFirstName,
    id: store.id,
  };
};

export default connect(mapStateToProps)(MyQuotes);
