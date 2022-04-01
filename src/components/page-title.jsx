import React from "react";
import * as styles from "./page-title.module.scss";

const PageTitle = ({ content }) => {
return (
  <div className={ styles.container } dangerouslySetInnerHTML={{__html: content}}>
  </div>
  )
};

export default PageTitle;