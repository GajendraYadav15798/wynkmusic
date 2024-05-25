
import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicCard from "./musicpages/MusicCard";
import MusicPlayer from "./MusicPlayer";
import { FaPlay } from "react-icons/fa";
import { RiDownload2Line, RiMore2Fill } from "react-icons/ri";

function Trending() {
  const [getData, setData] = useState([]);
  const [getMusic, setMusic] = useState(null);

  useEffect(() => {
    musicList();
  }, []);

  const musicList = async () => {
    try {
      const res = await axios.get(
        'https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"happy"}',
        {
          headers: {
            projectId: "f104bi07c490",
          },
        }
      );
      console.log(res.data.data);
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onMusicHandler = (index) => {
    console.log(index);
    let list = getData[index];
    setMusic(list);
  };

  return (
    <>
      <div>
        <p
          style={{
            color: "#818A8C",
            fontWeight: '400',
            marginLeft: "10px",
            marginTop: "-25px",
            marginLeft: "155px",
          }}
        >
          Home<span style={{ fontSize: "55px" }}>.</span>
          <span
            style={{ marginLeft: "20px", color: "#818A8C", marginLeft: "15px",fontWeight: '400' }}
          >
            Playlists
          </span>
          <span style={{ marginLeft: "20px", color: "#818A8C" }}>
            <span style={{ fontWeight: '400' }}>.</span>Wynk Top 50
          </span>
          <br />
          <img src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602547587459_20240227155540404/1709054723971/15UMGIM59807_T1_cvrart.jpg" style={{marginTop:'75px',height:'395px',borderRadius:'5px'}}/>
        </p>
        <h1 style={{ color: "#FFFFFF", fontWeight: '300', marginLeft: "650px",marginTop:'-350px' }}>
        What Do You Mean?
        </h1>
        <h5
          style={{
            color: "#818A8C",
            fontWeight: '400',
            marginLeft: "650px",
            marginTop: "-25px",
          }}
        >
        Purpose
        </h5>
        <p style={{ marginLeft: "650px", marginTop: "-25px", color: "gray",fontWeight: '400' }}>
        03:25 • RBMG/Def Jam
        </p>
        <button
          style={{
            backgroundColor: "#FF5B69",
            marginRight: "10px",
            borderRadius: "25px",
            height: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "650px",
            cursor: "pointer",
          }}
        >
          <FaPlay
            style={{ marginLeft: "5px", color: "white", marginRight: "25px" }}
          />{" "}
          {/* Play icon */}
          <span style={{ fontSize: "25px", color: "white",fontWeight: '400' }}>Play Songs</span>
        </button>
        <button
          style={{
            backgroundColor: "black",
            marginRight: "10px",
            borderRadius: "25px",
            height: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "850px",
            marginTop: "-45px",
            cursor: "pointer",
            color: "#818A8C",
            border: "1px solid white",
          }}
        >
          <span style={{ fontSize: "45px", marginRight: "15px" }}>+</span>
          <span style={{ marginRight: "5px", fontSize: "25px" }}>Follow</span>
        </button>
        <RiDownload2Line
          style={{
            color: "white",
            border: "1px solid white",
            borderRadius: "50%",
            fontSize: "38px",
            marginLeft: "1990px",
            marginTop: "-35px",
          }}
        />
        <div style={{ marginTop: "-25px" }}>
          <RiMore2Fill
            style={{
              color: "white",
              border: "1px solid white",
              borderRadius: "50%",
              fontSize: "38px",
              marginLeft: "2070px",
              marginTop: "-195px",
            }}
          />
        </div>
      </div>
      <div
        className="fifty-Song"
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginBottom: "155px",
          marginLeft: "150px",
          marginRight: "150px",
          marginTop: "150px",
          gap:'95px'
        }}
      >
        {getData.map((obj, index) => (
          <MusicCard
            key={index}
            title={obj.title}
            thumbnail={obj.thumbnail}
            artist={obj.artist[0].name}
            id={index}
            onMusicHandler={onMusicHandler}
            playIcon={<FaPlay style={{ fontSize: "24px", color: "white" }} />} // Pass the play icon here
          />
        ))}
      </div>

      {/* MusicPlayer component */}
      {getMusic && (
        <MusicPlayer
          title={getMusic.title}
          thumbnail={getMusic.thumbnail}
          artist={getMusic.artist}
          audio_url={getMusic.audio_url}
          songId={getMusic._id}
        />
      )}
      <button
        style={{
          backgroundColor: "red",
          borderRadius: "40px",
          color: "white",
          padding: "10px 20px",
          marginTop: "60px",
          cursor: "pointer",
          marginLeft:'650px',
          height:'56px',
          width:'186px',
          fontSize:'26px',
          marginBottom:'35px'
        }}
       
      >
        Show More
      </button>
    </>
  );
}

export default Trending;
