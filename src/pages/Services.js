import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import Speaker from "../assests/images/Speaker Angle 1.svg";
import Group from "../assests/images/Group.svg";
import StartUp from "../assests/images/startup 1.svg";
import Coding from "../assests/images/coding (1) 1.svg";
import Cloud from "../assests/images/cloud-computing 1.svg";
import Succelnt from "../assests/images/Succlent angle 2.svg";
import DummyImg from "../assests/images/3D Illustration-Product Development-Skin-01 1.svg";
import Button from "../components/Button/Button";
import CardImgEnd from "../assests/images/Rectangle 20.svg";
import SendForm from "../components/SendForm/SendForm";

function Services() {
  return (
    <ServicesBody>
      <Header></Header>
      <Main>
        <ServicesApplacations>
          <SpeakerImg src={Speaker}></SpeakerImg>
          <SpeakerHeadText>
            <SuccelntImg src={Succelnt}></SuccelntImg>
            Our <span style={{ color: "#1090CB" }}>Services</span>
          </SpeakerHeadText>
          <ServicesText>
            Lorem Ipsum is simply dummy text of the <br></br>printing and
            typesetting industry. Lorem Ipsum <br></br>has been the industry's
          </ServicesText>
          <LoremRight>
            <LoremApplacationLeft>
              <CardApplacations>
                <CardImageBody style={{ background: "#F1E8FF" }}>
                  <CardImage src={Coding}></CardImage>
                </CardImageBody>
                <CardTextBody>
                  <CardText>Mobile Applications</CardText>
                  <CardSimpleText>
                    The simplest but robust technology to <br></br>accompany
                    with you
                  </CardSimpleText>
                </CardTextBody>
              </CardApplacations>
              <CardApplacations style={{ marginTop: "72px" }}>
                <CardImageBody style={{ background: "#E2F3FF" }}>
                  <CardImage src={StartUp}></CardImage>
                </CardImageBody>

                <CardText></CardText>

                <CardTextBody>
                  <CardText>SEO</CardText>
                  <CardSimpleText>
                    The simplest but robust technology to <br></br>accompany
                    with you
                  </CardSimpleText>
                </CardTextBody>
              </CardApplacations>
            </LoremApplacationLeft>

            <LoremApplacationRight>
              <CardApplacations>
                <CardImageBody style={{ background: "#FFF2F2" }}>
                  <CardImage src={Group}></CardImage>
                </CardImageBody>
                <CardTextBody>
                  <CardText>Web Application</CardText>
                  <CardSimpleText>
                    The simplest but robust technology to <br></br>accompany
                    with you
                  </CardSimpleText>
                </CardTextBody>
              </CardApplacations>
              <CardApplacations style={{ marginTop: "76px" }}>
                <CardImageBody style={{ background: "#FFE7FB" }}>
                  <CardImage src={Cloud}></CardImage>
                </CardImageBody>

                <CardTextBody>
                  <CardText>AR/VR</CardText>
                  <CardSimpleText>
                    The simplest but robust technology to <br></br>accompany
                    with you
                  </CardSimpleText>
                </CardTextBody>
              </CardApplacations>
            </LoremApplacationRight>
          </LoremRight>
        </ServicesApplacations>

        <DummyLoremAbout>
          <DummyLeft>
            <DummyLorem>
              <span style={{ color: "#1090CB" }}>Lorem Ipsum</span> is simply
              dummy <br></br>text of the printing.{" "}
            </DummyLorem>
            <DummyLoremLongText>
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br></br>
              mobile and web applications and website builders<br></br>{" "}
              measuring dozens of completed projects. We build and <br></br>
              develop mobile applications for several top platforms, <br></br>
              including Android & IOS.<br></br>
              <br></br>KODEX TECHNOLOGY (PVT) LTD is a team of experienced{" "}
              <br></br> mobile and web applications and website builders{" "}
              <br></br>
              measuring dozens{" "}
            </DummyLoremLongText>
            <Button name={"Contact us"} className={"borderButton"} />
          </DummyLeft>
          <DummyRight src={DummyImg}></DummyRight>
        </DummyLoremAbout>

        <ApplacationsHistory>
          <HistoryCard>
            <CardNumber>6</CardNumber>
            <CardTextHistory>Happy Clients</CardTextHistory>
          </HistoryCard>
          <HistoryCard>
            <CardNumber>11</CardNumber>
            <CardTextHistory>Completed Projects</CardTextHistory>
          </HistoryCard>
          <HistoryCard>
            <CardNumber>7M</CardNumber>
            <CardTextHistory>Transsactions</CardTextHistory>
          </HistoryCard>
          <HistoryCard>
            <CardNumber>6000+</CardNumber>
            <CardTextHistory>Customers</CardTextHistory>
          </HistoryCard>
        </ApplacationsHistory>

        <ProjectsCardBody>
          <ProjectsCardHead>Our latest Projects</ProjectsCardHead>
          <ProjectsCardTot>
            <ProjectsCard>
              <ProjectsCardImg src={CardImgEnd}></ProjectsCardImg>
              <ProjectsCardName>
                Lorem Ipsum is simply <br></br> dummy text of the printing.
              </ProjectsCardName>
              <ProjectsCardPrice>
                Lorem Ipsum is simply dummy text of <br></br>the printing and
                typesetting industry.{" "}
              </ProjectsCardPrice>
            </ProjectsCard>

            <ProjectsCard>
              <ProjectsCardImg src={CardImgEnd}></ProjectsCardImg>
              <ProjectsCardName>
                Lorem Ipsum is simply <br></br> dummy text of the printing.
              </ProjectsCardName>
              <ProjectsCardPrice>
                Lorem Ipsum is simply dummy text of <br></br>the printing and
                typesetting industry.{" "}
              </ProjectsCardPrice>
            </ProjectsCard>

            <ProjectsCard>
              <ProjectsCardImg src={CardImgEnd}></ProjectsCardImg>
              <ProjectsCardName>
                Lorem Ipsum is simply <br></br> dummy text of the printing.
              </ProjectsCardName>
              <ProjectsCardPrice>
                Lorem Ipsum is simply dummy text of <br></br>the printing and
                typesetting industry.{" "}
              </ProjectsCardPrice>
            </ProjectsCard>
          </ProjectsCardTot>
        </ProjectsCardBody>

        <SendForm></SendForm>
      </Main>
      <Footer></Footer>
    </ServicesBody>
  );
}

export default Services;

const ServicesBody = styled.div``;

const Main = styled.main`
  width: 100%;
  background: #e5e5e5;
`;

const ServicesApplacations = styled.div`
  width: 100%;
  background-color: #e8f4fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 78px 118px 71px 119px;
`;

const SpeakerImg = styled.img`
  padding: 31px 32px 31px 30px;
  border-radius: 50%;
  background-color: #fff;
`;

const SpeakerHeadText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  color: #000000;
  position: relative;
  margin-top: 22px;
`;

const ServicesText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 175%;
  text-align: center;
  color: #696969;
  margin-top: 18px;
`;

const LoremRight = styled.div`
  padding: 65px 91px 95px 61px;
  background: #ffffff;
  display: flex;
  box-shadow: 0px 4px 124px rgba(0, 0, 0, 0.1);
  margin-top: 71px;
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
  letter-spacing: 0.01em;
  color: #2e0d64;
`;
const CardSimpleText = styled.p`
  margin-top: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 177.9%;
  letter-spacing: 0.01em;
  color: #797979;
`;

const CardTextBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 29px;
  text-align: left;
  align-items: start;
  justify-content: center;
  text-align: left;
`;

const SuccelntImg = styled.img`
  position: absolute;
  top: 300%;
  right: -157%;
`;

const DummyLoremAbout = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 109px 20px 158px 119px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const DummyLorem = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 170%;
  color: #252525;
`;

const DummyLoremLongText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  color: #545454;
  margin-top: 56px;
  margin-bottom: 33px;
`;

const DummyLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const DummyRight = styled.img`
  width: 832px;
`;

const ApplacationsHistory = styled.div`
  width: 100%;
  background: #1090cb;
  padding: 129px 178px 143px 178px;
  display: flex;
  justify-content: space-between;
`;

const HistoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardNumber = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 65px;
  line-height: 177.9%;
  letter-spacing: 0.01em;
  color: #ffffff;
`;

const CardTextHistory = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 177.9%;
  letter-spacing: 0.01em;
  color: #ffffff;
`;

const ProjectsCardBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  padding: 140px 153px 100px 119px;
`;

const ProjectsCardHead = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 177.9%;
  letter-spacing: 0.01em;
  color: #000000;
  margin-bottom: 63px;
`;

const ProjectsCardTot = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ProjectsCardImg = styled.img``;

const ProjectsCardName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 177.9%;
  letter-spacing: 0.01em;
  color: #000000;
  margin-bottom: 15px;
  margin-top: 30px;
`;
const ProjectsCardPrice = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 210.9%;
  letter-spacing: 0.01em;
  color: #424242;
`;
