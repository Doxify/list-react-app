import React from 'react';
import CheclistSVG from '../../images/checklist2.svg';

class Hero extends React.Component {
  render() {
    return (
      <div className="row hero-section">     
          <h1 className="display-2 text-center">Collaborative <mark>Lists</mark></h1>
          <div className="col-lg-5 mt-2 text-right">
            <img src={CheclistSVG} width="85%" height="85%" alt="Hero" />
          </div>
          <div className="col-lg-5 p-5 text-left">
              <p className="display-6 p-5">We let you easily create a list and invite anyone to collaborate... without creating an account!</p>
          </div>
      </div>
    );
  }

}

export default Hero;
