import React from "react";
import Credit from "../CreditCard";
import '../CreditCard/layout.css';

const cardInfo = {
  bank: 'Big Bank, Inc.',
  number: '1234567887654321',
  security: '123',
  expirationDate: '08/19',
  cardHolder: 'William P. MoneyBags',
};

const CreditCard = () => {
  return <div className="layout">
    <Credit cardInfo={cardInfo} />
  </div>;
};

export default CreditCard;
