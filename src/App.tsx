import React from 'react';
import githubLogo from './assets/github-logo.png';
import gitlabLogo from './assets/gitlab-logo.png';
import linkedinLogo from './assets/linkedin-logo.png';
import mailIcon from './assets/mail-icon.png';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="card">
        <div className="card--text">
          <div className="title">
            <h1>
              Hey 👋 ! <br /> I am Knowbase
            </h1>
            <p>a French computer science student</p>
          </div>
          <div className="presentation">
            <p>I am looking for a final year internship of 6 months </p>

            <p>
              If you want to know more about me check the links to see :
              <ul>
                <li>my public projects</li>
                <li>my experience</li>
                <li>or to contact me</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="icons">
          <a href="https://github.com/knowbased" className="icon">
            <img src={githubLogo} alt="github logo" />
          </a>
          <a href="" className="icon">
            <img src={gitlabLogo} alt="react logo" />
          </a>
          <a href="" className="icon">
            <img src={linkedinLogo} alt="react logo" />
          </a>
          <a href="" className="icon">
            <img src={mailIcon} alt="react logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
