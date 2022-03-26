import React from 'react';
import * as styles from './main.module.scss';
import Content from './content';

const Main = ({content}) => {
return (
  <main class={ styles.container }>
    <section id="mission">
      <Content>
        <div dangerouslySetInnerHTML={{__html: content.mission.content }}/>
      </Content>
    </section>
  </main>
  )
};

export default Main;