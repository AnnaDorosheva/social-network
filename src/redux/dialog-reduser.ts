// import { type } from "os";


const ADD_DIALOG_MESSAGE = "ADD_DIALOG_MESSAGE";

type DialogType = {
  id: number,
  message: string
};

type DialogsUsersType = {
  id: number,
  name: string,
  img: string
};

const initialState = {
    dialogUserMessages: [
      { id: 1, message: "Hello!!!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "I am fine:)" },
    ] as Array<DialogType>,
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
  ] as Array<DialogsUsersType>,
};

export type InitialStateType = typeof initialState;


const dialogReduser = (state = initialState, action: any) : InitialStateType => {
  
    switch (action.type) {
      case ADD_DIALOG_MESSAGE:
        const newDialogItem = {
          id: 4,
          message: action.newMessage,
        };
        const stateCopy = {
          ...state,
        dialogUserMessages: [...state.dialogUserMessages, newDialogItem],
        };
 
        return stateCopy;

      default:
        return state;
    }
  
};

export default dialogReduser;

type AddDialogMessageCreatorType = {
type: typeof ADD_DIALOG_MESSAGE,
newMessage: string
}

export const addDialogMessageCreator = (newMessage : string) : AddDialogMessageCreatorType => {
  return {
    type: ADD_DIALOG_MESSAGE,
    newMessage
  };
};
