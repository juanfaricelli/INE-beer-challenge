import React from 'react';

import './styles.scss';
import mockData from './item.json';

const Item = () => {
  const { image_url: imageUrl, name, ibu, target_og: targetOg, abv } = mockData;
  const InfoBlock = ({ title, value }) => (
    <div className="item__details--data">
      <div className="item__details--data-title">{title}</div>
      <div className="item__details--data-value">{value}</div>
    </div>
  );

  return (
    <div className="item" data-testid="item">
      <img src={imageUrl} alt={name} />
      <div className="item__name">{name}</div>
      <div className="item__details--short">
        <InfoBlock title="IBU" value={ibu} />
        <InfoBlock title="OG" value={targetOg} />
        <InfoBlock title="ABV" value={`${abv}%`} />
      </div>
      <div className="button">Beer Detail</div>
    </div>
  );
};

export default Item;
