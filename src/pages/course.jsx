import React from "react";
import PageLayout from "../components/page-layout";
import Content from "../components/content";
import Breadcrumbs from "../components/breadcrumbs";
import HeroImage from "../components/hero-image";
import PageTitle from "../components/page-title";
import Timetable from "../components/timetable";

const CoursePage = ({ title, heroImage, timetable, content1 }) => {
  return <PageLayout>
    <Content>
      <Breadcrumbs content="Alapképzés / A Képzésről / A képzés bemutatása"/>
      { heroImage &&
        <HeroImage image={ heroImage } />
      }
      { title &&
        <PageTitle content={ title } />
      }
      { content1 &&
        <div dangerouslySetInnerHTML={{__html: content1 }}></div>
      }
    </Content>
  </PageLayout>
};

export default CoursePage;