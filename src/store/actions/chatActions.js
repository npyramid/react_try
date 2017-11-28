import {
  GET_CHAT_MESSAGE,
} from '../constants';

function saveChatMessage(message, dispatch) {
  dispatch({
    type: GET_CHAT_MESSAGE,
    payload: message,
  });
}

export default function addChatMessage(message) {
  return (dispatch) => {
    saveChatMessage(message, dispatch);
  };
}
