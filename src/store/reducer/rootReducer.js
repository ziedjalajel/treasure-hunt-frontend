import { combineReducers } from "redux";
import authReducer from "./authReducer";
import garbageReducer from "./garbageReducer";
import treasureReducer from "./treasureReducer";

const rootReducer = combineReducers({
  treasures: treasureReducer,
  garbages: garbageReducer,
  users: authReducer,
});
export default rootReducer;
