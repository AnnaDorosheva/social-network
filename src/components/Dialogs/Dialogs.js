import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from "./Dialogs.module.css";
import DialogText from './DialogText/DialogText';


const Dialogs = (props) => {

  const state = props.state.dialogReduser;

  const dialogsNames = state.dialogsUsers.map((user) => ( <DialogItem key={user.id} {...user}/>));
  const dialogsMessages = state.dialogUserMessages.map( m => < DialogText key={m.id} {...m}/>);
  
  const textarea = React.createRef();

  const handleAddText = () => {
    props.addDialogMessage()
    
  };
  const handleChange = () => {
    const text = textarea.current.value;
    props.changeNewDialogMessage(text);
  }


  return (
    <div className={s.dialogPage}>
      <ul className={s.dialogUsers}>
      { dialogsNames 
      }
    
      </ul>
      <div className={s.dialogWindow}>
      <ul>
{dialogsMessages }
      </ul>
      <div className={s.textarea}>
      <textarea ref={textarea} value={state.newDialogMessage} onChange={handleChange} placeholder="Enter yor message..."></textarea>
      <button onClick={handleAddText} type="submit">Add message</button>
      </div>
    
      </div>
    </div>
  )
};

export default Dialogs;
