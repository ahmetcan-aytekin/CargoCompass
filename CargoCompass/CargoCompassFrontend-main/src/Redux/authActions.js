import * as ACTIONS from "./Constants";
import TokenService from "../Api/TokenService"; 
import {login,signup,logout } from "../Api/ApiCalls";
import { useState } from "react";

export const logoutSuccess = () => {
  //logout();
  return {
    type: ACTIONS.LOGOUT_SUCCESS,
  };
};
export const loginSuccess = (authData) => {
  return {
    type: ACTIONS.LOGINSUCCESS,
    isLoggedIn: true,
    payload: authData,
  };
};
export const loginHandler = (credentials) => {
  return async function (dispatch) {
    const response = await login(credentials);
    if (response.data.accessToken) {
      TokenService.setUser(response.data);
    }
    const userDto=response.data.userDto;
    const authState = {
      id :userDto.id,
      userFirstName:userDto.userFirstName,
      userLastName :userDto.userLastName,
      userPhoneNumber : userDto.userPhoneNumber,
      userEmail: credentials.userEmail,
      userPassword: credentials.userPassword,
    };
    dispatch(loginSuccess(authState));
    return response;
  };
};
export const signupHandler =(user)=>{
  return async function(dispatch){
    await dispatch(signup(user))
  }
}
export const updateSuccess =({userPhoneNumber,userEmail})=>{
  return {
    type :ACTIONS.UPDATESUCCESS,
    payload:{
      userEmail,
      userPhoneNumber
    }
  }
}
