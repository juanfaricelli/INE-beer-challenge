import React, { useState, useEffect } from 'react';

import './styles.scss';
import mockData from '../Item/item.json';

const ItemDetailsModal = () => {
  const [showDetails, setShowDetails] = useState(true);
  const classname = 'item-details-modal';

  // useEffect(() => {
  //   setShowDetails();
  // }, []);

  const closeModal = () => {
    setShowDetails(false);
    // itemDetails();
  };

  const ItemDetailsDialog = () => {
    const {
      image_url: imageUrl,
      name,
      ibu,
      target_og: targetOg,
      abv,
      description,
      brewers_tips: brewersTips,
      ebc,
      tagline,
      ingredients,
    } = mockData;

    const subclassname = `${classname}-dialog`;
    const contentClassname = `${subclassname}__content`;

    const InfoBlock = ({ title, value }) => (
      <div className="item__details--data">
        <div className="item__details--data-title">{title}</div>
        <div className="item__details--data-value">{value}</div>
      </div>
    );

    const malts = Array.from(
      new Set(
        ingredients.malt.map((malt) => malt.name),
      ),
    ).join(', ');
    const hops = Array.from(
      new Set(
        ingredients.hops.map((hop) => hop.name),
      ),
    ).join(', ');
    const { yeast } = ingredients;

    return (
      <div
        className={subclassname}
        onClick={(e) => e.stopPropagation()}
        data-testid={subclassname}
        role="presentation"
        onKeyPress={(e) => e.stopPropagation()}
      >
        <div className={`${subclassname}__button-close`}>
          <button type="button">X</button>
        </div>
        <div className={`${subclassname}__content`}>
          <div className={`${contentClassname}-image`}>
            <img src={imageUrl} alt={name} height="300" />
          </div>
          <div className={`${contentClassname}-information`}>
            <div className={`${contentClassname}-title`}>{name}</div>
            <div className={`${contentClassname}-description`}>
              {/* <p>{description}</p>
              <p>{`TIPS: ${brewersTips}`}</p> */}
            </div>
            <div className={`${contentClassname}-characteristic`}>
              <InfoBlock title="IBU" value={ibu} />
              <InfoBlock title="OG" value={targetOg} />
              <InfoBlock title="ABV" value={`${abv}%`} />
            </div>
            <div className={`${contentClassname}-ingredients`}>
              <p>Colours</p>
              <p>{ebc}</p>
              ---
              <p>Malts</p>
              <p>{`${malts}.`}</p>
              ---
              <p>Hops</p>
              <p>{`${hops}.`}</p>
              ---
              <p>yeast</p>
              <p>{yeast}</p>
              ---
              <p>style</p>
              <p>{tagline}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`${classname}__container${showDetails ? ` ${classname}__container--visible` : ''}`} data-testid={classname}>
      <div className={`${classname}__container-background`} onClick={closeModal} role="presentation" onKeyPress={closeModal}>
        <ItemDetailsDialog />
      </div>
    </div>
  );
};

export default ItemDetailsModal;
