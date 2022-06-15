import React, { Component } from "react";

type PropTypes = {
status: string
updateStatus: (status: string) => void
};

type StateTypes = {
  editMode: boolean
  status: string
};

export default class ProfileStatus extends Component<PropTypes, StateTypes> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  handleActivateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  handleDeactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.target.value,
    });
  };

  componentDidUpdate(prevProps: PropTypes, prevState: StateTypes) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    const { editMode } = this.state;
    return (
      <>
        {!editMode ? (
          <span onClick={this.handleActivateEditMode}>
            {this.props.status || "Status: К сожалению, статуса нет..."}
          </span>
        ) : (
          <input
            onChange={this.handleStatusChange}
            value={this.state.status}
            autoFocus={true}
            onBlur={this.handleDeactivateEditMode}
          ></input>
        )}
      </>
    );
  }
}
