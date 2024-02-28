import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FreighterLogin from './Pages/Freighter/FreighterLogin/FreighterLogin'
import FreighterSignup from './Pages/Freighter/FreighterSignup/FreighterSignup'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import MyQuotes from './Pages/Freighter/MyQuotes/MyQuotes';
import GetQuote from './Pages/Freighter/GetQuote/GetQuote'; 
import MyOffers from './Pages/Freighter/MyOffers/MyOffers'; 
import UserProfile from './Pages/Freighter/UserProfile/UserProfile';
import HelpPage from './Pages/Help/Help';
import Contact from './Pages/ContactDashboard/ContactDashboard';
import ContactHomePage from './Pages/ContactHome/ContactHome';
import CarrierSignup from './Pages/Carrier/CarrierSignup/CarrierSignup';
import CreateCompany from './Pages/Carrier/CreateCompany/CreateCompany';
import CarrierLogin from './Pages/Carrier/CarrierLogin/CarrierLogin';
import Signup from './Pages/Signup/Signup';
import CarrierMain from './Pages/Carrier/CarrierMain/CarrierMain';
import FreighterMain from './Pages/Freighter/FreighterMain/FreighterMain';
 
class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path='/fdashboard' element={<FreighterMain/>} />
            <Route path="/flogin" element={<FreighterLogin/>} />
            <Route path='/fsignup' element={<FreighterSignup />} />
            <Route path='/myquotes' element={<MyQuotes/>} />
            <Route path='/getquote' element={<GetQuote/>} />
            <Route path='/myoffers' element={<MyOffers/>} />
            <Route path='/userprofile' element={<UserProfile />} />
            <Route path='/help' element={<HelpPage/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/contacthome' element={<ContactHomePage/>} />
            <Route path='/cdashboard' element={<CarrierMain/>} />
            <Route path='/createcompany' element={<CreateCompany/>} />
            <Route path='/csignup' element={<CarrierSignup/>} />
            <Route path="/clogin" element={<CarrierLogin/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    userFirstName: state.userFirstName
  };
};

export default connect(mapStateToProps)(App);
