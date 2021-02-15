import styled from "styled-components";

export const Icon = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  color: #1f2421;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  div {
    z-index: 100;
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "black" : "#2D3142")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      margin-left: auto;
      width: 1.5rem;
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #dcfff5;
  width: 30%;
  height: 100vh;
  align-items: center;
  padding: 1.5rem 3rem;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => (open ? "translateX(235%)" : "translateX(335%)")};
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  z-index: 10;

  @media (max-width: 1000px) {
    width: 100%;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }
`;

export const Links = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
`;

export const Link = styled.a`
  ${"" /* padding: 2rem 0; */}
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  color: black;
  text-decoration: none;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  align-items: center;

  h2 {
    font-size: 1rem;
  }

  img {
    width: 30px;
    height: auto;
    margin-right: 1rem;
  }

  &:hover {
    color: #00cc92;
  }
`;

export const Heading = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 25px;
`;

export const Squiggle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 22px;
    height: auto;
  }
`;

export const Socials = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;

  i {
    font-size: 32px;
    color: #000000;
    margin-right: 1.5rem;
  }
`;
