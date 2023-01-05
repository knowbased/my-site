import React from 'react';

import './IconLink.css';

type IconLinkProp = {
  image: string;
  altImage: string;
  link: string;
};

const IconLink = ({ image, altImage, link }: IconLinkProp): JSX.Element => {
  return (
    <a href={link} className="iconLink">
      <img src={image} alt={altImage} />
    </a>
  );
};

export default IconLink;
