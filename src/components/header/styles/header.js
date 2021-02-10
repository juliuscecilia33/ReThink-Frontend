import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const Title = styled.h3`
  font-size: 36px;
  font-weight: 700;
  font-family: Poppins;
  color: #9e9e9e;
  letter-spacing: 0.35em;
`;
