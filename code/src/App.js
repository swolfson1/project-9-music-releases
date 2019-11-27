import React from 'react'
import data from './data.json'
import { Album } from './Album.js'
import { Artist } from './Artist.js'
import { Header } from './components/Header'



// console.log(data)

const spotify = data.albums.items;

export const App = () => {
  return (
    <div id="container">
      <div>
        <Header />
      </div >


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

      })}
    </div>
  );
};











