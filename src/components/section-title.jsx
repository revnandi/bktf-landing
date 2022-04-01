import React from "react";
import * as styles from "./section-title.module.scss";


const SectionTitle = ({ title, isFilled }) => {
  return (
    <div className={ [styles.container, isFilled ? styles.inverse : ''].join(' ') }>
      <div className={ styles.icon }>→</div>
      <h1 className={ styles.title }>{ title }</h1>
    </div>
  );
};

export default SectionTitle;