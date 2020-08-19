import React from 'react';

import './home.css';
import Hero from './Hero';
import HeroFeatures from './HeroFeatures';
import HeroMetrics from './HeroMetrics';

class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="hero-container mt-5">
          <Hero />
        </div>
        <div className="hero-metrics-container-fluid">
          <HeroMetrics />
        </div>
        <div className="hero-features-container mb-5">
          <HeroFeatures />
        </div>
      </div>
    );
  }

}

export default Home;
