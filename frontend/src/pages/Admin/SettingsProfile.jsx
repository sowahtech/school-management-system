import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  EditButton,
} from "../../styles/SettingsProfileStyles";

const SettingsProfile = () => {
  const teacherInfo = {
    name: "John Doe",
    email: "doe@email.com",
    phone: "1111111111",
    address: "Nairobi Street, Kenya",
    qualification: "Bachelor in Education",
  };
  return (
    <ProfileContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ProfileHeader>Profile Details</ProfileHeader>
        <ProfileDetails>
          <ProfileLabel>Name: </ProfileLabel>
          <ProfileInfo>{teacherInfo.name}</ProfileInfo>

          <ProfileLabel>Email: </ProfileLabel>
          <ProfileInfo>{teacherInfo.email}</ProfileInfo>

          <ProfileLabel>Phone: </ProfileLabel>
          <ProfileInfo>{teacherInfo.phone}</ProfileInfo>

          <ProfileLabel>Address: </ProfileLabel>
          <ProfileInfo>{teacherInfo.address}</ProfileInfo>

          <ProfileLabel>Qualification: </ProfileLabel>
          <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
        </ProfileDetails>

        <EditButton>Edit Profile</EditButton>
      </Content>
    </ProfileContainer>
  );
};

export default SettingsProfile;
