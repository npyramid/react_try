import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

const Icon = ({ type, onClick }) => {
  const classess = className('icon', {
    'icon--open': type === 'open',
    'icon--message': type === 'message',
    'icon--close': type === 'close',
  });

  return (
    <div className={classess} onClick={onClick} role="button" tabIndex={0} />
  );
};

Icon.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  type: '',
  onClick: () => {},
};

export default Icon;
