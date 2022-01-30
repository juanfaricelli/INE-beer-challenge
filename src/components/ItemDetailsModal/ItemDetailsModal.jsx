import React, { useState } from 'react';

import Accordion from '../Accordion';

import './styles.scss';
import mockData from '../Item/item.json';

import ItemDetailsShort from '../ItemDetailsShort';

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

    const arrayDataParser = (arrayData) => (
      Array.from(new Set(arrayData.map((item) => item.name))).join(', ')
    );

    const malts = arrayDataParser(ingredients.malt);
    const hops = arrayDataParser(ingredients.hops);
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
          <button type="button" onClick={closeModal}>X</button>
        </div>
        <div className={`${subclassname}__content`}>
          <div className={`${contentClassname}-image`}>
            <img src={imageUrl} alt={name} height="300" />
          </div>
          <div className={`${contentClassname}-information`}>
            <Accordion>
              <Accordion.Item>
                <Accordion.Header>
                  <div className={`${contentClassname}-title`}>{name}</div>
                </Accordion.Header>
                <Accordion.Content>
                  <div className={`${contentClassname}-description`}>
                    <p>{description}</p>
                    <p>{`TIPS: ${brewersTips}`}</p>
                  </div>
                  <ItemDetailsShort {...{ ibu, targetOg, abv }} />
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Header>
                  Brew Sheet
                </Accordion.Header>
                <Accordion.Content>
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
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
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
