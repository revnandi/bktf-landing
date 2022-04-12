import React from "react";
import * as styles from "./back-button.module.scss";

const BackButton = ({ target }) => {
return (
  <div className={ styles.backbutton }>
    <svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18.5" cy="18.5" r="18.5" fill="black"></circle>
      <path transform="rotate(180 18.5 18.5)" d="M28.0551 19.2071C28.4456 18.8166 28.4456 18.1834 28.0551 17.7929L21.6911 11.4289C21.3006 11.0384 20.6674 11.0384 20.2769 11.4289C19.8864 11.8195 19.8864 12.4526 20.2769 12.8431L25.9337 18.5L20.2769 24.1569C19.8864 24.5474 19.8864 25.1805 20.2769 25.5711C20.6674 25.9616 21.3006 25.9616 21.6911 25.5711L28.0551 19.2071ZM7.23926 19.5L27.348 19.5L27.348 17.5L7.23926 17.5L7.23926 19.5Z" fill="#F1F6E7"></path>
    </svg>
    <a target="_self">Vissza</a>
  </div>
  )
};

export default BackButton;