import React from 'react';
import useRotation from '../hooks/useRotation';

import './IconLink.scss';

type IconLinkProp = {
  image: string;
  altImage: string;
  link: string;
};

const IconLink = ({ image, altImage, link }: IconLinkProp): JSX.Element => {
  const ref = React.useRef(null);
  const { rotationX, rotationY } = useRotation(ref);

  return (
    <a href={link} ref={ref} className="iconLink">
      <img
        style={{
          transform: `perspective(4cm) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
        }}
        src={image}
        alt={altImage}
      />
    </a>
  );
};

export default IconLink;
