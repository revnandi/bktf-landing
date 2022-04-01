import React from "react";
import * as styles from "./hero-image.module.scss";
import lazySizes from "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";
import "lazysizes/plugins/blur-up/ls.blur-up";

const HeroImage = ({ image }) => {
return (
  <div className={ styles.container }>
    <img className={ [styles.image, "lazyload", "blur-up"].join(" ") } src={ image.sizes.lqip } data-src={ image.sizes['1536x1536'] } alt={ image.alt } />
  </div>
  );
};

export default HeroImage;