import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide  } from '@splidejs/react-splide';
import * as styles from './slider.module.scss';
import '@splidejs/splide/dist/css/splide.min.css';

const Slider = ({ slides, passedFunctions }) => {
  // passedFunctions.setAllLoaded();
  let sliderref = useRef(null);
  let numberOfLoadedItems = 0;

  const handleImageLoad = () => {
    numberOfLoadedItems++;
    if(numberOfLoadedItems >= slides.length ) passedFunctions.setAllLoaded();
  };

  useEffect(() => {
    if(sliderref.current) {
      setInterval(() => {
        sliderref.current.splide.go('>');
      }, 3000);
    }
  }, []);

  const renderSlides = () => {
    return slides.map((item, index) => {
      return (
        <SplideSlide className={ styles.slide } key={ `slide_${index}` }>
          <img
            className={ styles.image }
            src={ item.sizes.medium_large }
            alt='Táncosok'
            placeholder='blurred'
            onLoad={() => {{
              console.log('loaded ' + index);
              handleImageLoad();
            }}}
            width={ item.sizes['medium_large-width'] }
            height={ item.sizes['medium_large-height'] }
          />
        </SplideSlide>)
    });
  };

  return <div className={ styles.container }>
    <Splide
      ref={ sliderref }
      className={ styles.slider }
      options={ {
        type  : 'fade',
        autoplay: false,
        interval: 3000,
        rewind: true,
        pauseOnHover: false,
        pagination: false,
        lazyload: true,
        arrows: false
      } }
    >

      { renderSlides() }
    </Splide>
  </div>
};

export default Slider;