
import { connect } from "react-redux";
import {
  addDialogMessageCreator,
  changeNewDialogMessageActionCreator,
} from "../../redux/dialog-reduser";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../hoc/withAuthRedirect";


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

// const AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default DialogsContainer;

export default connect(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
