import React from 'react';
import { oneOfType, string, number } from 'prop-types';

import './styles.scss';

const EBCColor = ({ colorNumber }) => (
  <div className="ebc-color__display" data-testid="ebc-color">
    <div className="ebc-color__display--title">Colour</div>
    <div className={`ebc-color__display-color${colorNumber ? ` ebc-color__display-color--${colorNumber}` : ''}`} />
  </div>
);

EBCColor.propTypes = {
  colorNumber: oneOfType([string, number]),
};

EBCColor.defaultProps = {
  colorNumber: '0',
};

export default EBCColor;
