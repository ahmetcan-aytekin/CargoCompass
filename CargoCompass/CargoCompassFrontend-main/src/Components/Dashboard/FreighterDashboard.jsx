import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './FreighterDashboard.css';
import { connect } from 'react-redux';
import { logoutSuccess } from '../../Redux/authActions';

const FreighterDashboard = (props) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const { isLoggedIn, onLogoutSuccess, username, id } = props;
  console.log(id)
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  return (
    <div>
      <button onClick={toggleSidebar} className="freighter-sidebar-toggle">
        ☰
      </button>
      <aside className={`freighter-dashboard-sidebar ${showSidebar ? '' : 'collapsed'}`}>
        <div className="freighter-sidebar-header">
          <h1><Link to='/fdashboard'>Cargo Compass</Link></h1>
        </div>
        <nav className={`freighter-sidebar-nav ${showSidebar ? '' : 'hidden'}`}>
          <Link to='/fdashboard' className="freighter-nav-item">
            <span className="freighter-nav-icon">📊</span>
            <span className="freighter-nav-text">Dashboard</span>
          </Link>
          <Link to='/myquotes' className="freighter-nav-item">
            <span className="freighter-nav-icon">📦</span>
            <span className="freighter-nav-text">My Quotes</span>
          </Link>
          <Link to='/getquote' className="freighter-nav-item">
            <span className="freighter-nav-icon">💰</span>
            <span className="freighter-nav-text">Get Quote</span>
          </Link>
          <Link to='/myoffers' className="freighter-nav-item">
            <span className="freighter-nav-icon">📄</span>
            <span className="freighter-nav-text">My Offers</span>
          </Link>
        </nav>

        <div className={`freighter-user-bar ${showSidebar ? '' : 'hidden'}`} onClick={toggleProfileOptions}>
          <span className="freighter-user-icon">👤</span>
          <span className="freighter-user-name">{username}</span>
          {showProfileOptions && (
            <div className="freighter-profile-dropdown">
              <button className="freighter-user-btn"><Link to='/userprofile'>View Profile</Link></button>
              <Link to='/'><button onClick={onLogoutSuccess} className="freighter-logout-btn">Log Out</button></Link>
            </div>
          )}
        </div>
        <div className="freighter-sidebar-footer">
          <Link to='/help'><button className="freighter-help-btn">🆘 Need help?</button></Link>
        </div>
        <div className="freighter-sidebar-footer">
          <Link to='/contact'><button className="freighter-help-btn">📞 Contact Us</button></Link>
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
const mapDispatchProps = (dispatch) => {
  return {
    onLogoutSuccess: () => {
      dispatch(logoutSuccess());
    }
  }
}
export default connect(mapStateToProps, mapDispatchProps)(FreighterDashboard)

