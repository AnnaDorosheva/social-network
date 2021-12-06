
import { connect } from "react-redux";
import {
  addDialogMessageCreator,
  changeNewDialogMessageActionCreator,
} from "../../redux/dialog-reduser";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../hoc/withAuthRedirect";
import { compose } from "redux";


const mapStateToProps = (state) => {
  return {
    state: state
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



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // withAuthRedirect
)(Dialogs);
