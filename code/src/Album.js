import React from 'react'
//import { Artist } from './Artist'

const Album = (props) => {  //for albumArt: style={{ backgroundImage: `url(${props.image})` }}
    return (
        <div className="album">
            <div className="albumArt" >
                <img src={props.image} className="cover"></img>
                <div className="overlay"></div>
                <div className="icons">
                    <img src="icons/heart.svg" className="heart"></img>
                    <img src="icons/play.svg" className="play"></img>
                    <img src="icons/dots.svg" className="dots"></img>
                </div>
            </div>
            
            

            <div className="albumName">
                <a href={props.albumUrl}>{props.albumName}</a>
            </div>
            <div className="artists">
                {props.artists.map((artist, index) => {
                if(index === props.artists.length-1) { //would mean that you are at the last artist
                    console.log(index)
                    console.log(artist.external_urls.spotify)
                    return (<a href={artist.external_urls.spotify}>{artist.name}</a>)
                }
                else {  //would mean that you are NOT at the last artist
                    return (<a href={artist.external_urls.spotify}>{artist.name}, </a>)
                }
                })}
            </div>
        </div>
    )
}



export default Album;