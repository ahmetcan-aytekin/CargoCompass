import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux';
import './CarrierMain.css';
import { fetchActiveCargosCount } from '../../../Api/ApiCalls';
import { Link } from 'react-router-dom';
import CarrierDashboard from '../../../Components/CarrierDashboard/CarrierDashboard';

const CarrierMain = (props) => {
  const { id,username } = props; 
   const [activeCargosCount, setActiveCargosCount] = useState(0); 
   useEffect(() => {
    const loadActiveCargosCount = async () => {
      try {
        const response = await fetchActiveCargosCount(id);
        setActiveCargosCount(response.data); 
        console.log(response)
      } catch (error) {
        console.error('Error fetching active cargos count:', error);
       }
    };

    if (id) {
      loadActiveCargosCount();
    }

    const sections = document.querySelectorAll('.carrier-dashboard-section');
    sections.forEach((section, index) => {
      section.style.animation = `slideIn 0.5s ease-out ${index * 0.3}s forwards`;
    });
  }, [id]);

  return (
    <div className="carrier-dashboard-container carrier-body">
      <CarrierDashboard/>

      <main className="carrier-dashboard-main">
        <section className="carrier-dashboard-section">
          <div className="carrier-section-header">
            <h2>Days Active Cargos</h2>
            <img src="https://shipper.yolda.com/assets/profile.svg" alt="Profile" />
          </div>
          <div className="carrier-section-content">
            <h3>{activeCargosCount} Active Jobs</h3>
          </div>
        </section>

        <section className="carrier-dashboard-section">
          <div className="carrier-section-header">
            <h2>Upcoming Deliveries</h2>
            <img src="https://shipper.yolda.com/assets/icons/Truck.svg" alt="Truck" />
          </div>
          <div className="carrier-section-content">
            <h3>Estimated Jobs: {activeCargosCount+10}</h3>
          </div>
        </section>

        <section className="carrier-dashboard-section">
          <div className="carrier-section-header">
            <h2>Get Quote</h2>
            <img src="https://shipper.yolda.com/assets/icons/Truck.svg" alt="Truck" />
          </div>
          <div className="carrier-section-content">
            <h3>Find A Cargo</h3>
            <p>Find a cargo as you wish.</p>
            <div className="carrier-quote-button-container">
              <Link to='/getquote'><button className="carrier-get-quote-button">Find Cargo</button></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
      isLoggedIn: store.isLoggedIn,
      username: store.userFirstName,
      id: store.id,
  }

}
export default connect(mapStateToProps)(CarrierMain)