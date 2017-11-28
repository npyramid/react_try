import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, className }) => {
  return (
    <button className={className}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: 'button',
  text: '',
};

export default Button;
