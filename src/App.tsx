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
            <p>
              Check out my public projects and experiences <br /> or contact me using the following links
            </p>

            <p>
              This site is built with React and TypeScript. <br />
              You can check the source code <a href="https://github.com/knowbased/my-site">here</a> !
            </p>
          </div>
        </div>
        <LinkContainer />
      </Card>
    </div>
  );
};

export default App;
