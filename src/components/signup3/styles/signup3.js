import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 0 10%;
  padding-top: 5%;
  ${"" /* overflow-x: hidden; */}
  ${"" /* overflow-y: scroll; */}
  z-index: 1;

  @media (min-width: 1500px) {
    width: 80%;
    padding-top: 1%;
  }
`;

export const Slogan = styled.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  h2 {
    width: 80%;
    font-weight: 600;
    font-size: 37px;
    color: #3e3b3b;
    line-height: 43px;
    text-align: center;
  }

  span {
    color: #00cc92;
  }

  @media (min-width: 1300px) {
    justify-content: start;
    margin-bottom: 3rem;

    h2 {
      width: 35%;
      font-size: 45px;
      line-height: 50px;
      text-align: left;
    }
  }

  @media (min-width: 1500px) {
    margin-bottom: 1rem;
  }
`;

export const Label = styled.h3`
  font-weight: 700;
  font-size: 30px;
  color: #00cc92;
  margin-bottom: 1%;
  line-height: 28px;
  text-align: center;
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #3e3b3b;
  margin-bottom: 2.5%;
  line-height: 28px;
  text-align: center;
`;

export const InfoSec = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 4%;
`;

export const InfoTitle = styled.h3`
  font-weight: 600;
  font-size: 25px;
  color: #3f3d56;
  margin-bottom: 2%;
`;

export const InfoDescr = styled.h3`
  font-weight: 500;
  font-size: 20px;
  color: #3f3d56;
  margin-bottom: 2%;
`;

export const InfoSecDescr = styled.h3`
  font-weight: 500;
  font-size: 20px;
  color: #00cc92;
  margin-bottom: 2%;
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    width: 128px;
    height: 41px;
    outline: none;
    border: none;
    background: #86b390;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 30px;
    cursor: pointer;
    color: #ffffff;
    margin-bottom: 10%;
    transition: 0.5s ease all;
    margin: 0 auto;

    &:hover {
      background: #00cc92;
    }
  }

  @media (min-width: 1300px) {
    width: 75%;
    justify-content: flex-end;
  }
`;

export const Rectangle = styled.div`
  width: 626px;
  height: 303px;
  background: rgba(220, 255, 245, 0.7);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2.5rem;
`;

export const DarkTallPlant = styled.div`
  position: absolute;
  bottom: 0;
  right: -17%;

  img {
    width: auto;
    height: auto;
    ${"" /* transform: rotate(-123.84deg); */}
  }
`;

export const TallPlant = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  img {
    width: auto;
    height: auto;
    ${"" /* transform: rotate(-123.84deg); */}
  }
`;
