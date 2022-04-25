import React, { useEffect } from "react";
import PageLayout from "../components/page-layout";
import PageTitle from "../components/page-title";
import Content from "../components/content";
import BackButton from "../components/back-button";

const Teachers = ({ title, content }) => {
  return <PageLayout>
    <Content>
      <BackButton target="/felveteli"/>
      { title &&
        <PageTitle content={ title } />
      }
      { content &&
        <div dangerouslySetInnerHTML={{__html: content }}></div>
      }
    </Content>
  </PageLayout>
};

export default Teachers;