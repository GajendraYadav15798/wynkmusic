import axios from 'axios';
import { useState, useEffect } from 'react';
import { useUser } from '../../providers/UserProvider';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { IconContext } from 'react-icons';

function Library() {
   const { getToken } = useUser();
   const [getList, setList] = useState([]);
   const [error, setError] = useState(null); // State to store error information
   const [currentSong, setCurrentSong] = useState(null); // State to track the current song
   
   useEffect(() => {
      listOfLibrary();
   }, []);

   const deleteHandler = (songId) => {
      axios.patch('https://academics.newtonschool.co/api/v1/music/favorites/unlike', { songId: songId }, {
        headers: {
          projectID: 'f104bi07c490',
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }).then((result) => {
         listOfLibrary();
         console.log(result.data);
      }).catch((error) => {
        setError(error); // Set error state in case of failure
      });
   };

   const listOfLibrary = () => {
      axios.get('https://academics.newtonschool.co/api/v1/music/favorites/like', {
         headers: {
            projectID: 'f104bi07c490',
            Authorization: `Bearer ${localStorage.getItem("token")}`
         }
      }).then((result) => {
         console.log(result.data.data.songs)
         setList(result.data.data.songs);
      }).catch((err) => {
         console.log(err);
      })
   }

   const playSong = (audioUrl) => {
      setCurrentSong(audioUrl);
   }

   return (
      <div className="global-container">
         <div className="right-sidebar">
            <div className="music-container">
               {error && <div>Error: {error.message}</div>} {/* Display error message if error state is set */}
               {getList.map((obj,index) => {
                  return (
                     <div key={index} className="musicCard" style={{marginTop:'170px',marginBottom:'95px'}}>
                        <img
                           src={obj.thumbnail}
                           height={"150"}
                           width={"150"}
                           className="bannerImg"
                           alt=""
                        />
                        <div className="music-title">
                           {obj.title}
                           <div style={{marginLeft:'10px',marginTop:'10px',cursor:'pointer'}}>
                              <button 
                                 style={{color:'white',width:'100px',height:'30px',borderRadius:'15px',background:'#FF335F'}} 
                                 onClick={() => playSong(obj.audio_url)}>
                                 Play
                              </button>
                              <button 
                                 style={{color:'white',width:'100px',height:'30px',borderRadius:'15px',background:'red', marginLeft:'10px'}} 
                                 onClick={() => deleteHandler(obj._id)}>
                                 Delete
                              </button>
                           </div>
                        </div>
                     </div>
                  );
               })}
               {currentSong && <audio controls autoPlay src={currentSong}></audio>}
            </div>
         </div>
      </div>
   );
}

export default Library;
