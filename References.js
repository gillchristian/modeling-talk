import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
  text-align: left;
  font-size: 32px;
  & > div {
    margin-bottom: 20px;
  }
`

const Small = styled.span`
  font-size: 26px;
`

const Entry = ({ link, title, twitter, user }) => (
  <div>
    <a href={link}>{title}</a>
    {' '}
    {Boolean(twitter) && <Small>
      by{' '}
      <a href={twitter}>{user}</a>
    </Small>}
  </div>
)

const Referenes = () => (
  <Styled>

    <Entry
      link="https://dev.to/davidkpiano/no-disabling-a-button-is-not-app-logic-598i"
      title="No, disabling a button is not app logic."
      twitter="https://twitter.com/DavidKPiano"
      user="David K."
    />

    <Entry
      link="https://www.youtube.com/watch?v=IcgmSRJHu_8"
      title="Making Impossible States Impossible"
      twitter="https://twitter.com/rtfeldman"
      user="Richard Feldman"
    />

    <Entry
      link="https://fsharpforfunandprofit.com/ddd/"
      title="Domain Modeling Made Functional"
      twitter="https://twitter.com/ScottWlaschin"
      user="Scott Wlaschin"
    />

    <Entry
      link="https://github.com/gillchristian/remote-data-ts/"
      title="remote-data-ts"
    />

  </Styled>
)

export default Referenes
