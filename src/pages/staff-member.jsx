import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../components/page-layout";
import Content from "../components/content";
import Breadcrumbs from "../components/breadcrumbs";
import StaffMember from "../components/staff-member";

const StaffMemberPage = ({ staffMembers }) => {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const memberToSet = staffMembers.find((item) => item.id === id);
    setMember(memberToSet);
  }, [staffMembers]);
  

  return <PageLayout>
    <Content>
      <Breadcrumbs content="Alapkézés / A Képzésről / Tanárok & stáb"/>
      { member &&
        <StaffMember member={ member } />
      }
    </Content>
  </PageLayout>
};

export default StaffMemberPage;