import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import ImgOnes from "../assests/images/ImgTwo.svg";
import ImgTwos from "../assests/images/ImgOne.svg";
import ImgThrees from "../assests/images/ImgThree.svg";
import ImgFours from "../assests/images/ImgFour.svg";
import MiniRadius from "../assests/images/MiniRadius.svg";
import LeftImage from "../assests/images/leftImage.svg";
import RightImage from "../assests/images/rightImage.svg";
import Button from "../components/Button/Button";
import Group from "../assests/images/Group.svg";
import StartUp from "../assests/images/startup 1.svg";
import Coding from "../assests/images/coding (1) 1.svg";
import Cloud from "../assests/images/cloud-computing 1.svg";
import SendForm from "../components/SendForm/SendForm";

function About() {
  return (
    <AboutBody>
      <Header></Header>
      <Main>
        <LoremAbout>
          <ImgLeft src={LeftImage}></ImgLeft>
          <ImgTop>
            <ImgOne src={ImgOnes}></ImgOne>
            <ImgTwo src={ImgTwos}></ImgTwo>
            <ImgLoremAbout>
              <LAHeadText>About us</LAHeadText>
              <LACenterText>
                Lorem Ipsum is simply <br></br>dummy text of the printing.{" "}
              </LACenterText>
              <LAEndText>
                Lorem Ipsum is simply dummy text of the printing<br></br>and
                typesetting industry. Lorem Ipsum has been <br></br>the
                industry's
              </LAEndText>
            </ImgLoremAbout>
          </ImgTop>
          <ImgBottom>
            <ImgThree src={ImgThrees}></ImgThree>
            <ImgFour src={ImgFours}></ImgFour>
            <ImgRadius src={MiniRadius}></ImgRadius>
          </ImgBottom>
          <ImgRight src={RightImage}></ImgRight>
        </LoremAbout>

        <LoremTexts>
          <LoremTextHead>
            Lorem Ipsum is simply dummy text <br></br>of the printing.{" "}
          </LoremTextHead>
          <LoremTextBottom>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website <br></br>builders measuring dozens of
            completed projects. We build and develop mobile applications for{" "}
            <br></br> several top platforms, including Android & IOS. We build
            and develop mobile applications for several <br></br> top platforms,
            including Android & IOS.{" "}
          </LoremTextBottom>
        </LoremTexts>

        <LoremApplacation>
          <LoremLeft>
            <Border></Border>
            <LoremApplacationHeadText>
              Lorem Ipsum is simply dummy <br></br> text of the printing.{" "}
            </LoremApplacationHeadText>
            <LoremApplacationCenterText>
              KODEX TECHNOLOGY (PVT) LTD is a team of <br></br>experienced
              mobile and web applications and <br></br>website builders
              measuring dozens of <br></br> completed projects.
            </LoremApplacationCenterText>
            <Button name={"Contact us"} className={"borderButton"} />
          </LoremLeft>
          <LoremRight>
            <LoremApplacationLeft>
              <CardApplacations>
                <CardImageBody style={{ background: "#FFF2F2" }}>
                  <CardImage src={Group}></CardImage>
                </CardImageBody>
                <CardText>Web Application</CardText>
              </CardApplacations>

              <CardApplacations style={{ marginTop: "55px" }}>
                <CardImageBody style={{ background: "#F1E8FF" }}>
                  <CardImage src={Coding}></CardImage>
                </CardImageBody>
                <CardText>Mobile Applications</CardText>
              </CardApplacations>
            </LoremApplacationLeft>

            <LoremApplacationRight>
              <CardApplacations>
                <CardImageBody style={{ background: "#E2F3FF" }}>
                  <CardImage src={StartUp}></CardImage>
                </CardImageBody>

                <CardText>SEO</CardText>
              </CardApplacations>

              <CardApplacations style={{ marginTop: "55px" }}>
                <CardImageBody style={{ background: "#FFE7FB" }}>
                  <CardImage src={Cloud}></CardImage>
                </CardImageBody>

                <CardText>AR/VR</CardText>
              </CardApplacations>
            </LoremApplacationRight>
          </LoremRight>
        </LoremApplacation>

        <SendForm></SendForm>
      </Main>
      <Footer></Footer>
    </AboutBody>
  );
}

export default About;

const AboutBody = styled.div``;

const Main = styled.main`
  width: 100%;
  background: #fff;
`;

const LoremAbout = styled.main`
  width: 100%;
  position: relative;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 156px 80px 0px 89px;
`;

const ImgTop = styled.div`
  display: flex;
  align-items: end;
`;

const ImgBottom = styled.div`
  display: flex;
  margin-top: 60px;
  position: relative;
`;

const ImgOne = styled.img`
  margin-right: 50px;
`;

const ImgTwo = styled.img`
  margin-right: 69px;
`;

const LAHeadText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 38px;
  color: #1090cb;
`;

const LACenterText = styled.p`
  font-style: normal;
  font-weight: 600;
  margin-top: 19px;
  font-size: 40px;
  line-height: 170%;
  color: #252525;
`;

const LAEndText = styled.p`
  font-style: normal;
  margin-top: 37px;
  font-weight: 400;
  font-size: 18px;
  line-height: 175%;
  color: #868686;
`;

const ImgLoremAbout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ImgThree = styled.img`
  margin-left: 74px;
`;

const ImgFour = styled.img`
  margin-left: 51px;
  z-index: 1;
`;

const ImgRadius = styled.img`
  position: absolute;
  right: 0;
  bottom: -25%;
`;

const ImgLeft = styled.img`
  position: absolute;
  left: 0;
  bottom: -20%;
`;

const ImgRight = styled.img`
  position: absolute;
  right: 0;
  top: -8%;
`;

const LoremTexts = styled.div`
  padding: 134px 0px 187px 123px;
`;

const LoremTextHead = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 160%;
  color: #1090cb;
`;

const LoremTextBottom = styled.p`
  font-style: normal;
  margin-top: 48px;
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;
  color: #585858;
`;

const LoremApplacation = styled.div`
  padding: 0px 0px 197px 123px;
  display: flex;
  justify-content: space-between;
`;

const LoremLeft = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Border = styled.div`
  width: 54px;
  height: 5px;
  background: #4628a4;
`;

const LoremApplacationHeadText = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 160%;
  color: #000000;
  margin-top: 28px;
`;

const LoremApplacationCenterText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;
  color: #585858;
  margin-top: 31px;
  margin-bottom: 62px;
`;

const LoremRight = styled.div`
  padding: 65px 91px 95px 61px;
  background: #ffffff;
  display: flex;
  box-shadow: 0px 4px 124px rgba(0, 0, 0, 0.1);
`;

const LoremApplacationLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoremApplacationRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 56px;
`;

const CardApplacations = styled.div`
  display: flex;
  align-items: center;
`;

const CardImageBody = styled.div`
  width: 91px;
  height: 90px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const CardImage = styled.img`
  display: flex;
  align-items: center;
`;

const CardText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 177.9%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #2e0d64;
  margin-left: 29px;
`;
