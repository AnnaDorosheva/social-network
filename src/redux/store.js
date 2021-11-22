import sidebarReduser from "./sidebar-reduser";
import profileReduser from "./profile-reduser";
import dialogReduser from "./dialog-reduser";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hey averywone!", liksCount: 4 },
        { id: 2, message: "Perfect day today...", liksCount: 4 },
        { id: 3, message: "O yes!", liksCount: 4 },
      ],
      newPostText: "",
    },
    messagesPage: {
      dialogUserMessages: [
        { id: 1, message: "Hello!!!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "I am fine:)" },
      ],
      dialogsUsers: [
        {
          id: 1,
          name: "Anna",
          img: "https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka.jpg",
        },
        {
          id: 2,
          name: "Dima",
          img: "https://vsekidki.ru/uploads/posts/2016-08/1470735121_lecdaa3axdc.jpg",
        },
        {
          id: 3,
          name: "Lena",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT23pygNK5BeDGhj88DN6qfpSg0pMb78Tlo9A&usqp=CAU",
        },
        { id: 4, name: "Oleg", img: "https://www.blast.hk/attachments/64804/" },
        {
          id: 5,
          name: "Kolya",
          img: "https://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg",
        },
        {
          id: 6,
          name: "Vova",
          img: "https://cspromogame.ru//storage/upload_images/avatars/1299.jpg",
        },
      ],
      newDialogMessage: "O",
    },
    sidebar: {}
  },
  getState() {
    return this._state;
  },
  _rerender() {
    console.log("o");
  },
 
  subscribe(observer) {
    this._rerender = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.messagesPage = dialogReduser(this._state.messagesPage, action);
    this._state.sidebar = sidebarReduser(this._state.sidebar, action);
    
    this._rerender();
  },
};


export default store;
