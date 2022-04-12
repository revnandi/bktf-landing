import { useState, useEffect, Suspense } from 'react';
import '@fontsource/kumbh-sans';
import './App.scss';
import Header from './components/header';
import Main from './components/main';
import Spinner from './components/spinner';
import CoursePage from './pages/course';
import EntrancePage from './pages/entrance';
import LeapPage from './pages/leap';
import TimetablePage from './pages/timetable';
import NotFoundPage from './pages/404';
import StaffPage from './pages/staff';
import TeachersPage from './pages/teachers';
import StaffMemberPage from './pages/staff-member';
import './i18n.js';
import { useTranslation } from 'react-i18next';
import MouseCanvas from './components/mouse';
import Blobs from './components/blobs';
import { Helmet } from 'react-helmet';
import { Routes, Route } from "react-router-dom";

import meta_image from '../src/images/meta.png';

function App() {
  const [t, i18n] = useTranslation();
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [pageData, setPageData] = useState([]);
  const [activeWaypoint, setActiveWaypoint] = useState(null);

  const functionsforMain = {
    updateWaypoint: function(newWaypoint) {
      // console.log('setActiveWaypoint ' + newWaypoint);
      setActiveWaypoint(newWaypoint);
    }
  };
  
  useEffect(() => {
    fetch(
      i18n.language === 'en'
        ? 'https://bktfwp.freizeit.hu/wp-json/wp/v2/cd_landing?slug=landing-en&acf_format=standard'
        : 'https://bktfwp.freizeit.hu/wp-json/wp/v2/cd_landing?slug=landing-hu&acf_format=standard'
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


  if(!loaded) {
    return <div className="App">
      <Spinner></Spinner>
      {/* <Blobs /> */}
    </div>
  } else {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="hu" />
          <title>
            { 'Kortárstánc Művész | BKTF' }
          </title>
          <meta name="description" content="A Budapest Kortástánc Főiskola Kortárstánc művész képzésének oldala." />
          <link rel="canonical" href="https://kortars.tanc.org.hu/" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://kortars.tanc.org.hu/" />
          <meta property="og:title" content="Kortárstánc Művész" />
          <meta property="og:description" content="A Budapest Kortástánc Főiskola Kortárstánc művész képzésének oldala." />
          <meta property="og:image" content={meta_image } />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://kortars.tanc.org.hu/" />
          <meta property="twitter:title" content="Kortárstánc Művész" />
          <meta property="twitter:description" content="A Budapest Kortástánc Főiskola Kortárstánc művész képzésének oldala." />
          <meta property="twitter:image" content={ meta_image } />
        </Helmet>
        <Header
          currentWaypoint={ activeWaypoint }
          menuContent={
            {
              title: pageData.acf ? pageData.acf.page_title : '',
              sub_title: pageData.acf ? pageData.acf.sub_title : '',
              navigation: pageData.acf ? pageData.acf.navigation : []
            }
          }
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                slides={  pageData.acf ? pageData.acf.slider : [] }
                content={
                  {
                    mission: {
                      title: pageData.acf ? pageData.acf.mission_title : "",
                      content: pageData.acf ? pageData.acf.section_mission : ""
                    },
                    course: {
                      title: pageData.acf ? pageData.acf.course_title : "",
                      content: pageData.acf ? pageData.acf.section_course : ""
                    },
                    entrance: {
                      title: pageData.acf ? pageData.acf.entrance_title : "",
                      content: pageData.acf ? pageData.acf.section_entrance : ""
                    },
                    leap: {
                      title: pageData.acf ? pageData.acf.leap_title : "",
                      content: pageData.acf ? pageData.acf.section_leap : ""
                    },
                    events: {
                      title: pageData.acf ? pageData.acf.events_title : "",
                      content: pageData.acf ? pageData.acf.section_events : ""
                    },
                    contact: {
                      title: pageData.acf ? pageData.acf.contact_title : "",
                      content: pageData.acf ? pageData.acf.section_contact : ""
                    }
                  }
                }
                passedFunctions={ functionsforMain }
              />
            }
          />
          <Route
            path="/bovebben"
            element={
              <Main
                slides={  pageData.acf ? pageData.acf.slider : [] }
                content={
                  {
                    mission: {
                      content: pageData.acf ? pageData.acf.section_mission_extended : ""
                    },
                    course: {
                      content: pageData.acf ? pageData.acf.section_course_extended : ""
                    },
                    entrance: {
                      content: pageData.acf ? pageData.acf.section_entrance_extended : ""
                    },
                    leap: {
                      content: pageData.acf ? pageData.acf.section_leap_extended : ""
                    },
                    events: {
                      content: pageData.acf ? pageData.acf.section_events_extended : ""
                    },
                    contact: {
                      content: pageData.acf ? pageData.acf.section_contact_extended : ""
                    }
                  }
                }
                passedFunctions={ functionsforMain }
              />
            }
          />
          <Route
            path="/alapkepzes"
            element={
              <CoursePage
                heroImage={ pageData.acf ? pageData.acf.course_hero_image : false }
                title={ pageData.acf ? pageData.acf.course_title : "" }
                content1={ pageData.acf ? pageData.acf.section_course_extended : "" }
                timetable={ pageData.acf ? pageData.acf.timetable : []}
              />
            }
          />
          <Route
            path="/alapkepzes/tanaraink"
            element={
              <TeachersPage
                title={ i18n.language === "en" ? "<h1>Teachers</h1>\n" : "<h1>Tanáraink</h1>\n" }
                content={ pageData.acf ? pageData.acf.teachers : "" }
              />
            }
          />
          <Route
            path="/alapkepzes/stab"
            element={
              <StaffPage
                staffMembers={ pageData.acf ? pageData.acf.staff_members : []}
              />
            }
          />
          <Route
            path="/felveteli"
            element={
              <EntrancePage
                heroImage={ pageData.acf ? pageData.acf.entrance_hero_image : false }
                title={ pageData.acf ? pageData.acf.entrance_title : "" }
                content={ pageData.acf ? pageData.acf.section_entrance_extended : "" }
              />
            }
          />
          <Route
            path="/rafutas"
            element={
              <LeapPage
                heroImage={ pageData.acf ? pageData.acf.leap_hero_image : false }
                title={ pageData.acf ? pageData.acf.leap_title : "" }
                content={ pageData.acf ? pageData.acf.section_leap_extended : "" }
              />
            }
          />
          <Route
            path="/alapkepzes/mintaorarend"
            element={
              <TimetablePage
                timetable={ pageData.acf ? pageData.acf.timetable : []}
              />
            }
          />
          <Route
            path="/stab/:id"
            element={
              <StaffMemberPage
                staffMembers={ pageData.acf ? pageData.acf.staff_members : []}
              />
            }
          />
          <Route
            path="*"
            element={
              <NotFoundPage
                heroImage={ false }
                title="<h1>Az oldal nem található</h1>"
              />
            }
          />
        </Routes>
        {/* <Blobs /> */}
        <MouseCanvas />
      </div>
    )
  }

};

export default App;
