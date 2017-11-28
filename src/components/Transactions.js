/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './Card';
import Operation from './Operation';
import Icon from './Icon';

const Transactions = ({ items, match, chatActions }) => {
  const id = Number(match.params.id);
  const currentItem = items.find(current => current.id === id);
  const linkTo = () => {
    return match.path.replace(/:id/, '');
  };

  const clickHandler = (params) => {
    const currentParams = params;
    currentParams.from = {
      id: 1,
      name: 'Агент',
    };

    chatActions(currentParams);
  };

  return (
    <div className="transactions">
      <Card params={currentItem} hasLastPayment={false} isStatic>
        <Link to={linkTo()}>
          <Icon type="close" />
        </Link>
      </Card>

      <div className="transactions__paragraph">
        История операций
      </div>

      <div className="transactions__list">
        { /* eslint-disable react/jsx-no-bind */}
        {currentItem.transactions.map((params) => {
          return (
            <Operation params={params} currency={currentItem.currency} key={params.id}>
              <Icon type="message" onClick={clickHandler.bind(null, { params, currency: currentItem.currency })} />
            </Operation>
          );
        })}
      </div>
    </div>
  );
};

Transactions.propTypes = {
  items: PropTypes.array,
  match: PropTypes.object,
  chatActions: PropTypes.func,
};

Transactions.defaultProps = {
  items: [],
  match: {},
  chatActions: null,
};

export default Transactions;
