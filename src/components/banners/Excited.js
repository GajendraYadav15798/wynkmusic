import React from 'react'
import { useState, useEffect } from 'react';
import axios  from 'axios';
import MusicCard from './musicpages/MusicCard';
function Excited() {
    const [getData, setData]=useState( []);
    const [getMusic, setMusic]=useState(null);
  
 
    useEffect(()=>{
       musicList();
    }, [])

    const musicList = async ()=>{
        try {
            const res = await axios.get('https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"excited"}', {
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
     <div className="excited"  style={{flexDirection:"column",marginLeft:'950px'}}>
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
            {getMusic}
            </div>
            </>
   
  )
}

export default Excited;