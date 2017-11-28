/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import utils from './Utilities';
import Status from './Status';

const Operation = ({ params, currency, children, raw }) => {
  const description = `${params.description} **** ${params.lastNumbers}`;

  const renderChildren = () => {
    if (children) {
      return (
        <div className="operation__icon">
          {children}
        </div>);
    }

    return '';
  };

  const classes = classNames('operation', {
    'operation--raw': raw,
  });

  return (
    <div className={classes}>
      {renderChildren()}

      <div className="operation__date">
        {utils.datetime(params.created)}
      </div>

      <div className="operation__description">
        {description}&ensp;<Status value={params.amount} currency={currency} />
      </div>
    </div>
  );
};

Operation.propTypes = {
  params: PropTypes.object,
  currency: PropTypes.string,
  children: PropTypes.object,
  raw: PropTypes.bool,
};

Operation.defaultProps = {
  params: {},
  currency: '$',
  children: null,
  raw: false,
};

export default Operation;
