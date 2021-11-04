import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from "./Dialogs.module.css";
import DialogText from './DialogText/DialogText';

const Dialogs = (props) => {

  const dialogsNames = props.state.dialogsUsers.map((user) => ( <DialogItem {...user}/>));
  const dialogsMessages = props.state.dialogUserMessages.map( m => < DialogText {...m}/>);
  const textarea = React.createRef();
  const handleAddText = () => {
    const text = textarea.current.value;
    alert(text);
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
      <textarea ref={textarea} placeholder="Enter yor message..."></textarea>
      <button onClick={handleAddText} type="submit">Add message</button>
      </div>
    
      </div>
    </div>
  )
};

export default Dialogs;