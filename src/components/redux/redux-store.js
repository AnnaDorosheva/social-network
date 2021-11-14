import { combineReducers, createStore } from "redux";
import sidebarReduser from "./sidebar-reduser";
import profileReduser from "./profile-reduser";
import dialogReduser from "./dialog-reduser";
import usersReduser from "./users-reduser";



const redusers = combineReducers({
sidebarReduser,
profileReduser,
dialogReduser,
usersReduser,
});
const store = createStore(redusers);


export default store;