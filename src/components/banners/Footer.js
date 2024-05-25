import React, { useEffect, useState } from "react";
import "./Footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__one">
        <h2 className="heading__one" style={{fontWeight:'300'}}>About Wynk Music</h2>
        <p style={{fontWeight:'500'}}>
          Wynk Music is a complete package that allows you free online music
          streaming, set caller tunes, listen to podcasts, download MP3 music
          offline, and much more! Since music is essentially the only thing that
          can truly understand a person, we consistently offer our audience the
          ideal blend of MP3 Songs by their favourite artists and of versatile
          genres.
        </p>
        <h2 className="heading__one" style={{fontWeight:'300'}}>
          Play & Download FREE MP3 Songs in all languages
        </h2>
        <p style={{fontWeight:'500'}}>
          One of the unique features of Wynk Music is that it offers users the
          ability to stream music in multiple regional languages, including
          Hindi, Punjabi, Bengali, Tamil, Telugu, and more. Also, users of the
          app can download MP3 songs for offline listening. This online music
          platform provides access to additional features such as offline
          listening, high-quality audio, and exclusive content.
        </p>
        <h2 className="heading__one" style={{fontWeight:'300'}}>
          Wynk Music – One Stop Destination for Offline & Online Music!
        </h2>
        <p style={{fontWeight:'500'}}>
          Wynk Music offers users access to a vast library of music, including
          Indian and international tracks across various genres like Bollywood,
          Punjabi, pop, rock, and more. We have made online music streaming
          simple, fun, and all about you! So, what’s the wait for, discover and
          listen to millions of songs, playlists, podcasts & download MP3 songs
          on any device including mobile for free exclusively on Wynk Music.
          Keep Wynking!
        </p>
      </div>

      <div className="music__logo">
        <div className="logo__music">
          <div className="image">
            <img
              src="https://asset.brandfetch.io/idhXjxLF9g/idxvsamq5q.png"
              height="80px"
              width="80px"
              alt="Wynk-logo"
            />
          </div>
          <div className="logo__app">
            <h2 style={{fontWeight:'300'}}>Best way to Listen to Music!</h2>
            <p style={{fontWeight:'300'}}>Don’t forget to install Wynk Music on your mobile phones</p>
          </div>
        </div>

        <div className="play__store">
          <img
            src="https://www.pngall.com/wp-content/uploads/10/Google-Play-PNG-Clipart.png"
            alt="Google-Play"
            className="image__play"
          />

          <img
            src="https://p7.hiclipart.com/preview/368/574/541/iphone-app-store-google-play-android-download-now-button.jpg"
            alt="Apple-Play"
            className="apple__store"
          />
        </div>
      </div>
     
<hr style={{width:'100%' ,color:"white"}}/>
      <div class="about">
        <span class="about-item" style={{fontWeight:'400'}}>ABOUT </span>
        <span class="about-item" style={{fontWeight:'400'}}>PRIVACY </span>
        <span class="about-item" style={{fontWeight:'400'}}>TERMS</span>
        <span class="about-item" style={{fontWeight:'400'}}>CONTACT</span>
        <span class="about-item" style={{fontWeight:'400'}}>HELLOTUNES </span>

        <div className="icons-container">
          <div className="icon">
            <div className="icon-item">
              <FacebookIcon />
            </div>
            <div className="icon-item">
              <TwitterIcon />
            </div>
            <div className="icon-item">
              <InstagramIcon />
            </div>
            <div className="icon-item">
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>
      <hr style={{width:'100%', color:'white'}}/>
      <div className="last__para">
        <div className="__para_">
          <p className="one" style={{fontWeight:'500'}}>
            Wynk Music is the one-stop music app for the latest to the greatest
            songs that you love. Play your favourite music online for free or
            download mp3. Enjoy from over 22 Million Hindi, English, Bollywood,
            Regional, Latest, Old songs and more.
          </p>
        </div>
        <div className="__paraone_">
          <p className="two"style={{fontWeight:'500'}}>
            2024 © All rights reserved | Airtel Digital Limited
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;


