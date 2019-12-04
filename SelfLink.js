import React from 'react'
import styled from 'styled-components'
import {vsDark as theme} from '@code-surfer/themes'

const Link = styled.a`
  position: fixed;
  bottom: 2vh;
  margin: 0 auto;

  color: ${theme.colors.primary};
  cursor: pointer;

  &:hover,
  &:visited,
  &:focus {
    color: ${theme.colors.primary};
  }
`

const SelfLink = () => (
  <Link href="http://bit.ly/dotjs-modeling" target="_blank">
    bit.ly/dotjs-modeling
  </Link>
)

export default SelfLink
