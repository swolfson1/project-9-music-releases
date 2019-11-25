import React from 'react'
import './Album.css'

export const Album = (props) => {
  return (


    <div>

      <div className="albumCard">
        <div className="albumIcons">
          <img src="icons/heart.svg" alt="favourites" className="favIcon" />
          <div>
            <a href={props.url}><img className="iconPlay" src="icons/play.svg" alt="Play" /></a>
          </div>

          <img src="icons/dots.svg" alt="More" className="moreIcon" />
        </div>


        <div >
          <img src={props.image} className="albumCoverImage" alt="Album cover" />
        </div>

        <div className="albumInfo">

          <div className="albumTitle">
            <a href={props.url}><p>{props.name}</p></a>
          </div>

          <div className="artistName">
            <p>{props.children}</p>

          </div>

        </div>

      </div>
    </div>


  )
}

