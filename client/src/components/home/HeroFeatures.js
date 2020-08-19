import React from 'react';
import ReminderSVG from '../../images/reminder_note.svg';
import SavingsSVG from '../../images/wallet.svg';
import CollaborateSVG from '../../images/collab.svg';

class HeroFeatures extends React.Component {
  render() {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card text-center m-2 hero-feature-card">
                    <div className="card-body p-2">
                        <h3 className="card-title display-6">Simple</h3>
                        <img  className="card-img-top" src={ReminderSVG} height="150px" width="150px" alt="simple"></img>
                        <p className="card-text mt-3">No registration required, just create a list and start adding things to it.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card text-center m-2 hero-feature-card">
                    <div className="card-body p-2">
                        <h3 className="card-title display-6">Collaborate</h3>
                        <img  className="card-img-top" src={CollaborateSVG} height="150px" width="150px" alt="simple"></img>
                        <p className="card-text mt-3">Share your List's unique link with anyone and you'll both see changes being made in real-time!</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card text-center m-2 hero-feature-card">
                    <div className="card-body p-2">
                        <h3 className="card-title display-6">Free</h3>
                        <img  className="card-img-top" src={SavingsSVG} height="150px" width="150px" alt="simple"></img>
                        <p className="card-text mt-3">Save your money because creating and collaborting on lists will remain free forever!</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }

}

export default HeroFeatures;
