import styled from "styled-components";

const Button = (props) => {
  return (
    <Wrapper>
      <button
        className={`basic-button ${props.className || "simpleButton"}`}
        onClick={props.onClick}
        type={props.type}
      >
        {props.name || "button"}
      </button>
    </Wrapper>
  );
};
export default Button;

const Wrapper = styled.div`
  .simpleButton {
    background: #1090cb;
    border-radius: 10px;
    color: white;
    border: 0;
    width: 193px;
    height: 51px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 204.3%;
    color: #ffffff;
  }
  .borderButton {
    width: 193px;
    height: 51px;
    background: #ffffff;
    border: 1px solid #1090cb;
    border-radius: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 204.3%;
    color: #1090cb;
  }

  .moreButton {
    width: 153px;
    height: 49px;
    background: #1090cb;
    border-radius: 10px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 170%;
    text-align: center;
    border: 0;
  }

  .moreButtonWhite {
    width: 153px;
    height: 49px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #1090cb;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 170%;
    border: 0;
    text-align: center;
  }
`;
