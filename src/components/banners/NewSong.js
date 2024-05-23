import React from 'react'
import { useState, useEffect } from 'react';
import axios  from 'axios';
import MusicCard from './musicpages/MusicCard';
import MusicPlayer from './MusicPlayer';
function NewSong() {
    const [getData, setData]=useState( []);
    const [getMusic, setMusic]=useState(null);
  
 
    useEffect(()=>{
       musicList();
    }, [])

    const musicList = async ()=>{
        try {
            const res = await axios.get('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Old songs', {
            headers:{
                'projectId': 'f104bi07c490'
            }
        })
        console.log(res.data.data);
        setData(res.data.data);
            
        } catch (err) {
            console.log(err);
        }
        
    }
    let onMusicHandler;

    onMusicHandler = (index)=>{
        debugger;
        console.log(index);
        let list = getData[index];
        setMusic(list);
     };

   
    return (<>
     <div className="music-file">
            {
                getData.map((obj, index) => (
                    <MusicCard 
                        key={index}
                        title={obj.title}
                        thumbnail ={obj.thumbnail}
                        artist ={obj.artist}
                        id={index}
                        onMusicHandler = {onMusicHandler}
                    />
                ))
            }
            {getMusic && (<MusicPlayer 
    title = {getMusic.title}
    thumbnail = {getMusic.thumbnail}
    artist = {getMusic.artist}
    audio_url={getMusic.audio_url}
    songId ={getMusic._id}

/>)} 
            </div>
            </>
   
  )
}

export default NewSong