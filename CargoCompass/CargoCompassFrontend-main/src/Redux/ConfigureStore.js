import { createStore, applyMiddleware } from "redux";
import AuthReducer from "./AuthReducer";
import SecureLS from "secure-ls";
import {thunk} from 'redux-thunk'
const securls = new SecureLS();

const getStateFromStorage =()=>{
    const cargoAuth=securls.get('cargo-auth')
    let stateInLocalStorage ={
        id:undefined,
        isLoggedIn: false, 
        userFirstName: undefined,
        userLastName : undefined,
        userEmail :undefined ,
        userPassword :undefined,
        }
    if(cargoAuth){
        return cargoAuth
    }
    return stateInLocalStorage
}
const updateStateStorage= newState =>{
    securls.set('cargo-auth',newState);

}

export const configureStore = () => {
    const store = createStore(
      AuthReducer,
      getStateFromStorage(),
      applyMiddleware(thunk)
    );
  
    store.subscribe(() => {
      updateStateStorage(store.getState());
    });
  
    return store;
  };
