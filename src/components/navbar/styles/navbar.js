import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 9vh;
  display: flex;
  padding: 0 1rem;
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
    margin-right: 1.5rem;
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
  font-weight: 600;
  color: #00cc92;
  margin-bottom: 2.5px;

  &:hover {
    border-bottom: 2px solid #00cc92;
  }
`;

export const Promote = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;

  button {
    width: 205px;
    height: 38px;
    background: #00cc92;
    border-radius: 50px;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    i {
      font-size: 1rem;
      color: #ffffff;
      margin-left: 1rem;
    }
  }
`;
