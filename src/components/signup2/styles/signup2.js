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
  font-size: 20px;
  color: #1f2421;
  margin-bottom: 8%;
  line-height: 28px;
  text-align: center;

  @media (min-width: 500px) {
    margin-bottom: 1.5%;
  }

  @media (min-width: 1300px) {
    width: 75%;
    text-align: left;
  }
`;

export const SecondaryDescription = styled.p`
  width: 80%;
  font-weight: 400;
  font-size: 18px;
  color: #1f2421;
  margin-bottom: 5%;
  line-height: 28px;
  text-align: center;
  z-index: 1;

  @media (min-width: 500px) {
    margin-bottom: 1.5%;
  }

  @media (min-width: 1300px) {
    width: 75%;
    text-align: left;
  }
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-bottom: 5%;

  @media (min-width: 675px) {
    margin-bottom: 2%;
  }

  @media (min-width: 1300px) {
    width: 75%;
  }

  @media (min-width: 1500px) {
    margin-bottom: 1.5%;
  }
`;

export const InputsAndButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1300px) {
    flex-direction: row;
  }
`;

export const SecondaryInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  margin-bottom: 5%;

  @media (min-width: 675px) {
    margin-bottom: 2%;
  }

  @media (min-width: 1300px) {
    margin-right: auto;
    margin-left: 12%;
    width: 45%;
  }

  @media (min-width: 1500px) {
    margin-bottom: 1.5%;
  }
`;

export const HalfInputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;

  @media (min-width: 675px) {
    margin-bottom: 0%;
  }
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

    @media (min-width: 1500px) {
      height: 43px;
    }
  }

  @media (min-width: 550px) {
    margin-bottom: 4%;
  }

  @media (min-width: 1500px) {
    margin-bottom: 2.5%;
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

    @media (min-width: 1500px) {
      height: 43px;
    }
  }

  @media (min-width: 550px) {
    margin-bottom: 4%;
  }

  @media (min-width: 1500px) {
    margin-bottom: 2.5%;
  }
`;

export const HalfInput = styled.div`
  width: 48.5%;
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

    @media (min-width: 1500px) {
      height: 43px;
    }
  }

  @media (min-width: 550px) {
    margin-bottom: 4%;
  }

  @media (min-width: 1500px) {
    margin-bottom: 2.5%;
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

export const Select = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10%;

  select {
    width: 40%;
    height: 50px;
    background: #ffffff;
    border: 2px solid #00cc92;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #00cc92;
    filter: drop-shadow(4px 7px 9px rgba(0, 0, 0, 0.25));
    padding: 0 15px;

    @media (min-width: 1500px) {
      height: 43px;
    }
  }

  @media (min-width: 1300px) {
    justify-content: start;
    width: 75%;
    margin-bottom: 5%;
  }

  @media (min-width: 1500px) {
    margin-bottom: 2%;
  }
`;

export const Button = styled.button`
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

  @media (min-width: 1300px) {
    margin-right: auto;
  }
`;
