import React from "react";
import PageLayout from "../components/page-layout";
import Content from "../components/content";
import Breadcrumbs from "../components/breadcrumbs";
import HeroImage from "../components/hero-image";
import PageTitle from "../components/page-title";

const NotFoundPage = ({ title, heroImage, content }) => {
  return <PageLayout>
    <Content>
      <Breadcrumbs content="404"/>
      { heroImage &&
        <HeroImage image={ heroImage } />
      }
      { title &&
        <PageTitle content={ title } />
      }
      { content &&
        <div dangerouslySetInnerHTML={{__html: content }}></div>
      }
    </Content>
  </PageLayout>
};

export default NotFoundPage;