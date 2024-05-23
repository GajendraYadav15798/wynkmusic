import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function MusicCard(props) {
  const { title, thumbnail, artist = [], id, onMusicHandler } = props;
  const [isHovered, setIsHovered] = useState(false);
  const artistList = Array.isArray(artist) ? artist.map(item => item.name).join(" & ") : '';

  return (
    <section className="musicCard">
      <div
        onClick={() => onMusicHandler(id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: "250px",
          height: "250px",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <img
          src={thumbnail}
          height={"250"}
          width={"250"}
          className="bannerImg"
          alt={title}
          style={{ borderRadius: '9px', filter: isHovered ? 'brightness(50%)' : 'brightness(100%)' }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: isHovered ? "rgba(0, 0, 0, 0.5)" : "transparent",
            borderRadius: "50%",
            padding: "10px",
            display: isHovered ? "block" : "none",
          }}
        >
          <FaPlay
            style={{
              fontSize: "24px",
              color: "red",
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              background: isHovered ? "white" : "transparent",
            }}
          />
        </div>
      </div>
      <div className="music-title" style={{ textAlign: "center", color: "white", marginTop: "10px" }}>
        {title}
      </div>
      <div className="artist" style={{ textAlign: "center", color: "white", marginTop: "5px" }}>
        {artistList}
      </div>
    </section>
  );
}
