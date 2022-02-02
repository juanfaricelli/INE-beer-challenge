import React, { useState, useEffect } from 'react';
import { arrayOf, any, element, func, number } from 'prop-types';

import './styles.scss';

const Header = ({ children, itemNumber, setIsActiveItem, isActiveItem }) => (
  <div className="accordion__header" data-testid="accordion-header">
    <button
      type="button"
      className="accordion"
      onClick={() => {
        setIsActiveItem(itemNumber);
      }}
    >
      {children}
      {itemNumber === isActiveItem ? <>-</> : <>+</>}
    </button>
  </div>
);

Header.propTypes = {
  children: element.isRequired,
  itemNumber: number,
  setIsActiveItem: func,
  isActiveItem: number,
};
Header.defaultProps = {
  itemNumber: null,
  setIsActiveItem: null,
  isActiveItem: null,
};

const Content = ({ children, isActiveItem, itemNumber }) => {
  const [isActive, setIsActive] = useState(itemNumber === isActiveItem);

  useEffect(() => {
    setIsActive(itemNumber === isActiveItem);
  }, [isActiveItem, itemNumber]);

  return (
    <div
      className={`accordion__content panel${isActive ? '--active' : ''}`}
      data-testid="accordion-content"
    >
      { children }
    </div>
  );
};

Content.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: any.isRequired,
  isActiveItem: number,
  itemNumber: number,
};
Content.defaultProps = {
  itemNumber: null,
  isActiveItem: null,
};

const Item = ({ children, itemNumber, isActiveItem, setIsActiveItem }) => {
  const componentStateInjection = (component) => {
    if (React.isValidElement(component)) {
      if (component.type.name === 'Content') {
        return React.cloneElement(component, {
          key: `content-${itemNumber}`,
          itemNumber,
          isActiveItem,
        });
      }
      return React.cloneElement(component, {
        key: `header-${itemNumber}`,
        itemNumber,
        isActiveItem,
        setIsActiveItem,
      });
    }
    return component;
  };

  return (
    <div className="accordion__item" data-testid="accordion-item">
      {children.map((child) => componentStateInjection(child))}
    </div>
  );
};

Item.propTypes = {
  children: arrayOf(element).isRequired,
  itemNumber: number,
  isActiveItem: number,
  setIsActiveItem: func,
};
Item.defaultProps = {
  itemNumber: null,
  isActiveItem: null,
  setIsActiveItem: null,
};

const Accordion = ({ children }) => {
  const [isActiveItem, setIsActiveItem] = useState(0);

  const addItemNumberProp = (component, i) => {
    if (React.isValidElement(component)) {
      return React.cloneElement(component, {
        key: `item-${i}`,
        itemNumber: i,
        isActiveItem,
        setIsActiveItem,
      });
    }
    return component;
  };

  return (
    <div className="accordion__container" data-testid="accordion">
      {children && children.map((child, i) => addItemNumberProp(child, i))}
    </div>
  );
};

Accordion.propTypes = {
  children: arrayOf(element).isRequired,
};

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;
