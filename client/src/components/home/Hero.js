import React from 'react';
import CheclistSVG from '../../images/checklist2.svg';

class Hero extends React.Component {
  render() {
    return (
      <div className="row hero-section">
          <h1 className="display-1 ml-5 text-center">Collaborative <mark>Lists</mark></h1>
          <div className="col-lg-5 mt-2 text-right">
            <img src={CheclistSVG} width="85%" height="85%" alt="Hero" />
          </div>
          <div className="col-lg-7 p-5 text-left">
              <p className="display-6">We let you quickly create a list and invite an unlimited amount of people to collaborate.</p>
          </div>
      </div>
    );
  }

}

export default Hero;
