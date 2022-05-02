import React from "react";
import PageLayout from "../components/page-layout";
import Content from "../components/content";
import BackButton from "../components/back-button";
import HeroImage from "../components/hero-image";
import PageTitle from "../components/page-title";

const StudentLifePage = ({ title, heroImage, content }) => {
  return <PageLayout>
    <Content>
      <BackButton target="/alapkepzes"/>
      { title &&
        <PageTitle content={ title } />
      }
      { heroImage &&
        <HeroImage image={ heroImage } />
      }
      { content &&
        <div dangerouslySetInnerHTML={{__html: content }}></div>
      }
    </Content>
  </PageLayout>
};

export default StudentLifePage;