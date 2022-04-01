import React from "react";
import PageLayout from "../components/page-layout";
import Content from "../components/content";
import Breadcrumbs from "../components/breadcrumbs";
import HeroImage from "../components/hero-image";
import PageTitle from "../components/page-title";
import Staff from "../components/staff";

const StaffPage = ({ title, heroImage, content, staffMembers }) => {
  return <PageLayout>
    <Content>
      <Breadcrumbs content="Alapkézés / A Képzésről / Tanárok & stáb"/>
      { heroImage &&
        <HeroImage image={ heroImage } />
      }
      { title &&
        <PageTitle content={ title } />
      }
      { content &&
        <div dangerouslySetInnerHTML={{__html: content }}></div>
      }
      { staffMembers &&
        <Staff staffMembers={ staffMembers }/>
      }
    </Content>
  </PageLayout>
};

export default StaffPage;