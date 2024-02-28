import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Input from '../../../Components/Input/Input';
import heroBanner from '../../../Components/Assets/hero-banner.jpg';
import {Navbar} from '../../../Components/Navbar/Navbar';
import {Footer} from '../../../Components/Footer/Footer';
import Spinner from '../../../Components/Spinner/Spinner';
import {loginHandler} from '../../../Redux/authActions';
import { useNavigate } from "react-router-dom";


const FreighterLogin = (props) => {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  

  useEffect(() => {
    setErrorMessage(undefined);
  }, [userEmail, userPassword]);

  const onClickLogin = async (event) => {
    setLoading(true);
    const {  dispatch } = props;
    event.preventDefault();
     const creds = {
      userEmail,
      userPassword,
    };
    setErrorMessage(undefined);
    try {
      await dispatch(loginHandler(creds));
      navigate("/fdashboard"); 
    } catch (apiError) {
      setErrorMessage(true);
    }
    setLoading(false);
  };

   const buttonEnabled = userEmail && userPassword;

  return (
    <div >
      <section style={{ backgroundImage: `url(${heroBanner})`}}>
      <Navbar></Navbar>
      <div className="loginForm" style={{display:'flow-root'}}>
      <form className="form-group" style={{marginTop:'200px',marginBottom:'150px'}} >
        < h1 className="text-center">Login</h1>
          <Input label="Email" name="userEmail" type="text" onChange={(event) => { setUserEmail(event.target.value); }}></Input>
          <Input label="Password" name="userPassword" type="password"onChange={(event) => {setUserPassword(event.target.value);}}></Input>
          {errorMessage && (<div style={{color:'red',width:'100%',marginLeft:'20%',fontSize:'2rem'}} >Wrong Email Or Password</div>)}
          <button  disabled={!buttonEnabled}   className="btn"onClick={onClickLogin}>{loading ? <Spinner /> : 'Login'}</button>
      </form>
      </div>
      </section>
      <Footer></Footer>
    </div>
  );
};
export default connect()(FreighterLogin);
