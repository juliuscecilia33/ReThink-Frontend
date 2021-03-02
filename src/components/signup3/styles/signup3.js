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

export const Description = styled.p`
  width: 80%;
  font-weight: 400;
  font-size: 18px;
  color: #3e3b3b;
  margin-bottom: 8%;
  line-height: 28px;
  text-align: center;

  @media (min-width: 500px) {
    margin-bottom: 1.5%;
  }

  @media (min-width: 1300px) {
    width: 75%;
    text-align: left;
    font-size: 20px;
  }
`;

export const Label = styled.h3`
  width: 80%;
  font-weight: 400;
  font-size: 30px;
  color: #00cc92;
  margin-bottom: 8%;
  line-height: 28px;
  text-align: center;

  @media (min-width: 500px) {
    margin-bottom: 1.5%;
  }
`;

export const InfoTitle = styled.h3`
  font-weight: 600;
  font-size: 25px;
  color: #3f3d56;
`;

export const InfoDescr = styled.h3`
  font-weight: 500;
  font-size: 20px;
  color: #3f3d56;
`;

export const InfoSecDescr = styled.h3`
  font-weight: 500;
  font-size: 20px;
  color: #00cc92;
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
  align-items: center;
`;

export const TallPlant = styled.div`
  position: absolute;
  top: -12%;
  right: -7%;

  img {
    width: auto;
    height: auto;
    ${"" /* transform: rotate(-123.84deg); */}

    @media (max-width: 1499px) {
      height: 250px;
      width: auto;
    }

    @media (max-width: 1200px) {
      height: 225px;
      width: auto;
    }

    @media (max-width: 500px) {
      height: 150px;
      width: auto;
    }
  }

  @media (max-width: 1200px) {
    top: -20%;
    right: -17%;
  }

  @media (max-width: 500px) {
    top: -15%;
    right: -20%;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
