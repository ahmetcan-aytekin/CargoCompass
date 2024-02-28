import React from 'react'
import serviceIcon2 from '../Assets/service-icon-1.png'
import serviceIcon5 from '../Assets/service-icon-5.png'
import serviceIcon6 from '../Assets/service-icon-6.png'

export const Service = () => {
  return (
    <div>
       <section className="section service" id="service" aria-label="service">
  <div className="container">
    <p className="section-subtitle">All Services</p>
    <h2 className="section-subtitle">Trusted For Our Services</h2>
    <p className="section-text">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since
      the when an
      printer took.
    </p>
    <ul className="service-list grid-list">
      <li>
        <div className="service-card">
          <div className="card-icon">
            <img src={serviceIcon2} width={74} height={60} loading="lazy" alt="Ship" />
          </div>
          <h3 className="h3 card-title">
            <span className="span">01</span> Road Freight
          </h3>
          <p className="card-text">
            Our aim is to optimize and improve your supply chain so that we can give you the best service.
          </p>
          <a href="#" className="btn-link">
            <ion-icon name="chevron-forward" aria-hidden="true" />
            <span className="span">View Detail</span>
          </a>
        </div>
      </li>
      <li>
        <div className="service-card">
          <div className="card-icon">
            <img src={serviceIcon5}  width={63} height={60} loading="lazy" alt="Trolley" />
          </div>
          <h3 className="h3 card-title">
            <span className="span">02</span> Warehousing
          </h3>
          <p className="card-text">
            Our aim is to optimize and improve your supply chain so that we can give you the best service.
          </p>
          <a href="#" className="btn-link">
            <ion-icon name="chevron-forward" aria-hidden="true" />
            <span className="span">View Detail</span>
          </a>
        </div>
      </li>
      <li>
        <div className="service-card">
          <div className="card-icon">
            <img src={serviceIcon6}  width={46} height={60} loading="lazy" alt="Paper" />
          </div>
          <h3 className="h3 card-title">
            <span className="span">03</span> Project Cargo
          </h3>
          <p className="card-text">
            Our aim is to optimize and improve your supply chain so that we can give you the best service.
          </p>
          <a href="#" className="btn-link">
            <ion-icon name="chevron-forward" aria-hidden="true" />
            <span className="span">View Detail</span>
          </a>
        </div>
      </li>
    </ul>
  </div>
</section>
    </div>
  )
}
