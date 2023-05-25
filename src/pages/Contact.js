import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import MapImg from "../assests/images/Group 66.svg";
import Beverly from "../assests/images/Beverly 1.svg";
import FacebookIcon from "../assests/images/facebook.svg";
import InstagramIcon from "../assests/images/instagram.svg";
import TwitterIcon from "../assests/images/twitter.svg";
import LinkedlnIcon from "../assests/images/linkedin.svg";
import Phone from "../assests/images/phone 1.svg";
function Contact() {
  return (
    <ContactBody>
      <Header></Header>
      <Main>
        <MapsAboutBody>
          <MapsAboutTop>
            <MapsAboutTopLeft>
              <MaunHeadImg src={Beverly}></MaunHeadImg>
              <ManHeadText>Let’s Collaborate</ManHeadText>
              <ManSimpleText>
                Lorem Ipsum is simply dummy text of the <br></br>printing .
              </ManSimpleText>
            </MapsAboutTopLeft>
            <MapsAboutTopRight src={MapImg}></MapsAboutTopRight>
          </MapsAboutTop>

          <MapsAboutBottom>
            <FollowShare>
              <FollowShareHead>Follow us</FollowShareHead>
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
            </FollowShare>
            <Border></Border>
            <NumberShare>
              <NumberIcon src={Phone}></NumberIcon>
              <PhoneNumber>+94 4444 5555 6</PhoneNumber>
            </NumberShare>
            <Border></Border>
            <LocationShare></LocationShare>
          </MapsAboutBottom>
        </MapsAboutBody>
      </Main>
      <Footer></Footer>
    </ContactBody>
  );
}

export default Contact;

const ContactBody = styled.div``;

const Main = styled.main`
  width: 100%;
  background: #e5e5e5;
`;

const MapsAboutBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 89px 134px 86px 133px;
  background-color: white;
`;

const MapsAboutTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MapsAboutBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MapsAboutTopLeft = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
`;

const MaunHeadImg = styled.img`
  padding: 10px 10px 11px 11px;
  background-color: #f5f3da;
  border-radius: 50%;
  margin-bottom: 16px;
`;

const ManHeadText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 170%;
  color: #000000;
  margin-bottom: 15px;
`;

const ManSimpleText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 189.5%;
  color: #777777;
`;

const MapsAboutTopRight = styled.img``;

const NumberShare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LocationShare = styled.div``;

const Border = styled.div`
  border: 1px solid #c2c2c2;
  transform: rotate(90deg);
  width: 102px;
`;

const FollowShare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FollowShareHead = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 189.5%;
  color: #000000;
`;

const FooterListSocialMedia = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 18px;
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

const NumberIcon = styled.img``;

const PhoneNumber = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  color: #333333;
  margin-left: 25px;
`;
