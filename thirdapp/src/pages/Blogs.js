import React from 'react';
import logo from './images.jpg';
import './Layout.css';
const Blogs = () => {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">CIET</h2>
              <p className="card-text">
                Welcome to Chalapathi Institute of Engineering and Technology
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
