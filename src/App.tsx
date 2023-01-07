import React from 'react';

import './App.css';
import LinkContainer from './components/LinkContainer';

const App = () => {
  return (
    <div className="App">
      <div className="card">
        <div className="card--text">
          <div className="title">
            <h1>
              Hey <span className="title--hand">👋&nbsp;</span> ! <br /> I am
              Knowbase
            </h1>
            <p>a French computer science student</p>
          </div>
          <div className="presentation">
            <p>I am looking for a final year internship of 6 months </p>

            <div>
              If you want to know more about me check the links to see :
              <ul>
                <li>my public projects</li>
                <li>my experience</li>
                <li>or to contact me</li>
              </ul>
            </div>
          </div>
        </div>
        <LinkContainer />
      </div>
    </div>
  );
};

export default App;
