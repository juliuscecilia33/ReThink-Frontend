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

export const Inputs = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    right: 0;
    top: 0;
    width: 243px;
    height: auto;
    transform: rotate(6.21deg);
  }
`;

export const Input = styled.div`
  position: relative;
  width: 90%;

  input {
    width: 100%;
    height: 60px;
    background: #ffffff;
    border: 2px solid #00cc92;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #00cc92;
    filter: drop-shadow(4px 7px 9px rgba(0, 0, 0, 0.25));
    padding: 0 1.3rem;
  }

  &::placeholder {
    color: #00cc92;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 44px;
    height: auto;
  }
`;

export const MessageInput = styled.div`
  position: relative;
  width: 90%;

  input {
    width: 100%;
    height: 229px;
    background: #ffffff;
    border: 2px solid #00cc92;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #00cc92;
    filter: drop-shadow(4px 7px 9px rgba(0, 0, 0, 0.25));
    padding: 0 1.3rem;
  }

  &::placeholder {
    color: #00cc92;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 44px;
    height: auto;
  }
`;

export const Label = styled.p`
  font-size: 20px;
  color: #1f2421;
`;
