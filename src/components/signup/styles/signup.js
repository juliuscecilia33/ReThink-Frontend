import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 0 10%;
  padding-top: 15%;
  ${"" /* overflow-x: hidden; */}
  ${"" /* overflow-y: scroll; */}
  z-index: 1;
`;

export const Slogan = styled.h2`
  width: 90%;
  font-weight: 600;
  font-size: 40px;
  color: #3e3b3b;
  line-height: 43px;
  margin-bottom: 20%;

  span {
    color: #00cc92;
  }
`;

export const Description = styled.p`
  width: 80%;
  font-weight: 400;
  font-size: 20px;
  color: #1f2421;
  margin-bottom: 8%;
  line-height: 28px;
`;

export const SecondaryDescription = styled.p`
  width: 80%;
  font-weight: 400;
  font-size: 17px;
  color: #1f2421;
  margin-bottom: 8%;
  line-height: 28px;
  z-index: 1;
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const HalfInputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;
`;

export const Input = styled.div`
  width: 100%;
  margin-bottom: 7%;

  input {
    width: 100%;
    height: 50px;
    background: #ffffff;
    border: 2px solid #00cc92;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #00cc92;
    filter: drop-shadow(4px 7px 9px rgba(0, 0, 0, 0.25));
    padding: 0 1.3rem;

    &::placeholder {
      color: #00cc92;
    }
  }
`;

export const SecondaryInput = styled.div`
  width: 100%;
  margin-bottom: 7%;

  input {
    width: 100%;
    height: 50px;
    background: #ffffff;
    border: 2px solid #00cc92;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #00cc92;
    filter: drop-shadow(4px 7px 9px rgba(0, 0, 0, 0.25));
    padding: 0 1.3rem;

    &::placeholder {
      color: #00cc92;
    }
  }
`;

export const HalfInput = styled.div`
  width: 47%;
  margin-bottom: 7%;

  input {
    width: 100%;
    height: 50px;
    background: #ffffff;
    border: 2px solid #00cc92;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #00cc92;
    filter: drop-shadow(4px 7px 9px rgba(0, 0, 0, 0.25));
    padding: 0 1.3rem;

    &::placeholder {
      color: #00cc92;
    }
  }
`;

export const LeafDots = styled.div`
  position: absolute;
  bottom: 0;
  left: -30%;
  z-index: 0;

  img {
    width: 200px;
    height: auto;
  }
`;
