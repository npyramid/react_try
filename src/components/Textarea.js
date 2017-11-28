import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({ className, placeholder, name }) => {
  return (
    <textarea className={className} placeholder={placeholder} name={name} />
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};

Textarea.defaultProps = {
  className: '',
  placeholder: '',
  name: '',
};

export default Textarea;
