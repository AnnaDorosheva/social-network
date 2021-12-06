import React, { Component } from "react";

export default class ProfileStatus extends Component {
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
  };
  handleStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
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
            {this.props.status || "Status: ......"}
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
