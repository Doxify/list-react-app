import React from 'react';
import NewListButton from '../NewListButton';

class HeroMetrics extends React.Component {
  render() {
    return (
      <div className="row mt-4 mb-5 bg-light">
          <div className="col p-5">
              <div className="container text-center">
                  <p className="text-muted mb-4">People love collaborative lists...</p>
                  <p className="display-6"><strong className="text-primary">2,031</strong> lists created and counting!</p>
                  <NewListButton />
              </div>
          </div>
      </div>
    );
  }
}

export default HeroMetrics;
