import React, { useState, useEffect, useCallback } from 'react';
import DashboardSidebar from '../../../Components/Dashboard/FreighterDashboard';
import Spinner from '../../../Components/Spinner/Spinner';
import './MyOffers.css';
import { connect } from 'react-redux';
import { fetchOffersByStatus } from './fetchOffers';

const OFFER_STATUS = {
    PENDING: 'PENDING',
    ACCEPTED: 'ACCEPTED',
    REJECTED: 'REJECTED'
};
const Offers = (props) => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedTab, setSelectedTab] = useState(OFFER_STATUS.PENDING);
//     const{id}=props
//       useEffect(() => {
//         setLoading(true);
//         fetchOffersByStatus(selectedTab,id).then((data) => {
//           setOffers(data);
//           setLoading(false);
//         });
//       }, [selectedTab]);

//     const fetchOffers = useCallback(() => {
//         setLoading(true);
//         fetchOffersByStatus(selectedTab, id).then((data) => {
//           setOffers(data);
//           setLoading(false);
//         });
//       }, [selectedTab]);

//       useEffect(() => {
//         fetchOffers();
//       }, [fetchOffers]);



  
//     useEffect(() => {
//         const offerCards = document.querySelectorAll('.offer-card');
//         offerCards.forEach((card, index) => {
//             card.style.animation = `slideIn 0.5s ease-out ${(index + 1) * 0.2}s forwards`;
//         });
//     }, [offers]);
//     const handleOfferResponse = (offerId, status) => {
//         setLoading(true);
//         // API çağrısı yapmak için örnek kod. Gerçekte burada API isteği yapılacak.
//         setTimeout(() => {
//             fetchOffers();
//         }, 1000);
//     };
const fetchOffers = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
        const sampleData = [
            {
                id: 1,
                companyName: "Sample Company 1",
                cargoDescription: "Cargo 1 Description",
                transportType: "Truck",
                origin: "Istanbul",
                destination: "Ankara",
                weight: 5000,
                pickupDate: "2024-05-01",
                dropoffDate: "2024-05-03",
                amount: 12000,
                status: "PENDING"
            },
            {
                id: 2,
                companyName: "Sample Company 2",
                cargoDescription: "Cargo 2 Description",
                transportType: "Van",
                origin: "Izmir",
                destination: "Bursa",
                weight: 1500,
                pickupDate: "2024-05-05",
                dropoffDate: "2024-05-07",
                amount: 14000,
                status: "ACCEPTED"

            },
            // Diğer örnek veriler
        ];
        setOffers(sampleData.filter(offer => offer.status === selectedTab));
        setLoading(false);
    }, 1000);
}, [selectedTab]);
useEffect(() => {
    fetchOffers();
}, [fetchOffers]);
useEffect(() => {
    const offerCards = document.querySelectorAll('.offer-card');
    offerCards.forEach((card, index) => {
        card.style.animation = `slideIn 0.5s ease-out ${(index + 1) * 0.2}s forwards`;
    });
}, [offers]);
const handleOfferResponse = (offerId, status) => {
    setLoading(true);
    // API çağrısı yapmak için örnek kod. Gerçekte burada API isteği yapılacak.
    setTimeout(() => {
        fetchOffers();
    }, 1000);
};

    return (
        <div className="offers-dashboard-container">
            <DashboardSidebar />
            <main className="offers-main-content">
                <div className="offers-header">
                    <h1>My Offers</h1>
                    <div className="offers-tabs">
                        {Object.values(OFFER_STATUS).map((status) => (
                            <button
                                key={status}
                                onClick={() => !loading && setSelectedTab(status)}
                                className={`tab ${selectedTab === status ? 'active' : ''}`}
                                disabled={loading}
                            >
                                {status.charAt(0) + status.slice(1).toLowerCase()}
                            </button>
                        ))}
                    </div>
                </div>


                {loading ? (
                    <Spinner />
                ) : (
                    <div className="offers-list">
                        {offers.map((offer) => (
                            <div key={offer.id} className="offer-card">
                                <div className="offer-details">
                                    <h2>{offer.companyName}</h2>
                                    <p>Description: {offer.cargoDescription}</p>
                                    <p>Type: {offer.transportType}</p>
                                    <p>From: {offer.origin} - To: {offer.destination}</p>
                                    <p>Weight: {offer.weight} kg</p>
                                    <p>Pickup: {offer.pickupDate} - Dropoff: {offer.dropoffDate}</p>
                                    <p className="offer-amount">Offered Amount: ${offer.amount.toFixed(2)}</p>
                                </div>
                                <div className="offer-actions">
                                    {offer.status === 'PENDING' ? (
                                        <>
                                            <button className="accept-button" onClick={() => handleOfferResponse(offer.id, 'ACCEPTED')}>
                                                Accept
                                            </button>
                                            <button className="reject-button" onClick={() => handleOfferResponse(offer.id, 'REJECTED')}>
                                                Reject
                                            </button>
                                        </>
                                    ) : (
                                        <span className={`status ${offer.status.toLowerCase()}`}>{offer.status}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.isLoggedIn,
        username: store.userFirstName,
        id: store.id,
    }
  
  }
  export default connect(mapStateToProps)(Offers)
  
  