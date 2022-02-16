import { applyMiddleware, combineReducers, createStore } from "redux";
import sidebarReduser from "./sidebar-reduser";
import profileReduser from "./profile-reduser";
import dialogReduser from "./dialog-reduser";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import appReduser from "./app-reduser";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';



const redusers = combineReducers({
sidebarReduser,
profileReduser,
dialogReduser,
usersReduser,
authReduser,
form: formReducer,
appReduser
});
const store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;