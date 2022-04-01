import React from "react";
import * as styles from "./breadcrumbs.module.scss";

const Breadcrumbs = ({ content }) => {
return (
  <div className={ styles.container }>
    <div className={ styles.content }>{ content }</div>
  </div>
  )
};

export default Breadcrumbs;