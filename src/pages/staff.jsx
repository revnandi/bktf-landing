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
      { title &&
        <PageTitle content={ title } />
      }
      { heroImage &&
        <HeroImage image={ heroImage } />
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