import React, { useContext } from 'react';

import { ItemsContext } from '../../api/context/itemContext';
import ItemDetailsShort from '../ItemDetailsShort';
import Accordion from '../Accordion';
import EBCColor from '../EBCColor';

import './styles.scss';

const ItemDetailsModal = ({ showModal, setShowModal }) => {
  const { itemDetailsObj, itemDetails } = useContext(ItemsContext);
  const classname = 'item-details-modal';

  const closeModal = () => {
    setShowModal(false);
    itemDetails();
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
    } = itemDetailsObj;

    const subclassname = `${classname}-dialog`;
    const contentClassname = `${subclassname}__content`;

    const arrayDataParser = (arrayData) => (
      Array.from(new Set(arrayData.map((item) => item.name))).join(', ')
    );

    const malts = arrayDataParser(ingredients.malt);
    const hops = arrayDataParser(ingredients.hops);
    const { yeast } = ingredients;
    const BrewSheetDetails = ({ title, value, isLast }) => (
      <>
        <p className={`${contentClassname}-ingredients--title`}>{title}</p>
        <p>{value}</p>
        {!isLast && <hr />}
      </>
    );

    return (
      <div
        className={subclassname}
        onClick={(e) => e.stopPropagation()}
        data-testid={subclassname}
        role="presentation"
        onKeyPress={(e) => e.stopPropagation()}
      >
        <div className={`${subclassname}__button-close`}>
          <button type="button" onClick={closeModal}><span>✕</span></button>
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
                  <div className={`${contentClassname}-title`}>Brew Sheet</div>
                </Accordion.Header>
                <Accordion.Content>
                  <div className={`${contentClassname}-ingredients`}>
                    <EBCColor colorNumber={ebc} />
                    <hr />
                    <BrewSheetDetails title="Malts" value={`${malts}.`} />
                    <BrewSheetDetails title="Hops" value={`${hops}.`} />
                    <BrewSheetDetails title="Yeast" value={yeast} />
                    <BrewSheetDetails title="Style" value={tagline} isLast />
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
    <>
      {itemDetailsObj && (
      <div className={`${classname}__container${showModal ? ` ${classname}__container--visible` : ''}`} data-testid={classname}>
        <div className={`${classname}__container-background`} onClick={closeModal} role="presentation" onKeyPress={closeModal}>
          <ItemDetailsDialog />
        </div>
      </div>
      )}
    </>
  );
};

export default ItemDetailsModal;
