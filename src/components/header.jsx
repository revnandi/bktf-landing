import React from 'react'
import * as styles from './header.module.scss';
import BaIcon from '../images/icon_ba.svg';
import Navigation from './navigation';
import { useToggle } from '../hooks/hooks';

const Header = ({ menuContent, currentWaypoint }) => {
  const [isOpen, setIsOpen] = useToggle(false);
  // const {t} = useTranslation();

  return (
    <header className={ styles.container }>
      <div>
      <div className={ styles.top }>
        <h1 className={ styles.logo }>
          <span dangerouslySetInnerHTML={{__html: menuContent.sub_title }}></span>
        </h1>
        <img className={ styles.icon } src={ BaIcon } alt="" />
      </div>
        <h2 className={ styles.subtitle }>
          <a href="/">{ menuContent.title }</a>
        </h2>
      </div>
      <Navigation
        currentWaypoint={ currentWaypoint }
        isOpen={ isOpen }
        passedFunction={ setIsOpen }
        items={ menuContent.navigation }/>
      <button className={ styles.button } onClick={ setIsOpen }>
      •••
      </button>
    </header>
  )
};

export default Header;