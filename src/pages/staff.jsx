import React, { useEffect, useRef } from "react";
import PageLayout from "../components/page-layout";
import Content from "../components/content";
import HeroImage from "../components/hero-image";
import PageTitle from "../components/page-title";
import Staff from "../components/staff";
import BackButton from "../components/back-button";

const StaffPage = ({ title, heroImage, content, staffMembers }) => {

  return <PageLayout>
    <Content>
      <BackButton target="/alapkepzes"/>
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