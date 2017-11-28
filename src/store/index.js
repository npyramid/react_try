import { combineReducers } from 'redux';
import chat from './reducers/chat';
import accounts from './reducers/accounts';
import deposits from './reducers/deposits';

export default combineReducers({
  chat,
  accounts,
  deposits,
});
