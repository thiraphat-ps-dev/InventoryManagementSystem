import Immutable from 'immutable';
import { AUTHENTICATION } from '../actions';
// import { INCREMENT, DECREMENT } from '../actions';

const initialState = Immutable.fromJS({
  authData: [],
  userData: [],
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION: {
      return {
        ...state,
        authData: action.data,
      };
    }
    case SETUSERDATA: {
      return {
        ...state,
        userData: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
