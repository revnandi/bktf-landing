import React from "react";
import PageLayout from "../components/page-layout";
import Content from "../components/content";
import Breadcrumbs from "../components/breadcrumbs";
import Timetable from "../components/timetable";
import SectionTitle from "../components/section-title";

const TimetablePage = ({ timetable }) => {
  return <PageLayout>
    <Content>
      <Breadcrumbs content="Alapképzés / Mintaórarend"/>
      <SectionTitle title="Mintaórarend" isFilled/>
      <Timetable timetable={ timetable } key="key21"/>
    </Content>
  </PageLayout>
};

export default TimetablePage;