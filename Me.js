import React from "react";
import styled from "styled-components";
import { vsDark as theme } from "@code-surfer/themes";

const Avatar = styled.div`
  background-color: #e57a5a;
  width: 40px;
  height: 40px;

  display: inline;
  border-radius: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  & > .name {
    line-height: 1;
    margin-left: 10px;
  }

  & a,
  & a:hover,
  & a:link,
  & a:visited,
  & a:focus {
    color: ${theme.colors.primary};
    text-decoration: none;
    cursor: pointer;
  }
`;

const Me = () => (
  <Container>
    <Avatar />
    <div className="name">
      <a
        href="https://twitter.com/gillchristian"
        target="_blank"
        rel="noopener noreferrer"
      >
        Christian Gill
      </a>
      {" @ "}
      <a
        href="https://catawiki.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Catawiki
      </a>
    </div>
  </Container>
);

export default Me;
