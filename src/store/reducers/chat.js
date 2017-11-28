import moment from 'moment';

import {
  GET_CHAT_MESSAGE,
} from '../constants';


const initialState = [
  {
    text: 'Привет',
    date: moment('27.11.2017 23:58', 'DD.MM.YYYY HH:mm').valueOf(),
    from: {
      id: 2,
      name: 'Евгений',
    },
  },
];

function chat(state = initialState, action) {
  if (action.type === GET_CHAT_MESSAGE) {
    return [
      action.payload,
      ...state,
    ];
  }

  return state;
}

export default chat;
