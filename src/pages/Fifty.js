import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicCard from '../components/banners/musicpages/MusicCard';
import MusicPlayer from '../components/banners/MusicPlayer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaPlay } from 'react-icons/fa';

const Fifty = () => {
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
            const res = await axios.get(
                'https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Top 50 of this month"}',
                {
                    headers: {
                        projectId: 'f104bi07c490',
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
        let list = getData[index];
        setMusic(list);
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            partialVisibilityGutter: 40,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            partialVisibilityGutter: 30,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 20,
        },
    };

    const containerStyle = {
        marginLeft: isMobile ? '10px' : '150px',
        marginRight: isMobile ? '10px' : '150px',
    };

    return (
        <>
            <h1 style={{ color: 'gray', marginLeft: containerStyle.marginLeft,fontStyle:'italic' }}>Top 50 of this month</h1>
            <div className="new" style={containerStyle}>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px pr-[15px]"
                >
                    {getData.map((obj, index) => (
                        <div key={index}>
                            <MusicCard
                                title={obj.title}
                                thumbnail={obj.thumbnail}
                                artist={obj.artist}
                                id={index}
                                onMusicHandler={onMusicHandler}
                            />
                        </div>
                    ))}
                </Carousel>
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

export default Fifty;
