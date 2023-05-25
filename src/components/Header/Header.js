import React from "react";
import styled from "styled-components";
import "../../assests/css/reset.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderComponent>
      <TravolicBody>
        <Link style={{ textDecoration: "none" }} to="/">
          <TravolicLogo>Travolic</TravolicLogo>
        </Link>
      </TravolicBody>
      <HeaderRight>
        <List>
          <ListUl>
            <ListLi>
              <Link style={{ textDecoration: "none" }} to="/">
                <ListA>Home</ListA>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/about">
                <ListA>About</ListA>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/services">
                <ListA>Services</ListA>
              </Link>
            </ListLi>
          </ListUl>
        </List>
        <ContactUsButton>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <ContactUsButtonText>Contact us</ContactUsButtonText>
          </Link>
        </ContactUsButton>
      </HeaderRight>
    </HeaderComponent>
  );
}

export default Header;

const HeaderComponent = styled.div`
  width: 100%;
  border-bottom: 0.7px solid #c4c4c4;
  padding: 31px 30px 29px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TravolicBody = styled.div``;

const TravolicLogo = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 29px;
  line-height: 44px;
  color: #1090cb;
  text-decoration: none;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
const List = styled.div`
  display: flex;
  align-items: center;
`;
const ListUl = styled.ul`
  list-style-type: none;
`;
const ListLi = styled.li`
  display: flex;
`;
const ListA = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-right: 83px;
  text-decoration: none;
`;
const ContactUsButton = styled.button`
  background: #1090cb;
  border-radius: 6px;
  padding: 10px 27px 11px 26px;
  border: 0;
`;
const ContactUsButtonText = styled.button`
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
  border: 0;
  outline: none;
  background: #1090cb;
  cursor: pointer;
`;
