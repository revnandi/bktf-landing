import React, { useEffect, useRef } from 'react'
import * as styles from './content.module.scss';

const Content = ({ children }) => {
  const container = useRef();
  const moreButtons = useRef();

  useEffect(() => {
    moreButtons.current = container.current.querySelectorAll('.navigate-button');
    // console.log(container);
    // console.log(moreButtons);
  }, []);

  return (
    <div ref={ container } className={ styles.container }>
      { children }
    </div>
  )
};

export default Content;