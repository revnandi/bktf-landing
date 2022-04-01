import React from "react";
import * as styles from "./page-layout.module.scss";

const PageLayout = ({ children }) => {
  return <main className={ styles.container }>
    { children }
  </main>
};

export default PageLayout;