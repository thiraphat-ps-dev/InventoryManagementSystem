import Immutable from 'immutable';
import { INCREMENT, DECREMENT } from '../actions';

const initialState = Immutable.fromJS({
  count: 0,
});

const numbersReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        // count: action.books,
        count: state.count + 1,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        // count: action.books,
        count: state.count - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default numbersReducer;
