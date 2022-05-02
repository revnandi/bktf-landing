import React from "react";
import PageLayout from "../components/page-layout";
import Content from "../components/content";
import BackButton from "../components/back-button";
import HeroImage from "../components/hero-image";
import PageTitle from "../components/page-title";

const CoursePage = ({ title, heroImage, timetable, content1 }) => {
  return <PageLayout>
    <Content>
      <BackButton target="/"/>
      { title &&
        <PageTitle content={ title } />
      }
      { heroImage &&
        <HeroImage image={ heroImage } />
      }
      { content1 &&
        <div dangerouslySetInnerHTML={{__html: content1 }}></div>
      }
    </Content>
  </PageLayout>
};

export default CoursePage;