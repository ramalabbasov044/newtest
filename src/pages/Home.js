import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import Button from "../components/Button/Button";
import ApplacationImage from "../assests/images/applacationimg.svg";
import Vector2 from "../assests/images/Vector 2.svg";
import Vector1 from "../assests/images/Vector 1.svg";
import Wensite from "../assests/images/website-content 1.svg";
import Seo from "../assests/images/seo-tag 1.svg";
import Immersive from "../assests/images/immersive 1.svg";
import Coding from "../assests/images/coding (1) 1.svg";
import PhoneImg from "../assests/images/17. Recent Activities 1.svg";
import Happy from "../assests/images/happy 1.svg";
import MockUp from "../assests/images/website-mockup-png-10 1.svg";
import Radius from "../assests/images/Ellipse 4.svg";
import Notification from "../assests/images/Bell Angle 1.svg";
import Benoshop from "../assests/images/beneoshop.svg";
import Caspio from "../assests/images/caspio.svg";
import Hyper from "../assests/images/HyperGrid.svg";
import Leo from "../assests/images/leotrippi.svg";
import SendForm from '../components/SendForm/SendForm'
function Home() {
  return (
    <HomeBody>
      <Header></Header>
      <Main>
        <ApplacationsAbout>
          <LeftImage src={Vector2}></LeftImage>
          <ApplacationBody>
            <ApplacationLeft>
              <ApplacationHeadText>
                Experienced <SpaceText>mobile and web</SpaceText> <br></br>
                applications and website <br></br>
                builders measuring.
              </ApplacationHeadText>
              <ApplacationMiddleText>
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web <br></br>
                applications and website builders measuring dozens of completed
                projects. <br></br>We build and develop mobile applications for
                several top platforms,<br></br> including Android & IOS.{" "}
              </ApplacationMiddleText>
              <ButtonBody>
                <Button name={"Contact us"} className={"simpleButton"} />
                <Button name={"View more"} className={"borderButton"} />
              </ButtonBody>
            </ApplacationLeft>
            <ApplacationRight>
              <ApplacationImg src={ApplacationImage}></ApplacationImg>
            </ApplacationRight>
          </ApplacationBody>
          <RightImage src={Vector1}></RightImage>
        </ApplacationsAbout>

        <ApplacationNameBody>
          <Card>
            <CardImageBody style={{ backgroundColor: "#EFEAFF" }}>
              <CardImg src={Wensite}></CardImg>
            </CardImageBody>
            <CardTextBody>
              <CardHeadText>Web Application</CardHeadText>
              <CardMiddleText>Lorem Ipsum is simply</CardMiddleText>
            </CardTextBody>
          </Card>

          <Card>
            <CardImageBody style={{ backgroundColor: "#ECFFDA" }}>
              <CardImg src={Seo}></CardImg>
            </CardImageBody>
            <CardTextBody>
              <CardHeadText>SEO</CardHeadText>
              <CardMiddleText>Lorem Ipsum is simply</CardMiddleText>
            </CardTextBody>
          </Card>

          <Card>
            <CardImageBody style={{ backgroundColor: "#DAE6FF" }}>
              <CardImg src={Immersive}></CardImg>
            </CardImageBody>
            <CardTextBody>
              <CardHeadText>AR/VR Solutions</CardHeadText>
              <CardMiddleText>Lorem Ipsum is simply</CardMiddleText>
            </CardTextBody>
          </Card>

          <Card>
            <CardImageBody style={{ backgroundColor: "#FFE5DA" }}>
              <CardImg src={Coding}></CardImg>
            </CardImageBody>
            <CardTextBody>
              <CardHeadText>Mobile Applications</CardHeadText>
              <CardMiddleText>Lorem Ipsum is simply</CardMiddleText>
            </CardTextBody>
          </Card>
        </ApplacationNameBody>

        <ApplacationTextBody>
          <ApplacationLorem>
            Lorem Ipsum is simply dummy text of the printing.{" "}
          </ApplacationLorem>
          <ApplacationsText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.<br></br> Lorem Ipsum has been the industry's
          </ApplacationsText>
        </ApplacationTextBody>

        <ApplacationsCard>
          <ApplacationsLeftShare>
            <ApplacationHeadShare>
              <ApplacationImgBody>
                <ApplacationImgNew src={Happy}></ApplacationImgNew>
              </ApplacationImgBody>
              <ApplacationRightSharetext>
                <LoremText>Lorem Ipsum is simply dummy text</LoremText>
                <IpsumText>Lorem Ipsum is simply dummy text</IpsumText>
              </ApplacationRightSharetext>
            </ApplacationHeadShare>

            <ApplacationCenterText>
              <span style={{ color: "#1090CB" }}>Lorem Ipsum</span> is simply
              dummy <br></br>text of the printing.{" "}
            </ApplacationCenterText>

            <ApplacationEndText>
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br></br>{" "}
              mobile and web applications and website builders <br></br>
              measuring dozens of completed projects. We build and <br></br>
              develop mobile applications for several top platforms,<br></br>{" "}
              including Android & IOS.{" "}
            </ApplacationEndText>
          </ApplacationsLeftShare>
          <ApplacationsRightShare>
            <ApplacationRightImg src={PhoneImg}></ApplacationRightImg>
          </ApplacationsRightShare>
        </ApplacationsCard>

        <ApplacationsCard2>
          <ApplacationsRightShare>
            <ApplacationRightImg src={MockUp}></ApplacationRightImg>
          </ApplacationsRightShare>

          <ApplacationsLeftShare style={{ marginLeft: "50px" }}>
            <ApplacationHeadShare>
              <ApplacationImgBody>
                <ApplacationImgNew src={Happy}></ApplacationImgNew>
              </ApplacationImgBody>
              <ApplacationRightSharetext>
                <LoremText>Lorem Ipsum is simply dummy text</LoremText>
                <IpsumText>Lorem Ipsum is simply dummy text</IpsumText>
              </ApplacationRightSharetext>
            </ApplacationHeadShare>

            <ApplacationCenterText>
              <span style={{ color: "#1090CB" }}>Lorem Ipsum</span> is simply
              dummy <br></br>text of the printing.{" "}
            </ApplacationCenterText>

            <ApplacationEndText>
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br></br>{" "}
              mobile and web applications and website builders <br></br>
              measuring dozens of completed projects. We build and <br></br>
              develop mobile applications for several top platforms,<br></br>{" "}
              including Android & IOS.{" "}
            </ApplacationEndText>
          </ApplacationsLeftShare>
        </ApplacationsCard2>

        <ApplacationsCard>
          <ApplacationsLeftShare>
            <ApplacationHeadShare>
              <ApplacationImgBody>
                <ApplacationImgNew src={Happy}></ApplacationImgNew>
              </ApplacationImgBody>
              <ApplacationRightSharetext>
                <LoremText>Lorem Ipsum is simply dummy text</LoremText>
                <IpsumText>Lorem Ipsum is simply dummy text</IpsumText>
              </ApplacationRightSharetext>
            </ApplacationHeadShare>

            <ApplacationCenterText>
              <span style={{ color: "#1090CB" }}>Lorem Ipsum</span> is simply
              dummy <br></br>text of the printing.{" "}
            </ApplacationCenterText>

            <ApplacationEndText>
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br></br>{" "}
              mobile and web applications and website builders <br></br>
              measuring dozens of completed projects. We build and <br></br>
              develop mobile applications for several top platforms,<br></br>{" "}
              including Android & IOS.{" "}
            </ApplacationEndText>
          </ApplacationsLeftShare>

          <ApplacationsRightShare>
            <ApplacationRightImg src={PhoneImg}></ApplacationRightImg>
          </ApplacationsRightShare>
        </ApplacationsCard>

        <NotificationBoxes>
          <NotificationBoxOne>
            <NotificationTextHead style={{ color: "#252525" }}>
              Lorem Ipsum is simply <br></br>dummy text.
            </NotificationTextHead>
            <NotificationTextCenter style={{ color: "#545454" }}>
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br></br>
              mobile and web applications and website builders <br></br>
              measuring dozens of completed projects. We build and <br></br>
              develop mobile applications for several top platforms, <br></br>
              including Android & IOS.{" "}
            </NotificationTextCenter>
            <Button name={"View More"} className={"moreButton"} />
          </NotificationBoxOne>

          <NotificationBoxTwo>
            <NotficationIcon src={Notification}></NotficationIcon>
            <NotificationTextHead style={{ color: "#FFFFFF" }}>
              Lorem Ipsum is simply <br></br>dummy text.
            </NotificationTextHead>
            <NotificationTextCenter style={{ color: "#FFFFFF" }}>
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br></br>
              mobile and web applications and website builders <br></br>
              measuring dozens of completed projects. We build and <br></br>
              develop mobile applications for several top platforms, <br></br>
              including Android & IOS.{" "}
            </NotificationTextCenter>
            <Button name={"View More"} className={"moreButtonWhite"} />
          </NotificationBoxTwo>
          <RadiusImg src={Radius}></RadiusImg>
        </NotificationBoxes>

        <CompanySponsor>
          <CompanySponsorText>You will be in good Company</CompanySponsorText>
          <CompanySponsorBody>
            <CompanySponsorImage src={Benoshop}></CompanySponsorImage>
            <CompanySponsorImage src={Caspio}></CompanySponsorImage>
            <CompanySponsorImage src={Hyper}></CompanySponsorImage>
            <CompanySponsorImage src={Leo}></CompanySponsorImage>
          </CompanySponsorBody>
        </CompanySponsor>

        <SendForm></SendForm>
      </Main>
      <Footer></Footer>
    </HomeBody>
  );
}

export default Home;

const HomeBody = styled.div``;

const Main = styled.main`
  width: 100%;
  background: #e5e5e5;
`;

const ApplacationsAbout = styled.div`
  width: 100%;
  background: #e8f4fa;
  padding: 128px 65px 15px 123px;
  position: relative;
`;

const ApplacationHeadText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  color: #000000;
`;

const ApplacationMiddleText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 204.3%;
  color: #5c5c5c;
  margin-top: 16px;
`;

const SpaceText = styled.span`
  color: #1090cb;
`;

const ButtonBody = styled.div`
  display: flex;
  margin-top: 65px;
`;
const ApplacationBody = styled.div`
  display: flex;
`;

const ApplacationLeft = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
`;
const ApplacationRight = styled.div`
  display: flex;
  align-items: start;
`;

const ApplacationImg = styled.img`
  margin-top: -115px;
`;
const LeftImage = styled.img`
  position: absolute;
  left: 0;
  bottom: -19%;
`;
const RightImage = styled.img`
  position: absolute;
  right: 0;
  top: 35%;
`;

const ApplacationNameBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 43px 130px 43px 123px;
  background-color: #fff;
  border-bottom: 0.7px solid #c7c7c7;
`;
const Card = styled.div`
  display: flex;
  align-items: center;
`;

const CardImageBody = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  max-width: 83px;
  max-height: 83px;
  width: 83px;
  height: 83px;
  border-radius: 20px;
`;

const CardImg = styled.img``;

const CardTextBody = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  text-align: left;
  margin-left: 16px;
`;

const CardHeadText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 175%;
  color: #000000;
`;

const CardMiddleText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 175%;
  color: #969696;
`;

const ApplacationTextBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 115px 0px 0px 0px;
  background-color: #fff;
`;

const ApplacationLorem = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 33px;
  line-height: 160%;
  text-align: center;
  color: #252525;
`;
const ApplacationsText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 175%;
  text-align: center;
  color: #868686;
  margin-top: 32px;
`;

const ApplacationsCard = styled.div`
  display: flex;
  padding: 55px 65px 234px 123px;
  background-color: #fff;
  justify-content: space-between;
`;

const ApplacationsCard2 = styled.div`
  display: flex;
  padding: 55px 65px 234px 123px;
  background-color: #fff;
`;

const ApplacationsLeftShare = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: center;
`;

const ApplacationsRightShare = styled.div``;

const ApplacationRightImg = styled.img``;

const ApplacationHeadShare = styled.div`
  display: flex;
  align-items: center;
`;

const ApplacationImgBody = styled.div`
  max-width: 58px;
  max-height: 58px;
  background: #08d3bb;
  padding: 16px;
  border-radius: 50%;
`;

const ApplacationImgNew = styled.img``;

const ApplacationRightSharetext = styled.div`
  margin-left: 25px;
`;

const ApplacationCenterText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 170%;
  color: #252525;
  margin-top: 43px;
`;

const ApplacationEndText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  color: #545454;
  margin-top: 56px;
`;

const LoremText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 175%;
  color: #000000;
`;

const IpsumText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 175%;
  color: #868686;
`;

const NotificationBoxes = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0px 123px 184px 123px;
  position: relative;
  background-color: #fff;
`;

const NotificationBoxOne = styled.div`
  padding: 64px 48px 49px 48px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #f4f4f4;
  flex-direction: column;
  border-radius: 20px;
  margin-right: 50px;
`;

const NotificationBoxTwo = styled.div`
  padding: 64px 48px 49px 48px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #1090cb;
  flex-direction: column;
  border-radius: 20px;
`;

const RadiusImg = styled.img`
  position: absolute;
  right: -5%;
  top: 15%;
`;

const NotificationTextHead = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 170%;
  text-align: center;
`;

const NotificationTextCenter = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  text-align: center;
  margin-top: 36px;
  margin-bottom: 36px;
`;

const NotficationIcon = styled.img`
  position: absolute;
  right: 13%;
  top: -13%;
`;

const CompanySponsor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0px 200px 87px 200px;
`;

const CompanySponsorText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 159%;
  color: #000000;
`;

const CompanySponsorBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const CompanySponsorImage = styled.img``;
