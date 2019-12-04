import React from 'react'

const style = (i, length, marginTop) =>
  i === 0
    ? { marginBottom: 0 }
    : i === (length-1)
    ? { marginTop  }
    : { marginBottom: 0, marginTop  }

const Multiline = ({ lines, margin = 25, Elem = 'h2' }) => (
  <>
    {lines.map(
      (l, i) =>  <Elem style={style(i, lines.length, margin)}>{l}</Elem>
    )}
  </>
)

export default Multiline
