import { combineReducers } from 'redux';
import clocks from './clock';
import counts from './count';

export default combineReducers({ counts, clocks });
