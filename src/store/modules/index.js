import { combineReducers } from 'redux';
import intro from './intro';
import loading from './loading';
import overlay from './overlay';
import around from './around';
import detail from './detail';

export default combineReducers({
  intro,
  loading,
  overlay,
  around,
  detail,
});
