import React from "react";
import PageLayout from "../components/page-layout";
import Content from "../components/content";
import Breadcrumbs from "../components/breadcrumbs";
import Timetable from "../components/timetable";
import SectionTitle from "../components/section-title";
import { useTranslation } from 'react-i18next';

const TimetablePage = ({ timetable }) => {
  const { i18n } = useTranslation();

  console.log(i18n.language);

  return <PageLayout>
    <Content>
      <Breadcrumbs content="Alapképzés / Mintaórarend"/>
      <SectionTitle title={ i18n.language === 'hu' ? '<h1>Mintaórarend</h1>\n' : '<h1>Timetable</h1>\n' } isFilled/>
      <Timetable timetable={ timetable } />
    </Content>
  </PageLayout>
};

export default TimetablePage;