import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import DialogText from "./DialogText/DialogText";
import { Field, reduxForm } from "redux-form";
import Textarea from "../../helpers/Textarea/Textarea";
import { required } from "../../helpers/validators/validators";
import { maxLengthCreator } from "../../helpers/validators/validators";

const maxLength = maxLengthCreator(30);

const Dialogs = (props) => {
  // console.log(props.state)
  const state = props.state.dialogReduser;

  const dialogsNames = state.dialogsUsers.map((user) => (
    <DialogItem key={user.id} {...user} />
  ));
  const dialogsMessages = state.dialogUserMessages.map((m) => (
    <DialogText key={m.id} {...m} />
  ));

  const onSubmit = (formData) => {
    props.addDialogMessage(formData.newMessageBody);
    formData.newMessageBody = "";
  };

  return (
    <div className={s.dialogPage}>
      <ul className={s.dialogUsers}>{dialogsNames}</ul>
      <div className={s.dialogWindow}>
        <ul>{dialogsMessages}</ul>
        <AddMessageFormRedux onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form className={s.textarea} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newMessageBody"
        placeholder="Enter yor message..."
        validate={[required, maxLength]}
      />
      <button type="submit">Add message</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "addMessageForm" })(
  AddMessageForm
);
export default Dialogs;

// --------------------------------------------
// const Dialogs = (props) => {
//   const state = props.state.dialogReduser;

//   const dialogsNames = state.dialogsUsers.map((user) => (
//     <DialogItem key={user.id} {...user} />
//   ));
//   const dialogsMessages = state.dialogUserMessages.map((m) => (
//     <DialogText key={m.id} {...m} />
//   ));

//   const textarea = React.createRef();

//   const handleAddText = () => {
//     props.addDialogMessage();
//   };
//   const handleChange = () => {
//     const text = textarea.current.value;
//     props.changeNewDialogMessage(text);
//   };

//   return (
//     <div className={s.dialogPage}>
//       <ul className={s.dialogUsers}>{dialogsNames}</ul>
//       <div className={s.dialogWindow}>
//         <ul>{dialogsMessages}</ul>
//         <div className={s.textarea}>
//           <textarea
//             ref={textarea}
//             value={state.newDialogMessage}
//             onChange={handleChange}
//             placeholder="Enter yor message..."
//           ></textarea>
//           <button onClick={handleAddText} type="submit">
//             Add message
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dialogs;
