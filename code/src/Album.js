
import React from 'react'

export const Album = (props) => {
  return (
    <div className="container">

      <article className="album">
        <a href={props.url} className="albumlink">
          <div className="albumCover">
            <img src={props.image} alt="" className="albumCoverImage" />
            <div className="albumIcons">
              <img src="icons/heart.svg" alt="favourites" className="favIcon" />
              <img src="icons/play.svg" alt="Play album" className="playIcon" />
              <img src="icons/dots.svg" alt="More" className="moreIcon " />
            </div>
          </div>
          <h2 className="album-title">{props.name}</h2 >
        </a>
        {props.children}
      </article>

    </div>
  )
}