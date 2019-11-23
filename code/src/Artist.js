import React from 'react'

export const Artist = (props) => {
  return (
    <div className="artist">
      <a href={props.url} className="artistLink">{props.name}</a>
    </div>
  )
}
