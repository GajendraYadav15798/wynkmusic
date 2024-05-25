import axios from 'axios';
import { useState, useEffect } from 'react';
import { useUser } from '../../providers/UserProvider';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { IconContext } from 'react-icons';

function Library() {
   const { getToken } = useUser();
   const [getList, setList] = useState([]);
   const [error, setError] = useState(null); // State to store error information
   
   useEffect(() => {
      listOfLibrary();
   },);

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
                        <div className="music-title" >
                           {obj.title} 
                           <span onClick={() => deleteHandler(obj._id)}>
                              
                             <div style={{marginLeft:'10px',marginTop:'10px',cursor:'pointer'}}>
                             <button style={{color:'white',width:'100px',height:'30px',borderRadius:'15px',background:'red'}}>Delete</button>
                             </div>
                           
                           </span>
                           
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
}

export default Library;
