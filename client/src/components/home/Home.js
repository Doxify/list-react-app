import React from 'react';

import './home.css';
import Hero from './Hero';
import HeroFeatures from './HeroFeatures';
import HeroNewList from './HeroNewList';


class Home extends React.Component {

  render() {
    return (
      <div className="container mt-5 mb-5" style={{paddingTop: 5 + 'em', paddingBottom: 10 + 'em'}}>
          <Hero />
          <HeroNewList/>
          <HeroFeatures />
      </div>
    );
  }

}

export default Home;
