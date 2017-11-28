/* eslint-disable react/forbid-prop-types */
import React from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';
import utils from './Utilities';
import Status from './Status';

const Card = ({ params, isStatic, hasLastPayment, children }) => {
  const lastTransaction = params.transactions[0];

  const classes = className('card', {
    'card--static': isStatic,
  });

  const lastPayment = () => {
    if (hasLastPayment) {
      const datetime = utils.datetime(lastTransaction.created);
      return (<div className="card__last">
        Последняя&nbsp;операция:&ensp;
        {datetime}&nbsp;(<Status value={lastTransaction.amount} currency={params.currency} />)
      </div>);
    }

    return '';
  };

  const renderChildren = () => {
    if (children) {
      return (
        <div className="card__icon">
          {children}
        </div>
      );
    }

    return '';
  };

  return (
    <div className={classes}>
      <div className="card__wrapper">
        {renderChildren()}

        <div className="card__title">
          Счет № {params.id}
        </div>

        <div className="card__amount">
          {utils.numberToDigits(params.amount)} {params.currency}
        </div>

        <div className="card__text">
          <div className="card__percent">
            {params.percent}% годовых
          </div>

          <div className="card__created">
            Создан: {utils.datetime(params.created)}
          </div>

          {lastPayment()}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  params: PropTypes.object,
  children: PropTypes.object,
  isStatic: PropTypes.bool,
  hasLastPayment: PropTypes.bool,
};

Card.defaultProps = {
  params: {},
  children: null,
  isStatic: false,
  hasLastPayment: true,
};

export default Card;
