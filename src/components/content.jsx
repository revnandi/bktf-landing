import React, { useEffect, useRef } from 'react'
import * as styles from './content.module.scss';
import { useNavigate } from "react-router-dom";

const Content = ({ children }) => {
  let navigate = useNavigate();
  const container = useRef();
  const moreButtons = useRef();

  useEffect(() => {
    moreButtons.current = container.current.querySelectorAll('.navigate-button');
    moreButtons.current.forEach(item => {
      if(item.querySelector('a')){
        if(item.querySelector('a').getAttribute("href")) {
          if(item.querySelector('a').getAttribute("href").charAt(0) === '/') {
            console.log(item);
            const linkString = item.querySelector('a').getAttribute("href");
            item.addEventListener('click', () => {
              navigate(linkString);
              setTimeout(() => {
                gsap.to(window, {duration: 0, scrollTo: {y: 0, autoKill: true }});
              }, 10);
            });
            item.querySelector("a").removeAttribute("href");
          }
        }
      }
    });
  }, [children]);

  return (
    <div ref={ container } className={ styles.container }>
      { children }
    </div>
  )
};

export default Content;