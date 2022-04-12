import React, { useEffect, useState, useRef } from 'react';
import * as styles from './main.module.scss';
import Content from './content';
import Slider from './slider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useNavigate } from "react-router-dom";
import { useScrollYPosition } from '../hooks/hooks';
import SectionTitle from './section-title';

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

  const container = useRef();
  const moreButtons = useRef();

  useEffect(() => {
    moreButtons.current = container.current.querySelectorAll('.navigate-button');

    moreButtons.current.forEach(item => {
      if(item.querySelector('a')){
        if(item.querySelector('a').getAttribute("href")) {
          if(item.querySelector('a').getAttribute("href").charAt(0) === '/') {
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
  }, [content]);

  const handleEnter = (sectionName) => {
    console.log(sectionName);
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
      start: 'top bottom',
      end: 'bottom bottom',
      markers: true,
      onToggle: () => handleEnter('mission')
    });

    ScrollTrigger.create({
      trigger: '#course',
      start: 'top bottom',
      end: 'bottom bottom',
      markers: true,
      onToggle: () => handleEnter('course')
    });

    ScrollTrigger.create({
      trigger: '#entrance',
      start: 'top bottom',
      end: 'bottom bottom',
      markers: true,
      onToggle: () => handleEnter('entrance')
    });

    ScrollTrigger.create({
      trigger: '#leap',
      start: 'top bottom',
      end: 'bottom bottom',
      markers: true,
      onToggle: () => handleEnter('leap')
    });

    ScrollTrigger.create({
      trigger: '#events',
      start: 'top bottom',
      end: 'bottom bottom',
      markers: true,
      onToggle: () => handleEnter('events')
    });
    
    ScrollTrigger.create({
      trigger: '#contact',
      start: 'top bottom',
      end: 'bottom bottom',
      markers: true,
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
    <main ref={ container } className={ styles.container } id="content_main">
      <section id='mission'>
        <Slider
          slides={ slides }
          passedFunctions={ functionsForSlider }
        />
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
          <div id='course' >
            <SectionTitle title={ content.course.title }/>
            <div dangerouslySetInnerHTML={{__html: content.course.content }}/>
          </div>
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
          <div id='entrance'>
            <SectionTitle title={ content.entrance.title }/>
            <div dangerouslySetInnerHTML={{__html: content.entrance.content }}/>
          </div>
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
          <div id='leap'>
            <SectionTitle title={ content.leap.title }/>
            <div dangerouslySetInnerHTML={{__html: content.leap.content }}/>
          </div>
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
          <div id='events'>
            <SectionTitle title={ content.events.title }/>
            <div dangerouslySetInnerHTML={{__html: content.events.content }}/>
          </div>
        </Content>
      </section>
      <section>
        <Content>
          <div id='contact'>
            <SectionTitle title={ content.contact.title }/>
            <div dangerouslySetInnerHTML={{__html: content.contact.content }}/>
          </div>
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