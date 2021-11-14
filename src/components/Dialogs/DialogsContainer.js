
import { connect } from "react-redux";
import {
  addDialogMessageCreator,
  changeNewDialogMessageActionCreator,
} from "../redux/dialog-reduser";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//   const state = props.store.getState();
// console.log("CONT", props)
//   const handleAddText = () => {
//     const action = addDialogMessageCreator()
//     props.store.dispatch( action )
//   };
//   const handleChange = (text) => {
//     const action = changeNewDialogMessageActionCreator(text);
//     props.store.dispatch( action );
//   }

//   return (
//    <Dialogs store={state} changeNewDialogMessage={handleChange} addDialogMessage={handleAddText} />
//   )
// };
const MapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeNewDialogMessage: (text) => {
      dispatch(changeNewDialogMessageActionCreator(text));
    },
    addDialogMessage: () => {
      dispatch(addDialogMessageCreator());
    },
  };
};

const DialogsContainer = connect(MapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
