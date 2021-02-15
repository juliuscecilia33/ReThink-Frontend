import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  ${"" /* overflow-x: hidden; */}
  ${"" /* overflow-y: scroll; */}
`;

export const Slogan = styled.h2`
  font-weight: bold;
  font-size: 27px;
  color: #3e3b3b;

  span {
    color: #00cc92;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #1f2421;
`;

export const Input = styled.input`
  width: 438px;
  height: 60px;
  background: #ffffff;
  border: 2px solid #00cc92;
  border-radius: 25px;
  outline: none;
  font-size: 20px;
  color: #00cc92;
`;
