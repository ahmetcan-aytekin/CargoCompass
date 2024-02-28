import {API_OFFER_URL,API_COMPANY_URL,API_CARGO_URL} from '../../../Config'
export const fetchOffersByStatus = async (userId, status) => {
     const response = await fetch(`${API_OFFER_URL}/api/v1/offers/user/${userId}?status=${status}`);
    const offers = await response.json();
    
     const detailedOffers = await Promise.all(offers.map(async (offer) => {
      const companyResponse = await fetch(`${API_COMPANY_URL}/api/v1/companies/${offer.companyId}`);
      const company = await companyResponse.json();
  
      const cargoResponse = await fetch(`${API_CARGO_URL}/api/v1/cargos/${offer.cargoId}`);
      const cargo = await cargoResponse.json();
  
      return {
        ...offer,
        companyName: company.name,
        cargoDescription: cargo.description,
       };
    }));
  
    return detailedOffers;
  };