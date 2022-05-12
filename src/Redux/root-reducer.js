import { combineReducers } from "redux";

import recipeReducer from "./Reducer";

const rootReducer=combineReducers({
    data: recipeReducer
})
export default rootReducer