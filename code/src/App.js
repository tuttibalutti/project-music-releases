import React from 'react'
import data from './data.json'
import Album from './Album'
import Artist from './Artist'

//TO-DO:
//1. [_] get images to work - album cover image
//2. [/] get urls to work - album & artist
//2.5 [X] get artist names to become URLs to each artists own page
//2.7 [X] get each artist name to link to their respective url, not just the first
//3. [_] make Artist its own compenent which is called
//4. [_] responsive - albums per row: 1 (mobile), 2 (tablet), 4 (desktop)
//5. [_] hover effects

console.log("album.artists.name:")
console.log(data.albums.items[0])

export const App = () => {
  return (
    <div className="app">
      {data.albums.items.map((album) => {
        return <Album albumName={album.name} artists={album.artists} image={album.images[0].url} albumUrl={album.external_urls.spotify} key={album.id}/>
      })
      }
      {/* {data.albums.items.artists.map((artist) => {
        return <Artist artistName={artist.name} key={artist.id}/>
      })
      } */}
    </div>
    //.maps happen here we think
  )
}


