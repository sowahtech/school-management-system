import React from "react";
import {
  Navbar,
  NavLink,
  ButtonsContainer,
  LoginButton,
  GuestButton,
  HomeContainer,
  SchoolInfo,
  SchoolImage,
  Title,
  LoremTextContainer,
  AdminRegisterLink,
  Logo,
  NavigationLinks,
} from "../styles/styles";
import { LoremIpsum } from "lorem-ipsum";
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";
import { Link, useNavigate } from "react-router-dom";
const lorem = new LoremIpsum();

const Home = () => {
  const navigate = useNavigate();
  const LoremText = lorem.generateParagraphs(1);

  const handleLogInClick = () => {
    navigate("/choose-user");
  };
  return (
    <>
      <Navbar>
        {" "}
        <Logo src={bg1} alt="Logo" />{" "}
        <NavigationLinks>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </NavigationLinks>
        <ButtonsContainer>
          <LoginButton onClick={handleLogInClick}>Sign In</LoginButton>
          <GuestButton onClick={handleLogInClick}>Guest Mode</GuestButton>
        </ButtonsContainer>
      </Navbar>
      <HomeContainer>
        <SchoolInfo>
          <Title>School Management System</Title>
          <LoremTextContainer>
            <p>{LoremText}</p>
          </LoremTextContainer>
          <AdminRegisterLink>Admin Register</AdminRegisterLink>
        </SchoolInfo>
        <SchoolImage src={bg} alt="pupils" />
      </HomeContainer>
    </>
  );
};

export default Home;
