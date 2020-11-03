import { combineReducers } from 'redux';
import entityReducer from './entityReducer';
import baseModalReducer from '../../modules/BaseModal/baseModalReducer';
import tooltipReducer from '../../modules/Tooltip/tooltipReducer';

export default combineReducers({
  entityReducer,

  baseModalReducer,
  tooltipReducer,
});
