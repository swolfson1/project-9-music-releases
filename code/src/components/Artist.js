import React from 'react'

export const Artist = (props) => {
  return (
    <a href={props.url} className="artistLink">{props.name}</a>
  )
}
