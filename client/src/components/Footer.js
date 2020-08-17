import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-primary">
        <div className="container bg-primary text-light p-5">
          <div className="row">
            <div className="col-sm-3">
              <h5 className="text-info">Pages</h5>
              <ul>
                <li><a className="nav-link"><Link className="text-light" to="/">Home</Link></a></li>
                <li><a className="nav-link"><Link className="text-light" to="/lists">Lists</Link></a></li>
                <li><a className="nav-link"><Link className="text-light" to="/about">About / FAQ</Link></a></li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h5 className="text-info">Links</h5>
              <ul>
                <li><a className="nav-link text-light" href="https://github.com/doxify/list-react-app">Source Code</a></li>
                <li><a className="nav-link text-light" href="mailto:ageorgescu@mail.sfsu.edu">Contact Me</a></li>
              </ul>
            </div>
            <div className="col d-flex justify-content-end">
              <p>made with 💖 by <a className="text-light" href="https://github.com/doxify">Andrei Georgescu</a></p>
            </div>
          </div>
        </div>    
      </footer>  
    );
  }

}

export default Footer;
