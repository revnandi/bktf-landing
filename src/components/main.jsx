import React, { useEffect, useState } from 'react';
import * as styles from './main.module.scss';
import Content from './content';
import Slider from './slider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  useNavigate,
} from "react-router-dom";
import { useScrollYPosition } from '../hooks/hooks';

import doodle_1 from '../images/BKTF_TA_pictograms_fin-52.svg';
import doodle_2 from '../images/BKTF_TA_pictograms_fin-56.svg';
import doodle_3 from '../images/BKTF_TA_pictograms_fin-01.svg';
import doodle_4 from '../images/BKTF_TA_pictograms_fin-05.svg';
import doodle_5 from '../images/BKTF_TA_pictograms_fin-40.svg';
import doodle_6 from '../images/BKTF_TA_pictograms_fin-48.svg';
import doodle_7 from '../images/BKTF_TA_pictograms_fin-24.svg';
import doodle_8 from '../images/BKTF_TA_pictograms_fin-49.svg';
import doodle_9 from '../images/BKTF_TA_pictograms_fin-07.svg';
import doodle_10 from '../images/BKTF_TA_pictograms_fin-59.svg';
import doodle_11 from '../images/BKTF_TA_pictograms_fin-46.svg';
import doodle_12 from '../images/BKTF_TA_pictograms_fin-42.svg';

const Main = ({content, slides, passedFunctions }) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  let navigate = useNavigate();
  const [slidesLoaded, setSlidesLoaded] = useState(false);

  const handleEnter = (sectionName) => {
    passedFunctions.updateWaypoint(sectionName);
  };

  const functionsForSlider = {
    setAllLoaded: () => {
      console.log('setAllLoaded');
      setSlidesLoaded(true);
    }
  };

  const scrollToTop = () => {
    gsap.to(window, {duration: 1, scrollTo: "main", yoyo: false});
  }

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#mission',
      markers: false,
      start: 'top bottom',
      end: 'bottom bottom',
      onToggle: () => handleEnter('mission')
    });

    ScrollTrigger.create({
      trigger: '#course',
      markers: false,
      start: 'top bottom',
      end: 'bottom bottom',
      onToggle: () => handleEnter('course')
    });

    ScrollTrigger.create({
      trigger: '#entrance',
      markers: false,
      start: 'top bottom',
      end: 'bottom bottom',
      onToggle: () => handleEnter('entrance')
    });

    ScrollTrigger.create({
      trigger: '#leap',
      markers: false,
      start: 'top bottom',
      end: 'bottom bottom',
      onToggle: () => handleEnter('leap')
    });

    ScrollTrigger.create({
      trigger: '#events',
      markers: false,
      start: 'top bottom',
      end: 'bottom bottom',
      onToggle: () => handleEnter('events')
    });
    
    ScrollTrigger.create({
      trigger: '#contact',
      markers: false,
      start: 'top bottom',
      end: 'bottom bottom',
      onToggle: () => handleEnter('contact')
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(item => item.kill());
    }
  }, [content , slidesLoaded]);

  useEffect(() => {
    const navigateButtons = document.querySelectorAll('.navigate-button');

    for (let index = 0; index < navigateButtons.length; index++) {
      navigateButtons[index].addEventListener('click', function(event) {
        // const target = event.currentTarget.dataset.to;
        // navigate(target);
        // window.open("http://localhost:3000/" + target, '_blank')?.focus();
      });
    };

  
    // return () => {
    //   second
    // }
  }, [content])

  return (
    <main className={ styles.container } id="content_main">
      <Slider
        slides={ slides }
        passedFunctions={ functionsForSlider }
      />
      <section id='mission'>
        <Content>
          <div dangerouslySetInnerHTML={{__html: content.mission.content }}/>
        </Content>
      </section>
      <section>
        <Content>
          <div style={ { position: 'relative' } }>
            <img
              className={ styles.doodle }
              src={ doodle_2 }
              alt=""
              style={
                {
                  position: 'absolute',
                  width: '10.25rem',
                  left: '12rem',
                  top: '-6.55rem'
                }
              }
            />
            <img
              className={ styles.doodle }
              src={ doodle_3 }
              alt=""
              style={
                {
                  position: 'absolute',
                  width: '10.25rem',
                  right: '7.5rem',
                  top: '-5.06rem'
                }
              }
            />
            <hr style={ { height: '1px', margin: '8rem 0 5rem 0', border: 'none', color: '#000', backgroundColor: '#000' } }/>
          </div>
          <div id='course' dangerouslySetInnerHTML={{__html: content.course.content }}/>
        </Content>
      </section>
      <section>
        <Content>
          <div style={ { position: 'relative' } }>
            <img
              className={ styles.doodle }
              src={ doodle_4 }
              alt=""
              style={
                {
                  position: 'absolute',
                  width: '10.25rem',
                  left: '0',
                  top: '-5.7rem'
                }
              }
            />
            <hr style={ { height: '1px', margin: '8rem 0 5rem 0', border: 'none', color: '#000', backgroundColor: '#000' } }/>
          </div>
          <div id='entrance' dangerouslySetInnerHTML={{__html: content.entrance.content }}/>
        </Content>
      </section>
      <section>
        <Content>
        <div style={ { position: 'relative' } }>
          <img
            className={ styles.doodle }
            src={ doodle_9 }
            alt=""
            style={
              {
                position: 'absolute',
                width: '10.25rem',
                left: '14rem',
                bottom: '-2.5rem'
              }
            }
          />
          <hr style={ { height: '1px', margin: '8rem 0 5rem 0', border: 'none', color: '#000', backgroundColor: '#000' } }/>
        </div>
          <div id='leap' dangerouslySetInnerHTML={{__html: content.leap.content }}/>
        </Content>
      </section>
      <section>
        <Content>
          <div style={ { position: 'relative' } }>
            <img
              className={ styles.doodle }
              src={ doodle_7 }
              alt=""
              style={
                {
                  position: 'absolute',
                  width: '10.25rem',
                  left: '11rem',
                  top: '-4.15rem',
                }
              }
            />
            <img
              className={ styles.doodle }
              src={ doodle_8 }
              alt=""
              style={
                {
                  position: 'absolute',
                  width: '10.25rem',
                  right: '6rem',
                  bottom: '2.75rem'
                }
              }
            />
            <hr style={ { height: '1px', margin: '8rem 0 5rem 0', border: 'none', color: '#000', backgroundColor: '#000' } }/>
          </div>
          <div id='events' dangerouslySetInnerHTML={{__html: content.events.content }}/>
        </Content>
      </section>
      <section>
        <Content>
          <div id='contact' dangerouslySetInnerHTML={{__html: content.contact.content }}/>
        </Content>
      </section>
        <svg
          className={ [styles.scrolltotop, scrollY > 950 ? styles.visible : ''].join(' ') }
          onClick={ () => scrollToTop() }
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="31" cy="31" r="31" fill="black"/>
          <path d="M31.7071 15.4668C31.3166 15.0763 30.6834 15.0763 30.2929 15.4668L23.9289 21.8308C23.5384 22.2213 23.5384 22.8545 23.9289 23.245C24.3195 23.6355 24.9526 23.6355 25.3431 23.245L31 17.5881L36.6569 23.245C37.0474 23.6355 37.6805 23.6355 38.0711 23.245C38.4616 22.8545 38.4616 22.2213 38.0711 21.8308L31.7071 15.4668ZM32 49.8696L32 16.1739L30 16.1739L30 49.8696L32 49.8696Z" fill="#F1F6E7"/>
        </svg>
    </main>
    )
  };

export default Main;