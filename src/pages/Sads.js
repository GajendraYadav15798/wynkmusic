import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicCard from '../components/banners/musicpages/MusicCard';
import MusicPlayer from '../components/banners/MusicPlayer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Sads() {
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
                'https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"sad"}',
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
        console.log(index);
        let list = getData[index];
        setMusic(list);
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            partialVisibilityGutter: 40,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
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
            <h1 style={{ color: 'rgba(247, 245, 245)', marginLeft: '150px',fontWeight:'500'  }}>Sad Songs</h1>
            <div className='sads' style={containerStyle}>
                <Carousel
                    centerMode={true}
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true}
                    autoPlay={true}
                    infinite={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    transitionDuration={500}
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
}

export default Sads;
