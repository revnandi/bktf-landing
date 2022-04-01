import React from 'react';
import { Splide, SplideSlide  } from '@splidejs/react-splide';
import * as styles from './slider.module.scss';
import '@splidejs/splide/dist/css/splide.min.css';

const Slider = ({ slides, passedFunctions }) => {
  // passedFunctions.setAllLoaded();
  let numberOfLoadedItems = 0;

  const handleImageLoad = () => {
    numberOfLoadedItems++;
    if(numberOfLoadedItems >= slides.length ) passedFunctions.setAllLoaded();
  };

  const renderSlides = () => {
    return slides.map((item, index) => {
      return (
        <SplideSlide className={ styles.slide } key={ `slide_${index}` }>
          <img
            src={ item.sizes.medium_large }
            alt='Táncosok'
            placeholder='blurred'
            onLoad={() => {{
              console.log('loaded ' + index);
              handleImageLoad();
            }}}
          />
        </SplideSlide>)
    });
  };

  return <div className={ styles.container }>
    <Splide
      className={ styles.slider }
      options={ {
        type  : 'fade',
        autoplay: true,
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