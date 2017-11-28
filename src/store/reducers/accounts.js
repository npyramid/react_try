import moment from 'moment';

import {
  GET_ACCOUNTS,
} from '../constants';

const initialState = [
  {
    id: 1337,
    amount: 3502,
    currency: '$',
    percent: 4.5,
    created: moment('27.11.2017 23:58', 'DD.MM.YYYY HH:mm').valueOf(),
    transactions: [
      {
        id: 1,
        created: moment('27.11.2017 23:59', 'DD.MM.YYYY HH:mm').valueOf(),
        description: 'Пополнение с карты',
        lastNumbers: 1234,
        amount: 4923,
      },

      {
        id: 2,
        created: moment('28.11.2017 00:10', 'DD.MM.YYYY HH:mm').valueOf(),
        description: 'Списание на карту',
        lastNumbers: 4321,
        amount: -800,
      },

      {
        id: 3,
        created: moment('27.11.2017 23:59', 'DD.MM.YYYY HH:mm').valueOf(),
        description: 'Пополнение с карты',
        lastNumbers: 1234,
        amount: 4923,
      },

      {
        id: 4,
        created: moment('28.11.2017 00:10', 'DD.MM.YYYY HH:mm').valueOf(),
        description: 'Списание на карту',
        lastNumbers: 4321,
        amount: -800,
      },

      {
        id: 5,
        created: moment('27.11.2017 23:59', 'DD.MM.YYYY HH:mm').valueOf(),
        description: 'Пополнение с карты',
        lastNumbers: 1234,
        amount: 4923,
      },

      {
        id: 6,
        created: moment('28.11.2017 00:10', 'DD.MM.YYYY HH:mm').valueOf(),
        description: 'Списание на карту',
        lastNumbers: 4321,
        amount: -800,
      },

      {
        id: 7,
        created: moment('27.11.2017 23:59', 'DD.MM.YYYY HH:mm').valueOf(),
        description: 'Пополнение с карты',
        lastNumbers: 1234,
        amount: 4923,
      },

      {
        id: 8,
        created: moment('28.11.2017 00:10', 'DD.MM.YYYY HH:mm').valueOf(),
        description: 'Списание на карту',
        lastNumbers: 4321,
        amount: -800,
      },
    ],
  },

  {
    id: 1221,
    amount: 3502,
    currency: '₽',
    percent: 4.5,
    created: moment('27.11.2017 23:58', 'DD.MM.YYYY HH:mm').valueOf(),
    transactions: [
      {
        id: 1,
        created: moment('27.11.2017 23:59', 'DD.MM.YYYY HH:mm').valueOf(),
        description: 'Списание на карту',
        lastNumbers: 1234,
        amount: -4923,
      },

      {
        id: 2,
        created: moment('28.11.2017 00:10', 'DD.MM.YYYY HH:mm').valueOf(),
        description: 'Списание на карту',
        lastNumbers: 4321,
        amount: -800,
      },
    ],
  },
];

function accounts(state = initialState, action) {
  if (action.type === GET_ACCOUNTS) {
    return [
      action.payload,
      ...state,
    ];
  }

  return state;
}

export default accounts;
