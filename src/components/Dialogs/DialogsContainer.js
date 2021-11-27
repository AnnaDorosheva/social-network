
import { connect } from "react-redux";
import {
  addDialogMessageCreator,
  changeNewDialogMessageActionCreator,
} from "../../redux/dialog-reduser";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../hoc/withAuthRedirect";

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
const mapStateToProps = (state) => {
  return {
    state: state,
    isAuth: state.authReduser.isAuth
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

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
