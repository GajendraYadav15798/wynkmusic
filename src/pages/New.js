import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicCard from '../components/banners/musicpages/MusicCard';
import MusicPlayer from '../components/banners/MusicPlayer';
import { FaPlayCircle } from 'react-icons/fa';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const New = () => {
    const [getData, setData] = useState([]);
    const [getMusic, setMusic] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        musicList();
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const musicList = async () => {
        try {
            const res = await axios.get('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Trending songs"}', {
                headers: {
                    'projectId': 'f104bi07c490'
                }
            });
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const containerStyle = {
        margin: isMobile ? '0 10px' : '0 150px',
    };

    return (
        <>
            <h1 style={{ color: 'gray', marginLeft: '150px',fontStyle:'italic' }}>Trending Songs</h1>
            <div style={containerStyle}>
                <Slider {...settings}>
                    {getData.map((obj, index) => (
                        <div key={index} style={{ position: 'relative', textAlign: 'center' }}>
                            <MusicCard
                                title={obj.title}
                                thumbnail={obj.thumbnail}
                                artist={obj.artist}
                                id={index}
                                onMusicHandler={onMusicHandler}
                            />
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: 'red',
                                borderRadius: '50%',
                                padding: '10px'
                            }}>
                                <FaPlayCircle 
                                    style={{
                                        fontSize: '3rem',
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        cursor: 'pointer'
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
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
        </>
    );
};

export default New;
