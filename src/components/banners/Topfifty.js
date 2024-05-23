import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicCard from "./musicpages/MusicCard";
import MusicPlayer from "./MusicPlayer";
import { FaPlay, FaHeart } from "react-icons/fa"; // Import FaHeart
import { RiDownload2Line, RiMore2Fill } from "react-icons/ri";

function Topfifty() {
  const [getData, setData] = useState([]);
  const [getMusic, setMusic] = useState(null);

  useEffect(() => {
    musicList();
  }, []);

  const musicList = async () => {
    try {
      const res = await axios.get(
        'https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Top 50 of this month"}',
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
            fontSize: "18px",
            marginLeft: "10px",
            marginTop: "-25px",
            marginLeft: "155px",
          }}
        >
          Home<span style={{ fontSize: "55px" }}>.</span>
          <span
            style={{ marginLeft: "20px", color: "#818A8C", marginLeft: "15px" }}
          >
            Playlists
          </span>
          <span style={{ marginLeft: "20px", color: "#818A8C" }}>
            <span style={{ fontSize: "55px" }}>.</span>Wynk Top 20
          </span>
          <br />
          <img
            src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/663899596438_20240515024606/663899596438/1715722504837/resources/663899596438.jpg"
            style={{
              marginTop: "75px",
              height: "395px",
              borderRadius: "25px",
              paddingTop: "15px",
              height: "329px",
              width: "325px",
            }}
          />
        </p>
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: "45px",
            marginLeft: "550px",
            marginTop: "-350px",
          }}
        >
          Peg Banade
        </h1>
        <h5
          style={{
            color: "#818A8C",
            fontSize: "20px",
            marginLeft: "550px",
            marginTop: "-25px",
          }}
        >
          Peg Banade
        </h5>
        <p style={{ marginLeft: "550px", marginTop: "-25px", color: "gray" }}>
          02:12 • Bajao Gaana Studios
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
            marginLeft: "550px",
            cursor: "pointer",
          }}
        >
          <FaPlay
            style={{ marginLeft: "5px", color: "white", marginRight: "25px" }}
          />{" "}
          {/* Play icon */}
          <span style={{ fontSize: "25px", color: "white" }}>Play Songs</span>
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
            marginLeft: "750px",
            marginTop: "-45px",
            cursor: "pointer",
            color: "#818A8C",
            border: "1px solid white",
          }}
        >
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
        }}
      ></div>
      <div
        className="fifty-Song"
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginBottom: "155px",
          marginLeft: "150px",
          marginRight: "150px",
          marginTop: "150px",
        }}
      ></div>

      <div className="fifty-Song">
      <div style={{ marginLeft: "500px", marginTop: "-350px" }}>
        <table>
          <thead>
            <tr style={{ color: "gray" }}>
              <th>#</th>
              <th>Track</th>
              <th>Artists</th>
              <th>Album</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((obj, index) => (
              <tr key={index}>
                <td style={{ color: "white" }}>{index + 1}</td>
                <td>
                  <div style={{ position: "relative" }}>
                    <img
                      src={obj.thumbnail}
                      style={{
                        height: "50px",
                        cursor: "pointer",
                        marginLeft: "12px",
                      }}
                    />
                    <RiDownload2Line
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "-1370px",
                        transform: "translateY(-50%)",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                    />
                    <RiMore2Fill
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "-1430px",
                        transform: "translateY(-50%)",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </td>
                <td style={{ color: "gray", paddingLeft: "35px" }}>
                  {obj.artist[0].name}
                </td>
                <td style={{ color: "gray", paddingLeft: "225px" }}>
                  {obj.title}
                </td>
                <td>
                  <button
                    onClick={() => onMusicHandler(index)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "45px",
                      height: "20px",
                      width: "100px",
                    }}
                  >
                    Play
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
            background: "red",
            borderRadius: "45px",
            marginLeft: "905px",
            height: "50px",
            width: "145px",
            marginBottom: "30px",
          }}
        >
          Show More
        </button>
      </div>
    </>
  );
}

export default Topfifty;
