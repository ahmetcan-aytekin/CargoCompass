import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CarrierDashboard.css';
import { connect } from 'react-redux';
import { logoutSuccess } from '../../Redux/authActions';

const CarrierDashboard = (props) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const { isLoggedIn, onLogoutSuccess, username, id } = props;

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  return (
    <div>
      <button onClick={toggleSidebar} className="carrier-sidebar-toggle">
        ☰
      </button>
      <aside className={`carrier-dashboard-sidebar ${showSidebar ? '' : 'collapsed'}`}>
        <div className="carrier-sidebar-header">
          <h1><Link to='/cdashboard'>Cargo Compass</Link></h1>
        </div>
        <nav className={`carrier-sidebar-nav ${showSidebar ? '' : 'hidden'}`}>
        <Link to='/cdashboard' className="carrier-nav-item">
            <span className="carrier-nav-icon">📊</span>
            <span className="carrier-nav-text">Dashboard</span>
          </Link>
          <Link to='/cquotes' className="carrier-nav-item">
            <span className="carrier-nav-icon">📝</span> 
            <span className="carrier-nav-text">Quotes</span>
          </Link>
          <Link to='/myjobs' className="carrier-nav-item">
            <span className="carrier-nav-icon">💲</span> 
            <span className="carrier-nav-text">My Jobs</span>
          </Link>
          <Link to='/invoices' className="carrier-nav-item">
            <span className="carrier-nav-icon">📦</span> 
            <span className="carrier-nav-text">Invoice</span>
          </Link>
        </nav>

        <div className={`carrier-user-bar ${showSidebar ? '' : 'hidden'}`} onClick={toggleProfileOptions}>
          <span className="carrier-user-icon">👤</span> {/* User icon */}
          <span className="carrier-user-name">{username}</span>
          {showProfileOptions && (
            <div className="carrier-profile-dropdown">
              <button className="carrier-user-btn"><Link to='/userprofile'>View Profile</Link></button>
              <Link to='/'><button onClick={onLogoutSuccess} className="carrier-logout-btn">Log Out</button></Link>
            </div>
          )}
        </div>
        <div className="carrier-sidebar-footer">
          <Link to='/help'><button className="carrier-help-btn">🆘 Need help?</button></Link>
        </div>
        <div className="carrier-sidebar-footer">
          <Link to='/contact'><button className="carrier-help-btn">📞 Contact Us</button></Link>
        </div>

      </aside>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutSuccess: () => {
      dispatch(logoutSuccess());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarrierDashboard);
