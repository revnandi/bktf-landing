import React, { useRef, useEffect } from 'react'
import * as styles from './blobs.module.scss';
import gsap from 'gsap';

const Blobs = () => {
  const tl = useRef(null);
  const blob1 = useRef(null);
  const blob2 = useRef(null);

  useEffect(() => {
    console.log(blob1)
    tl.current = gsap.timeline({repeat: -1});

    tl.current.to(blob1.current, {
      keyframes: {
        scale: ['1.6', '1.8', '1.8', '1.9', '1.6'],
        x: ['-5vw', '-5vw', '-5vw', '-5vw', '-5vw'],
        y: [0, '30vh', '40vh', '20vh', 0],
        rotate: ['0', '160deg', '160deg', '-90deg', '0']
      },
      duration: 40
    }, 'blobs');

    tl.current.to(blob2.current, {
      keyframes: {
        scale: [1.9, 1.8, 1.5, 2, 1.9],
        x: ['-5vw', '-5vw', '-5vw', '-20vw', '-5vw'],
        y: [0, '30vh', '40vh', '25vh', 0],
        rotate: ['0', '160deg', '200deg', '-15deg', '0']
      },
      duration: 40
    }, 'blobs');
  
    return () => {
      tl.current.kill();
    }
  }, [])
  

  return (
    <div className={ styles.container }>
      <svg ref={ blob1 } className={ styles.blob1 } viewBox="0 0 310 350">
        <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
      </svg>
      <svg ref={ blob2 } className={ styles.blob2 } viewBox="0 0 310 350">
        <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
      </svg>
    </div>
  )
};

export default Blobs;