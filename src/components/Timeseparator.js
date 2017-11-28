import React from 'react';
import PropTypes from 'prop-types';

const Timeseparator = ({ text }) => {
  return (
    <div className="timeseparator">
      {text}
    </div>
  );
};

Timeseparator.propTypes = {
  text: PropTypes.string,
};

Timeseparator.defaultProps = {
  text: 'left',
};

export default Timeseparator;
