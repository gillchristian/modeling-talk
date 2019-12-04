import React from 'react'
import styled from 'styled-components'

import elm from './images/elm.png'
import flow from './images/flow.png'
import reason from './images/reason.png'
import purescript from './images/purescript.png'
import javascript from './images/javascript.png'

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
    <Img src={reason} right="18%" bottom="15%" deg={-15} />
    <Img src={javascript} right="12%" top="25%" deg={15} size={20} />

    <Img src={elm} left="22%" top="10%" deg={10} />
    <Img src={purescript} left="5%" top="30%" deg={-5} />
    <Img src={flow} left="20%" bottom="15%" deg={15} />

  </Styled>
)

export default Logos
