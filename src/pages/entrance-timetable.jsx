import React from "react";
import PageLayout from "../components/page-layout";
import Content from "../components/content";
import BackButton from "../components/back-button";
import Timetable from "../components/timetable";
import SectionTitle from "../components/section-title";
import { useTranslation } from 'react-i18next';

const EntranceTimetablePage = ({ timetable }) => {
  const { i18n } = useTranslation();

  console.log(i18n.language);

  return <PageLayout>
    <Content>
      <BackButton target="/felveteli"/>
      <SectionTitle title={ i18n.language === 'hu' ? '<h1>Mintaórarend</h1>\n' : '<h1>Timetable</h1>\n' } isFilled/>
      <Timetable timetable={ timetable } />
    </Content>
  </PageLayout>
};

export default EntranceTimetablePage;