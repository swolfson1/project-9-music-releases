import React from 'react'
import data from './data.json'
import { Album } from './Album'
import { Artist } from './Artist'
import './app.css'


// console.log(data)

const spotify = data.albums.items;

export const App = () => {
  return (

    <section className="containier">

      {spotify.map(album => {
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
        </section>
  );
};











