import { combineReducers } from 'redux';
import intro from './intro';
import loading from './loading';
import overlay from './overlay';

export default combineReducers({
  intro,
  loading,
  overlay,
});
