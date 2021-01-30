import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
`;

export const Logo = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  img {
    width: 51px;
    height: auto;
  }

  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: #00cc92;
  }
`;

export const Links = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled.a`
  font-size: 18px;
  color: #00cc92;
  transition: 0.5s ease all;
  margin-bottom: 3px;

  &:hover {
    border-bottom: 1px solid #00cc92;
  }
`;

export const Promote = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 211px;
    height: 38px;
    background: #00cc92;
    border-radius: 50px;
    color: #ffffff;
  }

  i {
    font-size: 0.5rem;
    color: #ffffff;
  }
`;
