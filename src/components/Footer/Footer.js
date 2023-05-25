import React from "react";
import styled from "styled-components";
import "../../assests/css/reset.css";
import FacebookIcon from "../../assests/images/facebook.svg";
import InstagramIcon from "../../assests/images/instagram.svg";
import TwitterIcon from "../../assests/images/twitter.svg";
import LinkedlnIcon from "../../assests/images/linkedin.svg";
function Footer() {
  return (
    <FooterComponent>
      <FooterComponentTop>
        <FooterLogoAbout>
          <Logo>LOGO</Logo>
          <LogoText>
            Lorem Ipsum is simply dummy text of the <br></br> printing and
            typesetting industry.
          </LogoText>
          <LogoMail>@Lorem</LogoMail>
        </FooterLogoAbout>

        <FooterListOne>
          <FooterListHead>About us</FooterListHead>
          <FooterListUl>
            <FooterListLi>Lorem</FooterListLi>
            <FooterListLi>Portfolio</FooterListLi>
            <FooterListLi>Careers</FooterListLi>
            <FooterListLi>Contact us</FooterListLi>
          </FooterListUl>
        </FooterListOne>

        <FooterListTwo>
          <FooterListHead>Contact us</FooterListHead>
          <FooterListUl>
            <FooterListLi>
              Lorem Ipsum is simply dummy text <br></br>of the printing and
              typesetting <br></br>industry.{" "}
            </FooterListLi>
            <FooterListLi>+908 89097 890</FooterListLi>
          </FooterListUl>
        </FooterListTwo>

        <FooterListSocialMedia>
          <FooterListSocialMediaBox>
            <FooterListSocialMediaImg
              src={FacebookIcon}
            ></FooterListSocialMediaImg>
          </FooterListSocialMediaBox>
          <FooterListSocialMediaBox>
            <FooterListSocialMediaImg
              src={InstagramIcon}
            ></FooterListSocialMediaImg>
          </FooterListSocialMediaBox>
          <FooterListSocialMediaBox>
            <FooterListSocialMediaImg
              src={TwitterIcon}
            ></FooterListSocialMediaImg>
          </FooterListSocialMediaBox>
          <FooterListSocialMediaBox>
            <FooterListSocialMediaImg
              src={LinkedlnIcon}
            ></FooterListSocialMediaImg>
          </FooterListSocialMediaBox>
        </FooterListSocialMedia>
      </FooterComponentTop>
      <FooterComponentBottom>
        <FooterBottomText>
          Copyright ® 2021 Lorem All rights Rcerved
        </FooterBottomText>
      </FooterComponentBottom>
    </FooterComponent>
  );
}

export default Footer;

const FooterComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FooterComponentTop = styled.div`
  display: flex;
  padding: 82px 120px 53px 101px;
  justify-content: space-between;
`;

const FooterComponentBottom = styled.div`
  width: 100%;
  border-top: 0.8px solid #d2d2d2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 29px 0px 27px 0px;
`;

const Logo = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #00329b;
`;

const LogoText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 27px;
  color: #515151;
`;

const LogoMail = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #515151;
  margin-top: 25px;
`;

const FooterLogoAbout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const FooterListOne = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const FooterListHead = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 15px;
`;

const FooterListUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const FooterListLi = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 186.3%;
  color: #515151;
`;

const FooterListTwo = styled.div``;

const FooterListSocialMedia = styled.div`
  display: flex;
  align-items: flex-end;
`;

const FooterListSocialMediaBox = styled.div`
  padding: 11px;
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  max-width: 34px;
  max-height: 34px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-right: 16px;
`;

const FooterListSocialMediaImg = styled.img``;

const FooterBottomText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 190.6%;
  color: #686868;
`;
