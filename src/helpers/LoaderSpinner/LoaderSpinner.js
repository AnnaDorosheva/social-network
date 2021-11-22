import React, { Component } from "react";
import Loader from "react-loader-spinner";
import s from "./LoaderSpinner.module.css"

export default class LoaderSpinner extends Component {
  render() {
    return (
      <div className={s.backgroundLoader}>
        <Loader type="Oval" color="rgb(127, 117, 221)" height={280} width={280} secondaryColor="Grey"
        />
      </div>
    );
  }
};
