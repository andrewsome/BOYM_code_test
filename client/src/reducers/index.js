import { combineReducers } from 'redux';
import settingReducer from './settingReducer';
import createReportReducer from './createReportReducer';

export default combineReducers({
  settings: settingReducer,
  report: createReportReducer,
});