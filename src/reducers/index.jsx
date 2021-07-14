import { combineReducers } from "redux";
import combinedReducers from "./combinedReducers";
export default combineReducers({
  entites: combinedReducers,
});
