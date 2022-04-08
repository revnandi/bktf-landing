import React from "react";
import * as styles from "./spinner.module.scss";

const Spinner = () => {
return (
  <div className={ styles.container }>
    <div className={ styles.spinner }>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  )
};

export default Spinner;