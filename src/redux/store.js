import { createStore, combineReducers } from "redux";
import formReducer from "./reducers"; // Import your reducer

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  form: formReducer,
  // Add other reducers if needed
});

// Create Redux store
const store = createStore(rootReducer);

export default store;
