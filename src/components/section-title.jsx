import React from "react";
import * as styles from "./section-title.module.scss";


const SectionTitle = ({ title, isFilled }) => {
  console.log(title);
  return (
    <div className={ [styles.container, isFilled ? styles.inverse : ''].join(' ') }>
      { !isFilled && <div className={ styles.icon }>→</div> }
      <div className={ styles.title } dangerouslySetInnerHTML={{ __html: title }}></div>
    </div>
  );
};

export default SectionTitle;