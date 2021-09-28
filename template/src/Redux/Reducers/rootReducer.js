import { combineReducers } from "redux";
import userReducer from './userReducer'

//here we setting the key of the state as items
const rootReducer = combineReducers({
  userInfo: userReducer

});

export default rootReducer