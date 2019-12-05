import React from 'react'
import styled from 'styled-components'
import {vsDark as theme} from '@code-surfer/themes'

import avatar from './images/avatar.png'

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

  & img {
    width: 40px;
    height: 40px;

    display: inline;
    border-radius: 100%;
  }
`

const Me = () => (
  <Container>
    <img src={avatar} alt="avatar" />
    <div className="name">
      <a
        href="https://twitter.com/gillchristian"
        target="_blank"
        rel="noopener noreferrer"
      >
        Christian Gill
      </a>
      {' @ '}
      <a href="https://catawiki.com" target="_blank" rel="noopener noreferrer">
        Catawiki
      </a>
    </div>
  </Container>
)

export default Me
