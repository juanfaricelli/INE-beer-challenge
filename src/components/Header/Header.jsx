import React from 'react';
import Icon from '../Icon';

import './styles.scss';

const Header = () => (
  <div className="header" data-testid="header">
    <Icon icon="brewdoglogo" height={60} />
    <div className="header__title">Beers List</div>
  </div>
);

export default Header;
