import { combineReducers } from 'redux';
import clocks from './clock';
import counts from './count';
import user from './user';

export default combineReducers({ counts, clocks, user });
