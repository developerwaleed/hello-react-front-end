import GET_RANDOM_GREETING from '../actionTypes';

const greeting = (action, state = {}) => {
  switch (action.type) {
    case `${GET_RANDOM_GREETING}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default greeting;
