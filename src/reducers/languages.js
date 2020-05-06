
// src/reducers/reports.js
const INITIAL_STATE = {
    language: 'english'
  };
  
  function languageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_LANGUAGE": {
        // console.log('reducer', action)
        return {
          ...state,
          language: action.language
        }
      }
      
      default: return state;
    }
  }
  export default languageReducer;
  