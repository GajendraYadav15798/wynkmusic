import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
import { RiDownload2Line, RiMore2Fill } from "react-icons/ri";
import MusicPlayer from "./MusicPlayer";

function Toptwenty() {
  const [getData, setData] = useState([]);
  const [getMusic, setMusic] = useState(null);

  useEffect(() => {
    musicList();
  }, []);

  const musicList = async () => {
    try {
      const res = await axios.get(
        'https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Top 20 of this week "}',
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
      <div className="header">
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
        style={{ marginLeft: "20px", color: "#818A8C", marginLeft: "15px",fontWeight:'300' }}
      >
        Playlists
      </span>
      <span style={{ marginLeft: "20px", color: "#818A8C" }}>
        <span style={{ fontSize: "55px",fontWeight:'300' }}>.</span>Wynk Top 20
      </span>
      <br />
      <img
        src="https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/20240506141047347/3617387818721/1714998628487/resources/3617387818721.jpg"
        style={{
          marginTop: "75px",
          height: "300px",
          borderRadius: "25px",
          paddingTop: "15px",
          height: "250px",
         
          marginLeft:'-645px'
        }}
      />
    </p>
    <h1
      style={{
        color: "#FFFFFF",
        fontWeight:'300',
        marginLeft: "-460px",
        marginTop: "-290px",
      }}
    >
    Bebe Bapu
    </h1>
    <h5
      style={{
        color: "#818A8C",
        fontWeight:'300',
        marginLeft: "-530px",
        marginTop: "-25px",
      }}
    >
    Bebe Bapu
    </h5>
    <p style={{ marginLeft: "-450px", marginTop: "-25px", color: "gray" }}>
    03:55 • Harsh Likhari
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
        marginLeft: "-400px",
        cursor: "pointer",
        width:'180px'
      }}
    >
      <FaPlay
        style={{ marginLeft: "5px", color: "white", marginRight: "25px" }}
      />{" "}
      {/* Play icon */}
      <span style={{ fontSize:'18px', color: "white" }}>Play Songs</span>
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
        marginLeft: "-30px",
        marginTop: "-50px",
        cursor: "pointer",
        color: "#818A8C",
        border: "1px solid white",
        width:'180px'
       
      }}
    >
      <span style={{ marginRight: "5px", fontSize: "25px" }}>Follow</span>
    </button>

    
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


      <div className="song-list" style={{ marginLeft: "420px",marginTop:'-345px' }}>
        <table>
          <thead style={{ color: "gray" }}>
            <tr>
              <th className="header-number" style={{fontWeight:'300'}}>#</th>
              <th className="header-track " style={{fontWeight:'300'}}>Track</th>
              <th className="header-artist" style={{fontWeight:'300'}}>Artists</th>
              <th className="header-album" style={{fontWeight:'300'}}>Album</th>
              <th className="header-action" style={{fontWeight:'300'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((obj, index) => (
              <tr key={index}>
                <td className="song-number" style={{ color: "#fff" ,fontWeight:'300'}}>
                  {index + 1}
                </td>
                <td className="song-track">
                  <div className="track-container">
                    <img
                      src={obj.thumbnail}
                      className="track-thumbnail"
                      alt="Track Thumbnail"
                      style={{ height: "45px", width: "45px" ,fontWeight:'300'}}
                    />
                  </div>
                </td>
                <td
                  className="song-artist"
                  style={{ color: "gray", paddingLeft: "55px" }}
                >
                  {obj.artist[0].name}
                </td>
                <td
                  className="song-album"
                  style={{ color: "gray", paddingLeft: "290px" }}
                >
                  {obj.title}
                </td>
                <td className="song-action">
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
          background: "#FF5D69",
          borderRadius: "45px",
          marginLeft: "545px",
          height: "50px",
          width: "145px",
          marginBottom: "30px",
          color:'white',
          fontWeight:'600'
        }}
      >
        Show More
      </button>
      </div>
    </>
  );
}

export default Toptwenty;
