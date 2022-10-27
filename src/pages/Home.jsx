import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import iphone14 from "../images/iphone-14.jpg";
import tv from "../images/tv.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: column;
  align-items: center;
`;
const Image = styled.img`
  position: relative;
  width: 100%;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  color: white;
  text-align: center;
  line-height: 3.5em;

  @media (max-width: 768px) {
    transform: translate(-50%, -120%);
    line-height: 2.5em;
  }
`;
const Text = styled.div`
  font-size: 48px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SubText = styled.div`
  font-size: 28px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Link = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 24px;
  color: #007aff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    display: none;
  }
`;
const Action = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Logo = styled.img`
  width: 100px;
  height: 30px;
  margin: auto;
  padding: 40px 0;
  @media (min-width: 768px) {
    width: 172px;
    height: 52px;
  }
`;

const TextWrapper = styled.div`
line-height: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SecondaryText = styled.div`
  text-aling: center;
  font-size: 28px;
  color: #808080;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

function Home() {
  return (
    <Container>
      <Navbar />
      <ImageContainer>
        <Image src={iphone14} alt={iphone14} />
        <TextContainer>
          <Text>iPhone 14 Pro</Text>
          <SubText>Pro.Beyond.</SubText>
          <Action>
            <Link>Learn more &gt; </Link>
            <Link>Buy &gt;</Link>
          </Action>
        </TextContainer>
      </ImageContainer>
      
      <Logo src={tv} alt={tv} />
      <TextWrapper>
        <Text>The Apple experience.</Text>
        <SecondaryText>Cinematic in every sense.</SecondaryText>
        <SecondaryText>Avaiable starting 11.4</SecondaryText>
        <Action>
          <Link>Learn more &gt; </Link>
          <Link>Order now &gt;</Link>
        </Action>
      </TextWrapper>
    </Container>
  );
}

export default Home;
