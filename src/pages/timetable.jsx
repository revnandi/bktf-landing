import React from "react";
import PageLayout from "../components/page-layout";
import Content from "../components/content";
import Timetable from "../components/timetable";
import SectionTitle from "../components/section-title";
import BackButton from "../components/back-button";
import { useTranslation } from 'react-i18next';

const TimetablePage = ({ timetable }) => {
  const { i18n } = useTranslation();

  return <PageLayout>
    <Content>
      <BackButton target="/alapkepzes"/>
        { i18n.language === 'en' &&
          <p>Below is a sample of a week of activities for the BA course.</p>
        }
      <br></br>
      <SectionTitle title={ i18n.language === 'hu' ? '<h1>Mintaórarend</h1>\n' : '<h1>Timetable</h1>\n' } isFilled/>
      <Timetable timetable={ timetable } />
        <br></br>
        { i18n.language === 'hu' &&
          <p>*Az iskolai munka mellett egyéb elfoglaltságok (munka, tréning) nem ajánlottak.</p>
        }
        { i18n.language === 'en' &&
          <p>* No other commitments – work or additional training – are recommended outside of the school’s academic program.</p>
        }
    </Content>
  </PageLayout>
};

export default TimetablePage;