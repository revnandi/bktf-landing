import React, { useEffect } from "react";
import PageLayout from "../components/page-layout";
import PageTitle from "../components/page-title";
import Content from "../components/content";
import Breadcrumbs from "../components/breadcrumbs";

const Teachers = ({ title, content }) => {
  return <PageLayout>
    <Content>
      <Breadcrumbs content="Alapkézés / A Képzésről / Tanáraink"/>
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