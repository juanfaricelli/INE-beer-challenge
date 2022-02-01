import React from 'react';
import { oneOfType, string, number } from 'prop-types';

import './styles.scss';

const ItemDetailsShort = ({ ibu, targetOg, abv }) => {
  const InfoBlock = ({ title, value }) => (
    <div className="item__details--data">
      <div className="item__details--data-title">{title}</div>
      <div className="item__details--data-value">{value || 0}</div>
    </div>
  );

  InfoBlock.propTypes = {
    title: string.isRequired,
    value: oneOfType([string, number]),
  };

  InfoBlock.defaultProps = {
    value: 0,
  };

  return (
    <div className="item__details--short" data-testid="item-details-short">
      <InfoBlock title="IBU" value={ibu} />
      <InfoBlock title="OG" value={targetOg} />
      <InfoBlock title="ABV" value={`${abv}%`} />
    </div>
  );
};

ItemDetailsShort.propTypes = {
  ibu: oneOfType([string, number]),
  targetOg: oneOfType([string, number]),
  abv: oneOfType([string, number]),
};

ItemDetailsShort.defaultProps = {
  ibu: 0,
  targetOg: 0,
  abv: 0,
};

export default ItemDetailsShort;
