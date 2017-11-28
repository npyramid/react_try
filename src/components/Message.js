/* eslint-disable react/forbid-prop-types */
import React from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';
import Operation from './Operation';

const Message = ({ message }) => {
  const messageClasses = className('message', {
    'message--right': message.from.id === 1,
  });

  const user = message.from;

  const renderContent = () => {
    if (message.text) {
      return (
        <div className="message__content">
          <div className="message__name">
            {user.name}:
          </div>

          <div className="message__text">
            {message.text}
          </div>
        </div>
      );
    }

    if (message.params && message.currency) {
      return (
        <div className="message__content message--operation">
          <div className="message__text">
            <div className="message__title">
              Операция
            </div>

            <Operation params={message.params} currency={message.currency} raw />
          </div>
        </div>
      );
    }

    return '';
  };

  return (
    <div className={messageClasses}>
      <div className="message__avatar-place">
        <img
          className="message__avatar"
          src="https://yt3.ggpht.com/-bDcIgMvd0qw/AAAAAAAAAAI/AAAAAAAAAAA/75SUptOIHl0/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
          alt={user.name}
        />
      </div>

      {renderContent()}
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.object,
};

Message.defaultProps = {
  message: {},
};

export default Message;
