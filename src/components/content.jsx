import React from 'react'
import * as styles from './content.module.scss';

const Content = ({ children }) => {
  return (
    <div className={ styles.container }>
      { children }
    </div>
  )
};

export default Content;