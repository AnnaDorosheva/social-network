const ADD_POST = "ADD_POST";
const ADD_DIALOG_MESSAGE = "ADD_DIALOG_MESSAGE";
const CHANGE_NEW_POS_TEXT = "CHANGE_NEW_POS_TEXT";
const CHANGE_NEW_DIALOG_MESSAGE = "CHANGE_NEW_DIALOG_MESSAGE";

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
  },
  getState() {
    return this._state;
  },
  _rerender() {
    console.log("o");
  },
  // addPost () {
  //   const newPost = {
  //     id: 6,
  //     message: this._state.profilePage.newPostText,
  //     liksCount: 3
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._rerender();
  //   },
  //   addDialogMessge () {
  //     const newDialogItem = {
  //       id: 4,
  //       message: this._state.messagesPage.newDialogMessage,
  //     }
  //     this._state.messagesPage.dialogUserMessages.push(newDialogItem);
  //     this._state.messagesPage.newDialogMessage = "";
  //     this._rerender();
  //     },
  //     chageNewPostText (newText) {
  //       this._state.profilePage.newPostText = newText;
  //       this._rerender();
  //     },
  //     changeNewDialogMessage (newMessage) {
  //       this._state.messagesPage.newDialogMessage = newMessage;
  //       this._rerender();
  //       },
  subscribe(observer) {
    this._rerender = observer;
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        const newPost = {
          id: 6,
          message: this._state.profilePage.newPostText,
          liksCount: 3,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._rerender();
        break;
      case ADD_DIALOG_MESSAGE:
        const newDialogItem = {
          id: 4,
          message: this._state.messagesPage.newDialogMessage,
        };
        this._state.messagesPage.dialogUserMessages.push(newDialogItem);
        this._state.messagesPage.newDialogMessage = "";
        this._rerender();
        break;
      case CHANGE_NEW_POS_TEXT:
        this._state.profilePage.newPostText = action.newText;
        this._rerender();
        break;
      case CHANGE_NEW_DIALOG_MESSAGE:
        this._state.messagesPage.newDialogMessage = action.newMessage;
        this._rerender();
        break;
      default:
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const addDialogMessageCreator = () => {
  return {
    type: ADD_DIALOG_MESSAGE,
  };
};

export const changeNewPostTextActionCreator = (text) => {
  return {
    type: CHANGE_NEW_POS_TEXT,
    newText: text,
  };
};
export const changeNewDialogMessageActionCreator = (text) => {
  return {
    type: CHANGE_NEW_DIALOG_MESSAGE,
    newMessage: text
  }
};

export default store;
