import { combineReducers } from 'redux';
import bookReducer from "./bookReducer";
import errorReducer from "./errorReducer";
import securityReducer from "./securityReducer";


export default combineReducers({
    book: bookReducer,
    errors: errorReducer,
    security: securityReducer
});