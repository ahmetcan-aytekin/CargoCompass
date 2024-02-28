import React from 'react'
import featureIcon1 from '../Assets/feature-icon-1.png'
import featureIcon2 from '../Assets/feature-icon-2.png'
import featureIcon3 from '../Assets/feature-icon-3.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Features = () => {
    return (
<div>
      <section class="section feature" aria-label="feature">
      <div class="container">

        <div class="title-wrapper">

          <div>
            <p class="section-subtitle">Estimation</p>

            <h2 class="section-subtitle">Has a wide range of solutions</h2>

            <p class="section-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever
              since the when an
              printer took.
            </p>
          </div>

          <a href="#" class="btn">Read More</a>

        </div>

        <ul class="feature-list grid-list">

          <li>
            <div class="feature-card"  style={{ '--card-number': '"01"' }}>

              <div class="card-icon">
                <img src={featureIcon1} width={72} height={91}/>
              </div>

              <h3 class="h3 card-title">Solutions and specialized</h3>

              <p class="card-text">
                Our aim is to optimize and improve your supply chain so that we can give you the best service
              </p>

              <a href="#" class="card-btn" aria-label="Read more">
              <FontAwesomeIcon icon={faArrowRight} />
              </a>

            </div>
          </li>

          <li>
          <div class="feature-card"  style={{ '--card-number': '"02"' }}>

              <div class="card-icon">
                <img src={featureIcon2} width={93} height={93} />
              </div>

              <h3 class="h3 card-title">Multiple warehouses</h3>

              <p class="card-text">
                We provide multiple drop off and pickup locations so you don't have to worry. And you should not face
                any kind...
              </p>

              <a href="#" class="card-btn" aria-label="Read more">
              <FontAwesomeIcon icon={faArrowRight}/>
              </a>

            </div>
          </li>

          <li>
          <div class="feature-card" style={{ '--card-number': '"03"' }}>

              <div class="card-icon">
                <img src={featureIcon3} width={93} height={93} />
              </div>

              <h3 class="h3 card-title">Tracking made easy</h3>

              <p class="card-text">
                A tracking number for the entire process. so that you can find the exact position. this process will
                help you
              </p>

              <a href="#" class="card-btn" aria-label="Read more">
              <FontAwesomeIcon icon={faArrowRight}/>
              </a>

            </div>
          </li>

        </ul>

      </div>
    </section>
    
</div>

    );
  };