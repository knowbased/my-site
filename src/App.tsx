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
              Hey <span className="title--hand">👋&nbsp;</span> <br /> I am Kilian
            </h1>
            <p>a French computer science student</p>
          </div>
          <div className="presentation">
            <p>I am looking for a final year internship of 6 months </p>

            <p>
              See my public projects, experiences or contact me <br /> using the links
            </p>

            <p>
              This site is made with React and TS <br />
              You can check the&nbsp;
              <a href="https://github.com/knowbased/my-site">source code</a> !
            </p>
          </div>
        </div>
        <LinkContainer />
      </Card>
    </div>
  );
};

export default App;
