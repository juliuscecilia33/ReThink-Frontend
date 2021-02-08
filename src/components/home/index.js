import React from "react";

import {
  Container,
  Hero,
  Title,
  Picture,
  Section,
  Heading,
  Cards,
  Card,
  Image,
  Label,
  Actions,
  Type,
  Action,
} from "./styles/home";

export default function Home({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Home.Hero = function HomeHero({ children, ...restProps }) {
  return (
    <Hero {...restProps}>
      <Title>
        <h3>Eat, Shop</h3>
        <h2>Locally.</h2>
        <h2>Sustainably.</h2>
      </Title>
      <Picture src="/images/RightLogo.png" alt="Right Logo" />
    </Hero>
  );
};

Home.Section = function HomeSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Home.Heading = function HomeHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Home.Cards = function HomeCards({ children, ...restProps }) {
  return <Cards {...restProps}>{children}</Cards>;
};

Home.Card = function HomeCard({ type, label, src, children, ...restProps }) {
  return (
    <Card {...restProps}>
      <Image src={`/images/${src}.png`} />
      <Label>{label}</Label>
      <Actions>
        <Type>{type}</Type>
        <Action>{children}</Action>
      </Actions>
    </Card>
  );
};
