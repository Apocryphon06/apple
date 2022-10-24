import React from "react";
import logo from "./ui/apple.png";
import { DragHandle, Search, WorkOutline } from "@material-ui/icons";
import styled from "styled-components";

const Icon = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  &:hover {
    color: #fff;
    transition: 0.2s;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  list-style: none;
  color: #e1d9d1;
  cursor: pointer;
  font-size: 12px;
  margin: 0 20px;
  letter-spacing: -0.3px;

  &:hover {
    color: #fff;
    transition: 0.2s;
  }
`;

const Logo = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin: 0 20px;
`;

const Banner = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(to right, #1d1160, #800080);
`;

const BannerText = styled.div`
  color: #fff;
  font-size: 14px;
  width: 64%;
  line-height: 1.5em;
  text-align: center;
  flex-direction: inline;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const MenuIcon = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <MenuIcon>
          <DragHandle
            style={{
              width: 20,
              height: 20,
              color: "#e1d9d1",
              marginRight: 20,
              cursor: "pointer",
            }}
          />
        </MenuIcon>
        <Logo src={logo} alt="logo" />
        <List>
          <ListItem>Store</ListItem>
          <ListItem>Mac</ListItem>
          <ListItem>iPad</ListItem>
          <ListItem>iPhone</ListItem>
          <ListItem>Watch</ListItem>
          <ListItem>Airpods</ListItem>
          <ListItem>TV & Home</ListItem>
          <ListItem>Only on Apple</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Support</ListItem>
        </List>
        <Icon>
          <Search
            style={{
              width: 20,
              height: 20,
              color: "#e1d9d1",
              marginRight: 20,
              cursor: "pointer",
            }}
          />
        </Icon>
        <WorkOutline
          style={{
            width: 20,
            height: 20,
            color: "#e1d9d1",
            cursor: "pointer",
          }}
        />
      </Wrapper>
      <Banner>
        <BannerText>
          Last chance for up to ₹7000 instant savings on orders over ₹41900
          across all products with HDFC Bank or American Express credit cards.*
          Plus No Cost EMI from most leading banks.** Shop now
        </BannerText>
      </Banner>
    </Container>
  );
}

export default Navbar;
