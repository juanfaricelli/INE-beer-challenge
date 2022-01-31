import React from 'react';
import { number } from 'prop-types';

import './styles.scss';

const EBCColor = ({ colorNumber }) => (
  <div className="ebc-color__display" data-testid="ebc-color">
    <div className="ebc-color__display--title">Colour</div>
    <div className={`ebc-color__display-color${colorNumber ? ` ebc-color__display-color--${colorNumber}` : ''}`} />
  </div>
);

EBCColor.propTypes = {
  colorNumber: number,
};

EBCColor.defaultProps = {
  colorNumber: '0',
};

export default EBCColor;
