import React from 'react';

import './styles.scss';

const ItemDetailsShort = ({ ibu, targetOg, abv }) => {
  const InfoBlock = ({ title, value }) => (
    <div className="item__details--data">
      <div className="item__details--data-title">{title}</div>
      <div className="item__details--data-value">{value || 0}</div>
    </div>
  );

  return (
    <div className="item__details--short">
      <InfoBlock title="IBU" value={ibu} />
      <InfoBlock title="OG" value={targetOg} />
      <InfoBlock title="ABV" value={`${abv}%`} />
    </div>
  );
};

export default ItemDetailsShort;
