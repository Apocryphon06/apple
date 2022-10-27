import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import iphone14 from "../images/iphone-14.jpg";
import logo from "../components/Navbar/ui/apple.png";
import { Logo } from "../components/Navbar/Navbar.jsx";

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
  cursor: pointer;
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
    transform: translate(-50%, -200%);
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
  margin-right: 10px;
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

const ImgCarousel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImgItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
  width: 100%;
`;

const ImgItem = styled.img`
  posititon: relative;
  width: 700px;
  height: 600px;
`;
const ImgTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  color: white;
  margin-top: 20px;
`;

const ImgText = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const ImgSubText = styled.div`
  font-size: 24px;
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

      <ImgCarousel>
        <ImgItemWrapper>
          <ImgTextWrapper>
            <ImgText>iPad</ImgText>
            <ImgSubText>Lovable. Drawable. Magical</ImgSubText>
            <Action style={{ fontSize: "22px" }}>
              <Link>Learn more &gt; </Link>
              <Link>Buy &gt;</Link>
            </Action>
          </ImgTextWrapper>

          <ImgItem
            src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2915&q=80"
            alt="https://picsum.photos/500"
          />
        </ImgItemWrapper>
        <ImgItemWrapper>
          <ImgTextWrapper>
            <ImgText>
              {" "}
              <Logo
                style={{ width: "25px", height: "25px", marginRight: "-5px" }}
                src={logo}
              />{" "}
              tv 4k
            </ImgText>
            <ImgSubText>The Apple experience.</ImgSubText>
            <ImgSubText>Cinematic in every sense.</ImgSubText>
            <Action style={{ fontSize: "22px" }}>
              <Link>Learn more &gt; </Link>
              <Link>Buy &gt;</Link>
            </Action>
          </ImgTextWrapper>
          <ImgItem
            src="https://source.unsplash.com/random/700x600/?appletv"
            alt="https://picsum.photos/500"
          />
        </ImgItemWrapper>
      </ImgCarousel>

      <ImgCarousel>
        <ImgItemWrapper>
          <ImgTextWrapper>
            <ImgText>
              {" "}
              <Logo
                style={{ width: "25px", height: "25px", marginRight: "-5px" }}
                src={logo}
              />{" "}
              Watch
            </ImgText>
            <ImgSubText
              style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}
            >
              SERIES 8
            </ImgSubText>
            <ImgSubText>A healthy leap ahead.</ImgSubText>
          </ImgTextWrapper>

          <ImgItem
            src="https://images.unsplash.com/photo-1636569713946-cd687486f6b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="series8"
          />
        </ImgItemWrapper>
        <ImgItemWrapper>
          <ImgTextWrapper>
            <ImgText>
              {" "}
              <Logo
                style={{ width: "25px", height: "25px", marginRight: "-5px" }}
                src={logo}
              />{" "}
              Watch
            </ImgText>
            <ImgSubText
              style={{ color: "orange", fontSize: "18px", fontWeight: "bold" }}
            >
              ULTRA
            </ImgSubText>
            <ImgSubText>Adventure awaits</ImgSubText>
          </ImgTextWrapper>
          <ImgItem
            src="https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80"
            alt="https://picsum.photos/500"
          />
        </ImgItemWrapper>
      </ImgCarousel>
    </Container>
  );
}

export default Home;
