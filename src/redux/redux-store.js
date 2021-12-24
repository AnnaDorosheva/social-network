import { applyMiddleware, combineReducers, createStore } from "redux";
import sidebarReduser from "./sidebar-reduser";
import profileReduser from "./profile-reduser";
import dialogReduser from "./dialog-reduser";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';



const redusers = combineReducers({
sidebarReduser,
profileReduser,
dialogReduser,
usersReduser,
authReduser,
form: formReducer,
});
const store = createStore(redusers, applyMiddleware(thunkMiddleware));

// console.log(store.getState().form)
export default store;