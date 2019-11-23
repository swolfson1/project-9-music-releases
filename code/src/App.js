import React from 'react'
import data from './data.json'
import { Album } from './Album'
import { Artist } from './Artist'


console.log(data)


export const App = () => {
  return (


    <div className="topHitsContainer">
      {releases.map(album => {
        return (
          <Album
            key={album.id}
            name={album.name}
            url={album.external_urls.spotify}
            image={album.images[1].url}>
            {album.artists.map(artist => {
              return (
                <Artist
                  key={artist.id}
                  name={artist.name}
                  url={artist.external_urls.spotify} />
              )
            })}
          </Album>
        )
      })
      })}
        </div>
  );
};











const releases = data.albums.items;
