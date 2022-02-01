import React, { useState, useEffect } from 'react';
import { arrayOf, node, func, number, bool } from 'prop-types';

import './styles.scss';

const Header = ({ children, itemNumber, setIsActiveItem, isActiveItem }) => (
  <div>
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
  children: arrayOf(node).isRequired,
  itemNumber: number.isRequired,
  setIsActiveItem: func.isRequired,
  isActiveItem: bool.isRequired,
};

const Content = ({ children, isActiveItem, itemNumber }) => {
  const [isActive, setIsActive] = useState(itemNumber === isActiveItem);

  useEffect(() => {
    setIsActive(itemNumber === isActiveItem);
  }, [isActiveItem, itemNumber]);

  return (
    <div className={`panel${isActive ? '--active' : ''}`}>
      { children }
    </div>
  );
};

Content.propTypes = {
  children: arrayOf(node).isRequired,
  isActiveItem: bool.isRequired,
  itemNumber: number.isRequired,
};

const Item = ({ children, itemNumber, isActiveItem, setIsActiveItem }) => {
  const componentStateInjection = (component) => {
    if (React.isValidElement(component)) {
      if (component.type.name === 'Content') {
        return React.cloneElement(component, {
          itemNumber,
          isActiveItem,
        });
      }
      return React.cloneElement(component, {
        itemNumber,
        isActiveItem,
        setIsActiveItem,
      });
    }
    return component;
  };

  return (
    <>
      {children.map((child) => componentStateInjection(child))}
    </>
  );
};

Item.propTypes = {
  children: arrayOf(node).isRequired,
  itemNumber: number.isRequired,
  isActiveItem: bool.isRequired,
  setIsActiveItem: func.isRequired,
};

const Accordion = ({ children }) => {
  const [isActiveItem, setIsActiveItem] = useState(0);

  const addItemNumberProp = (component, i) => {
    if (React.isValidElement(component)) {
      return React.cloneElement(component, {
        itemNumber: i,
        isActiveItem,
        setIsActiveItem,
      });
    }
    return component;
  };

  return (
    <>
      {children.map((child, i) => addItemNumberProp(child, i))}
    </>
  );
};

Accordion.propTypes = {
  children: arrayOf(node).isRequired,
};

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;
