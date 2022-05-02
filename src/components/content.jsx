import React, { useEffect, useRef, useContext } from 'react'
import * as styles from './content.module.scss';
import { useNavigate } from "react-router-dom";
import { yScrollContext } from "../components/yScroll";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";

const Content = ({ children }) => {
  const {setYscroll} = useContext(yScrollContext)
  let navigate = useNavigate();
  const container = useRef();
  const moreButtons = useRef();
  gsap.registerPlugin(ScrollToPlugin);


  function handleClickEvent(link) {
    setYscroll(prev=>window.scrollY );
    navigate(link);
    setTimeout(() => {
      gsap.to(window, {duration: 0, scrollTo: {y: 0, autoKill: true }});
    }, 10);
  };

  useEffect(() => {
    moreButtons.current = container.current.querySelectorAll('.navigate-button');
    // console.log(moreButtons.current);
    moreButtons.current.forEach(item => {
      if(item.querySelector('a')){
        if(item.querySelector('a').getAttribute("href")) {
          if(item.querySelector('a').getAttribute("href").charAt(0) === '/') {
            const linkString = item.querySelector('a').getAttribute("href");
            item.addEventListener('click', () => handleClickEvent(linkString));
            item.querySelector("a").removeAttribute("href");
          }
        }
      }
    });
    return () => {
      moreButtons.current.forEach(item => {
        item.removeEventListener('click', () => handleClickEvent);
      });
    }
  }, [children]);

  return (
    <div ref={ container } className={ styles.container }>
      { children }
    </div>
  )
};

export default Content;