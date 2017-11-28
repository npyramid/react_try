/* eslint-disable jsx-a11y/no-noninteractive-element-interactions,react/forbid-prop-types,
react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Textarea from './Textarea';
import Button from './Button';
import Message from './Message';
import Timeseparator from './Timeseparator';

const Chat = ({ messages, sendMessage }) => {
  const onSubmit = (event, elem) => {
    let element = null;

    // сделал так потому, что вызывая .submit() на форму из onKeyDown() не срабатывал этот метод
    if (event) {
      event.preventDefault();
      element = event.target.querySelector('[name=message]');
    } else {
      element = elem;
    }
    const message = element.value;

    if (!message.length) {
      return;
    }

    const data = {
      text: message,
      date: Date.now(),
      from: {
        id: 1,
        name: 'Вы',
      },
    };

    sendMessage(data);
    element.value = '';
  };

  const onKeyDown = (event) => {
    const enter = event.keyCode === 13;
    const ctrl = event.ctrlKey;
    const cmd = event.metaKey;

    if ((enter && cmd) || (enter && ctrl)) {
      onSubmit(null, event.target);
    }
  };

  const history = () => {
    const elementsMap = messages.reduce((acc, message, index, arr) => {
      const currentMessage = message;
      const nextMessage = arr[index + 1];
      const currentDate = moment(message.date);

      if (!nextMessage) {
        acc.push(currentMessage);
        return acc;
      }

      const nextDate = moment(nextMessage.date);

      if (currentDate.isSame(nextDate, 'd')) {
        acc.push(currentMessage);
      }

      if (!currentDate.isSame(nextDate, 'd')) {
        acc.push(currentMessage);
        acc.push({ separator: nextDate.format('DD.MM.YYYY') });
      }

      return acc;
    }, []);

    return elementsMap.map((params, index) => {
      if (params.separator) {
        return <Timeseparator text={params.separator} key={index} />;
      }
      return <Message message={params} key={index} />;
    });
  };

  return (
    <div className="chat">
      <div className="chat__title">Чат</div>

      <form className="chat__form" name="chatform" onKeyDown={onKeyDown} onSubmit={onSubmit}>
        <Textarea className="chat__textarea" name="message" placeholder="Сообщение" />
        <div className="chat__button-row">
          <Button text="Отправить" />
        </div>
      </form>

      <div className="chat__history">
        {history()}
      </div>

    </div>
  );
};

Chat.propTypes = {
  messages: PropTypes.array,
  sendMessage: PropTypes.func,
};

Chat.defaultProps = {
  messages: [],
  sendMessage: () => {},
};

export default Chat;
