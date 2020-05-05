import { combineReducers } from 'redux';
import languageReducer from './languages';
import themeReducer from './themes';

const rootReducer = combineReducers({
  languageState: languageReducer,
  themeState: themeReducer
});
export default rootReducer;
