import { combineReducers, createStore } from "redux";
import sidebarReduser from "./sidebar-reduser";
import profileReduser from "./profile-reduser";
import dialogReduser from "./dialog-reduser";


const redusers = combineReducers({
sidebarReduser,
profileReduser,
dialogReduser
});
const store = createStore(redusers);

export default store;