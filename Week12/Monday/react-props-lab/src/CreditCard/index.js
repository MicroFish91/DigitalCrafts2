import PropTypes from 'prop-types';
import React from 'react';
import Bank from './Bank';
import CardExpiration from './CardExpiration';
import CardHolder from './CardHolder';
import CardNumber from './CardNumber';
import CardSecurity from './CardSecurity';
import './css/CreditCard.css';
import './layout.css';
import './minireset.min.css';




const CreditCard = ({ cardInfo }) => {
  return (
		<main className="creditCard">
			<Bank name={cardInfo.bank} />
			<CardNumber number={cardInfo.number} />
			<CardSecurity security={cardInfo.security} />
			<CardExpiration expirationDate={cardInfo.expirationDate} />
			<CardHolder person={cardInfo.cardHolder} />
		</main>
	);
}


CreditCard.propTypes = {
	cardInfo: PropTypes.shape({
		bank: PropTypes.string.isRequired,
		number: PropTypes.string.isRequired,
		security: PropTypes.string.isRequired,
		expirationDate: PropTypes.string.isRequired,
		cardHolder: PropTypes.string.isRequired
	}).isRequired
};

export default CreditCard
