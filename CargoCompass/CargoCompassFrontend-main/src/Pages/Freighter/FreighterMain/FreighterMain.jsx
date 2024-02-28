import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux';
import './FreighterMain.css';
import { fetchActiveCargosCount } from '../../../Api/ApiCalls';
import { Link } from 'react-router-dom';
import FreighterDashboard from '../../../Components/Dashboard/FreighterDashboard';

const FreighterMain = (props) => {
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

    const sections = document.querySelectorAll('.freighter-dashboard-section');
    sections.forEach((section, index) => {
      section.style.animation = `slideIn 0.5s ease-out ${index * 0.3}s forwards`;
    });
  }, [id]);

  return (
    <div className="freighter-dashboard-container freighter-body">
      <FreighterDashboard/>

      <main className="freighter-dashboard-main">
        <section className="freighter-dashboard-section">
          <div className="freighter-section-header">
            <h2>Days Active Cargos</h2>
            <img src="https://shipper.yolda.com/assets/profile.svg" alt="Profile" />
          </div>
          <div className="freighter-section-content">
            <h3>{activeCargosCount} Active Cargos</h3> {/* Display the active cargos count */}
          </div>
        </section>

        <section className="freighter-dashboard-section">
          <div className="freighter-section-header">
            <h2>Upcoming Deliveries</h2>
            <img src="https://shipper.yolda.com/assets/icons/Truck.svg" alt="Truck" />
          </div>
          <div className="freighter-section-content">
            <h3>Estimated deliveries: {activeCargosCount+10}</h3>
          </div>
        </section>

        <section className="freighter-dashboard-section">
          <div className="freighter-section-header">
            <h2>Get Quote</h2>
            <img src="https://shipper.yolda.com/assets/icons/Truck.svg" alt="Truck" />
          </div>
          <div className="freighter-section-content">
            <h3>Work With Us</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci tenetur magni sed ea, quae maiores modi totam praesentium! Ut labore, et minus unde nisi vel reiciendis, debitis nemo sequi doloremque odio. Mollitia a quidem quisquam veniam? Explicabo aut suscipit qui! Sequi, consectetur aliquam. Reprehenderit ad dolorem aliquid quia neque ab.</p>
            <div className="freighter-quote-button-container">
              <Link to='/getquote'><button className="freighter-get-quote-button">Get Quote</button></Link>
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
export default connect(mapStateToProps)(FreighterMain)