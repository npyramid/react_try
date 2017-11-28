import className from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import utils from './Utilities';

const Status = ({ value, currency }) => {
  let currentValue = value;
  let sign = null;

  if (currentValue >= 0) {
    sign = '+';
  } else {
    currentValue = Math.abs(currentValue);
    sign = '-';
  }

  const classes = className('status', {
    'status--green': value >= 0,
    'status--red': value < 0,
  });

  return (
    <span className={classes}>
      {sign}&nbsp;{utils.numberToDigits(currentValue)}&nbsp;{currency}
    </span>);
};

Status.propTypes = {
  value: PropTypes.number,
  currency: PropTypes.string,
};

Status.defaultProps = {
  value: 0,
  currency: '$',
};

export default Status;
