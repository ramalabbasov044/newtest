import React from "react";
import Input from "../Input/Input";
import styled from "styled-components";
import Star from "../../assests/images/Star 1.svg";
import At from "../../assests/images/Pai Chart 1.svg";
function SendForm() {
  return (
    <SendFormComponent>
      <StarIcon src={Star}></StarIcon>
      <AtIcon src={At}></AtIcon>
      <SendFormHeadText>
        Lorem Ipsum is simply dummy <br></br> text of the printing.{" "}
      </SendFormHeadText>
      <Form>
        <EmailInput placeholder="Enter your email"></EmailInput>
        <SubscribeButton>SUBSCRIBE</SubscribeButton>
      </Form>
    </SendFormComponent>
  );
}

export default SendForm;

const SendFormComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  background: #e8f4fa;
  width: 100%;
  padding: 148px 0px;
`;

const SendFormHeadText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 170%;
  text-align: center;
  color: #252525;
`;

const StarIcon = styled.img`
  position: absolute;
  left: 16%;
  top: -8.5%;
`;

const AtIcon = styled.img`
  position: absolute;
  right: 25%;
  top: 20%;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  text-align: center;
  text-align: center;
  margin-top: 80px;
`;

const EmailInput = styled.input`
  background: #ffffff;
  box-shadow: 0px 4px 84px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  color: #787878;
  padding: 20px 366px 20px 36px;
  margin-right: 14px;
  border: 0;
  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 170%;
    text-align: center;
    color: #787878;
  }
`;

const SubscribeButton = styled.button`
  background: #000000;
  border-radius: 10px;
  border: 0;
  outline: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 170%;
  text-align: center;
  color: #fff4f4;
  padding: 20px 43px 20px 44px;
`;
