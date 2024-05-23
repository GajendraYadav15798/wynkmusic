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
        <h2 className="heading__one">About Wynk Music</h2>
        <p>
          Wynk Music is a complete package that allows you free online music
          streaming, set caller tunes, listen to podcasts, download MP3 music
          offline, and much more! Since music is essentially the only thing that
          can truly understand a person, we consistently offer our audience the
          ideal blend of MP3 Songs by their favourite artists and of versatile
          genres.
        </p>
        <h2 className="heading__one">
          Play & Download FREE MP3 Songs in all languages
        </h2>
        <p>
          One of the unique features of Wynk Music is that it offers users the
          ability to stream music in multiple regional languages, including
          Hindi, Punjabi, Bengali, Tamil, Telugu, and more. Also, users of the
          app can download MP3 songs for offline listening. This online music
          platform provides access to additional features such as offline
          listening, high-quality audio, and exclusive content.
        </p>
        <h2 className="heading__one">
          Wynk Music – One Stop Destination for Offline & Online Music!
        </h2>
        <p>
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
            <h2>Best way to Listen to Music!</h2>
            <p>Don’t forget to install Wynk Music on your mobile phones</p>
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
      <div className="list">
        <div className="list__one">
          <h1 className="heading">LATEST ALBUMS</h1>
          <p className="para">
            Walkerworld | Crakk - Jeetegaa Toh Jiyegaa | Vikram Original Motion
            Picture Soundtrack | Thallumaala | Pushpa - The Rise | Ninna
            Sanihake | Praktan | Leo | Bhavartha Mauli | Yuva Sarkar | Mal mahu
            jiban mati | 1989 (Taylor's Version)
          </p>
        </div>
        <div className="list__two">
          <h1 className="heading">EXPLORE MUSIC GENRES</h1>
          <p className="paras">
            Rock Songs | Patriotic songs | Sufi Music | Ghazals | Workout Music
            | Devotional Songs | Sad Songs | DJ Songs
          </p>
        </div>
        <div className="list__three">
          <h1 className="heading">OLD SONGS</h1>
          <p className="paras__one">
            Old Songs | Old Hindi Songs | Old English Songs | Old Punjabi Songs
            | Old Telugu Songs | Old Tamil Songs | Old Bengali Songs | Old
            Malayalam Songs | Old Kannada Songs
          </p>
        </div>
        <div className="list__four">
          <h1 className="heading">TOP ARTISTS</h1>
          <p className="paras__two">
            Guru Randhawa | Arijit Singh | Atif Aslam | Justin Bieber | Gulzar |
            Armaan Malik | Sidhu Moose Wala | Alan Walker | Udit Narayan | Sonu
            Nigam | Sid Sriram | Akhil | Darshan Raval | Shreya Ghoshal | Alka
            Yagnik
          </p>
        </div>
      </div>
      <div className="raju">
        <div className="baju">
          <h1 className="heading__one">REGIONAL PLAYLISTS</h1>
          <p className="word">
            New Bengali Songs | New Bhojpuri Songs | New English Songs | New
            Haryanvi Songs | New Hindi Songs | New Kannada Songs | New Marathi
            Songs | New Punjabi Songs | New Tamil Songs | New Telugu Songs | New
            Odia Songs | New Rajasthani Songs | New Gujarati Songs | New
            Assamese Songs
          </p>
        </div>
        <div className="kaju">
          <h1 className="heading__one">LATEST SONGS</h1>
          <p className="word">
            Daaku | Zindagi Tere Naam (From "Yodha") | Nirmohi | Halki Halki Si
            | Class (From "Showtime") | Zaalim | Bade Miyan Chote Miyan Title
            Track | Ishq-E-Jaan | Galti | Ishq Mehfooz (Waiting On You) | Bin
            Tere | Top Class / Overseas | Tum Se (From "Teri Baaton Mein Aisa
            Uljha Jiya") | Saiyyan | Dhokhha Wahi
          </p>
        </div>
        <div className="baju">
          <h1 className="heading__one">TRENDING SONGS</h1>
          <p className="word">
            Akhiyaan Gulaab (From "Teri Baaton Mein Aisa Uljha Jiya") | O Maahi
            (From "Dunki") | Satranga (From "ANIMAL") | Pehle Bhi Main | Teri
            Baaton Mein Aisa Uljha Jiya Title Song (From "Teri Baaton Mein Aisa
            Uljha Jiya") | Husn | Kabhi Shaam Dhale | Kurchi Madathapetti |
            Zihaal e Miskin | Tu Meri Hai | Chaleya (From "Jawan") | Tum Se
            (From "Teri Baaton Mein Aisa Uljha Jiya") | Arjan Vailly | Ve
            Haaniyaan | Heeriye (feat. Arijit Singh)
          </p>
        </div>
        <div className="taju">
          <h4 className="heading__one">SONGS WITH LYRICS</h4>
          <p className="word">
            Coca Cola | Bom Diggy Diggy | Machayenge | Tera Yaar Hoon Main | Kar
            Gayi Chull (From "Kapoor & Sons (Since 1921)") | Morni Banke |
            Chalti Hai Kya 9 Se 12 | Hawayein
          </p>
        </div>
      </div>
      <div className="last__list">
        <div className="last">
          <h1 className="headings">WYNK TOP HITS</h1>
          <p className="word__one">
            Top 20 Bollywood Songs | Wynk Top 100 Songs | Top 20 English Songs |
            Trending Reels Songs
          </p>
        </div>
        <div className="last__one">
          <h1 className="headings">DEVOTIONAL SONGS</h1>
          <p className="word__one">
            Ganesh Ji Ki Aarti | Laxmi Ji Ki Aarti | Shri Hanuman Chalisa | Shiv
            Bhajan | Gurbani | Gurbani Shabad | Islamic Songs | Jesus Songs |
            Christian Songs
          </p>
        </div>
        <div className="last__two">
          <h1 className="headings">JOIN WYNK FOR ARTISTS</h1>
          <p className="word__ones">Wynk Studio | Wynk Studio for Artists</p>
        </div>
      </div>
<hr style={{width:'100%' ,color:"white"}}/>
      <div class="about">
        <span class="about-item">ABOUT </span>
        <span class="about-item">PRIVACY </span>
        <span class="about-item">TERMS</span>
        <span class="about-item">CONTACT</span>
        <span class="about-item">HELLOTUNES</span>

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
          <p className="one">
            Wynk Music is the one-stop music app for the latest to the greatest
            songs that you love. Play your favourite music online for free or
            download mp3. Enjoy from over 22 Million Hindi, English, Bollywood,
            Regional, Latest, Old songs and more.
          </p>
        </div>
        <div className="__paraone_">
          <p className="two">
            2024 © All rights reserved | Airtel Digital Limited
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;


