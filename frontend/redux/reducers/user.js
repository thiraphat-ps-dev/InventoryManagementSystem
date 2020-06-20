import Immutable from 'immutable';
import { AUTHENTICATION } from '../actions';
// import { INCREMENT, DECREMENT } from '../actions';

const initialState = Immutable.fromJS({
  data: [],
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION: {
      return {
        ...state,
        // count: action.books,
        data: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
