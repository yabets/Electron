import { HISTORY_PUSH, HISTORY_FRONT } from 'app/redux/constant/history';

function historyPush(payload) {
  return {
    type: HISTORY_PUSH,
    payload,
  };
}

function historyFront(payload) {
  return {
    type: HISTORY_FRONT,
    payload,
  };
}

module.exports = {
  historyPush,
  historyFront,
};
