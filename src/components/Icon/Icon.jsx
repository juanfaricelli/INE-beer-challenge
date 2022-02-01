import React from 'react';
import { string, number, oneOfType } from 'prop-types';

import Icons from './icons';

const Icon = ({ icon, color, width, height, className }) => {
  const IconComponent = Icons[icon];

  return IconComponent ? (
    <div className={`icon-component icon-component__${icon}${className && ` ${className}`}`} data-testid="icon-component">
      <IconComponent width={width} height={height} color={color} />
    </div>
  ) : <span data-testid="icon-component" />;
};

Icon.propTypes = {
  icon: string.isRequired,
  color: string,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  className: string,
};

Icon.defaultProps = {
  color: '#000',
  width: '',
  height: '',
  className: '',
};

export default Icon;
