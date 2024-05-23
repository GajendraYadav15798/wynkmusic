//  import { useUser } from "../../providers/UserProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";


const MusicPlayer = (props) => {
  const { title, thumbnail, audio_url, songId } = props;
 
  //  const { getToken } = localStorage.getItem('token');
  const [getWatchList, setWatchList] = useState(false);

  useEffect(() => {
    // You can fetch the user's watchlist status here if needed
    setWatchList(false);
  }, [props]);

  const onClickHandler = (songId) => {
    axios.patch('https://academics.newtonschool.co/api/v1/music/favorites/like', { songId: songId }, {
      headers: {
        projectID: 'f104bi07c490',
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((result) => {
      console.log(result);
       alert(result.data.message);
      setWatchList(true);
    }).catch((error) => {
      console.log(error);
    });
  };

// console.log(localStorage.getItem("token"));
  return (
    <section className="music-player">
      <img
        src={thumbnail}
        height={"50"}
        width={"50"}
        className="bannerImg"
        alt=""
      />
      <div className="music-title">{title}</div>
      <audio controls src={audio_url}  style={{width:"100%"}}/>
      <span style={{ 
        backgroundColor: getWatchList ? "red" : "gray", 
        borderRadius: "50%", 
        padding: "5px",
        backgroundImage: "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)",
        backgroundSize: "600% 600%",
        animation: "disco-light 1s infinite alternate"
      }}>
      
  <CiHeart style={{ color: "white",fontSize:'26px' }} />
</span>
      {/* Add onClick event handler to toggle favorite status */}
   {localStorage.getItem("token") && <span style={{cursor:'pointer'}} onClick={() => onClickHandler(songId)}> {getWatchList? 'Remove from Favorites' : 'Add to Favorites'} </span>}
    </section>   
  );
};

export default MusicPlayer;
