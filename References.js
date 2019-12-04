import React from 'react'
import styled from 'styled-components'
import {vsDark as theme} from '@code-surfer/themes'

const Styled = styled.div`
  text-align: left;
  font-size: 32px;
  & > div {
  }
`

const Link = styled.a.attrs(_ => ({ target: '_blank' }))`
  color: ${theme.colors.primary};
  text-decoration: none;

  &:hover,
  &:visited,
  &:focus {
    color: ${theme.colors.primary};
    text-decoration: none;
  }
`

const StyledEntry = styled.div`
  margin-bottom: 15px;
  vertical-align: middle;
`

const Small = styled.div`
  font-size: 20px;
  font-style: italic;
  line-height: 1.5;
`

const Entry = ({ link, title, twitter, user }) => (
  <StyledEntry>
    <div>
      <Link href={link}>{title}</Link>
    </div>
    {Boolean(twitter) && (
      <Small>
        {' by '}<Link href={twitter}>{user}</Link>
      </Small>
    )}
  </StyledEntry>
)

const Referenes = () => (
  <Styled>

    <Entry
      link="https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions"
      title="Discriminated Unions"
    />

    <Entry
      link="https://dev.to/davidkpiano/no-disabling-a-button-is-not-app-logic-598i"
      title="No, disabling a button is not app logic"
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
