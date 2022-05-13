import { combineReducers } from "redux";
import { handleNavTableClick } from "./handleNavTableClick";

export const rootReducer = combineReducers({
    handleNavTableClick: handleNavTableClick
})