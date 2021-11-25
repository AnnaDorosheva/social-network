import { applyMiddleware, combineReducers, createStore } from "redux";
import sidebarReduser from "./sidebar-reduser";
import profileReduser from "./profile-reduser";
import dialogReduser from "./dialog-reduser";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import thunkMiddleware from 'redux-thunk';



const redusers = combineReducers({
sidebarReduser,
profileReduser,
dialogReduser,
usersReduser,
authReduser
});
const store = createStore(redusers, applyMiddleware(thunkMiddleware));


export default store;