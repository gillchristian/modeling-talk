import React from 'react'
import styled from 'styled-components'

import elm from './images/elm.png'
import flow from './images/flow.png'
import reason from './images/reason.png'
import purescript from './images/purescript.png'

const Styled = styled.div`
  position: relative;

  height: 0;
`

const Img = styled.img`
  position: fixed;

  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};

  right: ${({ right }) => right};
  left: ${({ left }) => left};

  height: ${({ size }) => size || '23'}vh;
  transform: rotate(${({ deg }) => deg}deg);
`

const Logos = () => (
  <Styled>
    <Img src={flow} right="18%" bottom="15%" deg={-15} size={25} />
    <Img src={purescript} right="12%" top="25%" deg={15} size={25} />

    <Img src={reason} left="18%" top="15%" deg={-15} />
    <Img src={elm} left="13%" bottom="20%" deg={10} />

  </Styled>
)

export default Logos
