import instance from './Authentication.jsx';
import axios from 'axios';
import { API_USER_URL,API_CARGO_URL} from '../Config.js'

export const signup=body=>{
   axios.post(`${API_USER_URL}/api/auth/signup`, body)
}
export const logout=(userId)=>{
   instance.post(`${ API_USER_URL}/api/v1/auth/logout/${userId}`)
}
export const login =creds =>{
    return instance.post(`${API_USER_URL}/api/v1/auth/login`,creds)
}
export const fetchActiveCargosCount =id =>{
   return axios.get(`${API_CARGO_URL}/api/v1/cargos/count/${id}`)
}
export const fetchActiveCargosList =id =>{
   return axios.get(`${API_CARGO_URL}/api/v1/cargos/fetch/cargos/${id}`)
}
export const createQuote = body => {
   instance.post(`${API_CARGO_URL}/api/v1/cargos/create`, body,);
}
 
   