import React from "react";
import logo from "./ui/apple.png";
import { Search, WorkOutline } from "@material-ui/icons";
import styled from "styled-components";

const Icon = styled.div`
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
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  display: inline;
`;

const ListItem = styled.li`
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

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Logo className={classes.logo} src={logo} alt="logo" />
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
            }}
          />
        </Icon>
        <WorkOutline
          style={{
            width: 20,
            height: 20,
            color: "#e1d9d1",
          }}
        />
      </Wrapper>
    </Container>
  );
}

export default Navbar;
