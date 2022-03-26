import { useState, useEffect, Suspense } from 'react';
import '@fontsource/kumbh-sans';
import './App.scss';
import Header from './components/header';
import Main from './components/main';
import Spinner from './components/spinner';
import './i18n.js';
import { useTranslation } from 'react-i18next';

function App() {
  const [t, i18n] = useTranslation();
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [pageData, setPageData] = useState([]);
  
  useEffect(() => {
    fetch(
      i18n.language === 'en'
        ? 'http://localhost:8888/wp-json/wp/v2/cd_landing?slug=landing-en'
        : 'http://localhost:8888/wp-json/wp/v2/cd_landing?slug=landing-hu'
      )
      .then(res => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setPageData(result[0]);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      )
  }, [i18n.language]);

  // console.log(i18n.language);

  if(!loaded) {
    return <Spinner></Spinner>
  } else {
    return (
      <div className="App">
        <Header
          menuContent={
            {
              title: pageData.acf ? pageData.acf.page_title : '',
              sub_title: pageData.acf ? pageData.acf.sub_title : '',
              navigation: pageData.acf ? pageData.acf.navigation : []
            }
          }
        ></Header>
        <Main
          content={
            {
              mission: {
                content: pageData.acf ? pageData.acf.section_mission : ""
              }
            }
          }
        ></Main>
      </div>
    )
  }

};

export default App;
