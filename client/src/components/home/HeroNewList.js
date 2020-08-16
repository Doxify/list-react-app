import React from 'react';

class HeroNewList extends React.Component {
  render() {
    return (
      <div className="row mt-4 mb-5 bg-light">
          <div className="col p-5">
              <div className="container text-center">
                  <p className="text-muted mb-4">People love collaborative lists...</p>
                  <p className="display-6">So far, <mark>2,031</mark> lists have been created.</p>
                  <button className="btn btn-primary btn-lg mt-3">Create a New List</button>
              </div>
          </div>
      </div>
    );
  }
}

export default HeroNewList;
