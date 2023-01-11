import React from 'react';

import './App.scss';
import Card from './components/Card';
import LinkContainer from './components/LinkContainer';

const App = () => {
  return (
    <div className="App">
      <Card>
        <div className="textContainer">
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
              If you want to know more about me check the links to see&nbsp;:
              <ul>
                <li>my public projects</li>
                <li>my experience</li>
                <li>or to contact me</li>
              </ul>
            </div>
          </div>
        </div>
        <LinkContainer />
      </Card>
    </div>
  );
};

export default App;
