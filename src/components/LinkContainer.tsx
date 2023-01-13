import React from 'react';

import './LinkContainer.scss';

import githubLogo from '../assets/github-logo.png';
import gitlabLogo from '../assets/gitlab-logo.png';
import linkedinLogo from '../assets/linkedin-logo.png';
import mailIcon from '../assets/mail-icon.png';
import IconLink from './IconLink';

const LinkContainer = () => {
  return (
    <div className="linkContainer">
      <IconLink image={githubLogo} altImage="github logo" link="https://github.com/knowbased" />
      <IconLink image={gitlabLogo} altImage="gitlab logo" link="https://forge.univ-lyon1.fr/p1803623" />
      <IconLink image={linkedinLogo} altImage="linkedin logo" link="https://www.linkedin.com/in/kilian-b-4379a7176/" />
      <IconLink image={mailIcon} altImage="mail icon" link="mailto:knowbase.dev@gmail.com" />
    </div>
  );
};

export default LinkContainer;
